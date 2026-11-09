#!/usr/bin/env python3
"""Check public external links in site content pages.

Skips content.redhat.com (auth wall), github.com edit links, and Power 5
learning-video hosts that often 404 to unauthenticated checkers.
Writes a markdown report and exits non-zero when broken links are found.
"""

from __future__ import annotations

import argparse
import re
import sys
import time
from collections import defaultdict
from pathlib import Path

try:
    from curl_cffi import requests
except ImportError:  # pragma: no cover
    print("Install curl_cffi first: pip install curl_cffi", file=sys.stderr)
    sys.exit(2)

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_GLOBS = (
    "datasheets.md",
    "ebooks.md",
    "customer_references.md",
    "README.md",
    "ux.md",
)
SKIP_HOST_PREFIXES = (
    "https://content.redhat.com/",
    "https://github.com/",
    "http://github.com/",
    # Power 5 / RH learning videos: auth-gated or checker-unfriendly; keep on site.
    "https://videos.learning.redhat.com/",
)
HREF_RE = re.compile(r'href="(https?://[^"]+)"', re.I)
# Also skip any href that appears inside a Power 5 bulletin table.
POWER5_TABLE_RE = re.compile(
    r'<table class="bulletin-power5">.*?</table>',
    re.I | re.S,
)


def collect_links(files: list[Path]) -> list[tuple[str, str]]:
    found: list[tuple[str, str]] = []
    seen: set[tuple[str, str]] = set()
    for path in files:
        text = path.read_text(encoding="utf-8", errors="replace")
        rel = str(path.relative_to(ROOT))
        # Strip Power 5 bulletin tables so their links are never reported.
        scan_text = POWER5_TABLE_RE.sub("", text)
        for url in HREF_RE.findall(scan_text):
            if any(url.startswith(p) for p in SKIP_HOST_PREFIXES):
                continue
            key = (rel, url)
            if key in seen:
                continue
            seen.add(key)
            found.append(key)
    return found


def classify(url: str, status: int, body: str) -> str:
    lower = body[:8000].lower()
    if "access denied" in lower or "request rejected" in lower:
        return "blocked"
    if status == 404:
        return "broken"
    if status >= 400:
        return "error"
    if (
        "page not found" in lower
        or "we couldn't find that page" in lower
        or "404 - page not found" in lower
    ):
        return "broken"
    return "ok"


def check_url(url: str) -> tuple[int | str, str]:
    try:
        resp = requests.get(
            url,
            impersonate="chrome124",
            timeout=30,
            allow_redirects=True,
        )
        return resp.status_code, classify(url, resp.status_code, resp.text)
    except Exception as exc:  # noqa: BLE001
        return str(exc)[:80], "error"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--report",
        default="link-check-report.md",
        help="Path for the markdown report",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=0.4,
        help="Delay between requests in seconds",
    )
    parser.add_argument(
        "files",
        nargs="*",
        help="Optional explicit files to scan (defaults to main content pages)",
    )
    args = parser.parse_args()

    files = [ROOT / f for f in (args.files or DEFAULT_GLOBS)]
    files = [f for f in files if f.exists()]
    if not files:
        print("No content files found to scan", file=sys.stderr)
        return 2

    links = collect_links(files)
    print(f"Checking {len(links)} unique file/url pairs...")

    by_status: dict[str, list[tuple[str, str, int | str]]] = defaultdict(list)
    for i, (rel, url) in enumerate(links, 1):
        code, status = check_url(url)
        by_status[status].append((rel, url, code))
        print(f"[{i}/{len(links)}] {status.upper():7} {code}  {rel}")
        time.sleep(args.delay)

    broken = by_status.get("broken", [])
    errors = by_status.get("error", [])
    blocked = by_status.get("blocked", [])
    ok = by_status.get("ok", [])

    lines = [
        "# External link check report",
        "",
        f"Scanned **{len(links)}** public links across "
        + ", ".join(f"`{f.relative_to(ROOT)}`" for f in files)
        + ".",
        "",
        f"- OK: {len(ok)}",
        f"- Broken (404): {len(broken)}",
        f"- Errors: {len(errors)}",
        f"- Blocked by WAF: {len(blocked)}",
        "",
    ]

    if broken:
        lines.extend(["## Broken links", ""])
        for rel, url, code in broken:
            lines.append(f"- `{rel}` → `{code}` {url}")
        lines.append("")

    if errors:
        lines.extend(["## Request errors", ""])
        for rel, url, code in errors:
            lines.append(f"- `{rel}` → `{code}` {url}")
        lines.append("")

    if blocked:
        lines.extend(
            [
                "## Blocked (could not verify)",
                "",
                "These hosts rejected the checker; re-check manually if needed.",
                "",
            ]
        )
        for rel, url, code in blocked:
            lines.append(f"- `{rel}` → `{code}` {url}")
        lines.append("")

    report_path = Path(args.report)
    if not report_path.is_absolute():
        report_path = ROOT / report_path
    report_path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"Wrote {report_path}")

    # Fail the job when there are confirmed broken links.
    return 1 if broken else 0


if __name__ == "__main__":
    sys.exit(main())
