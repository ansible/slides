---
title: Ansible Slide Finder (New UX)
permalink: /ux/
---

<div class="page-intro">
  <h1>Ansible Slide Finder</h1>
  <span class="page-lang">
    <a class="lang-btn is-active" href="{{ '/ux/' | relative_url }}" hreflang="en" aria-current="page">
      <img src="https://raw.githubusercontent.com/ansible/slides/main/images/uk.png" alt="" width="16" height="12">
      <span>EN</span>
    </a>
    <a class="lang-btn" href="{{ '/README_jp.html' | relative_url }}" hreflang="ja">
      <img src="https://raw.githubusercontent.com/ansible/slides/main/images/japan.png" alt="" width="16" height="12">
      <span>日本語</span>
    </a>
    <a class="lang-btn" href="{{ '/README_es.html' | relative_url }}" hreflang="es">
      <img src="assets/images/spain.png" alt="" width="16" height="12">
      <span>ES</span>
    </a>
  </span>
  <span class="editlink">[<a target="_new" href="https://github.com/IPvSean/slides/edit/main/ux.md">edit</a>]</span>
</div>

<div class="deck-filter-bar">
  <div class="deck-filter-field">
    <label class="deck-filter-label" for="deck-filter">Search decks</label>
    <span class="deck-filter-icon" aria-hidden="true"></span>
    <input type="search" id="deck-filter" class="deck-filter-input" placeholder="Search by title, topic, or link text…" autocomplete="off">
  </div>
  <span id="deck-filter-status" class="deck-filter-status" aria-live="polite"></span>
</div>

<div class='parentsean'>
<nav class="tableofcontents" aria-label="On this page" markdown="1">

**On this page**

- [Platform](#platform)
- [Analysts - Market research](#analysts---market-research)
- [ROI (Return on Investment)](#roi-return-on-investment)
- [Release information](#release-information)
- [AI - Artificial Intelligence](#ai---artificial-intelligence)
- [EDA - Event-Driven Ansible](#eda---event-driven-ansible)
- [Edge Automation](#edge-automation)
- [Hybrid Cloud Automation](#hybrid-cloud-automation)
  - [Public Cloud](#public-cloud)
  - [Hashicorp + Ansible](#hashicorp--ansible)
  - [On Cloud](#on-cloud)
  - [OpenShift Cloud Native](#openshift-cloud-native)
  - [OpenShift Virtualization](#openshift-virtualization)
  - [Private Cloud - VMware](#private-cloud---vmware)
- [Network Automation](#network-automation)
- [Infrastructure Automation](#infrastructure-automation)
- [Policy Enforcement](#policy-enforcement)
- [Security Automation](#security-automation)
- [ServiceNow ITSM Automation](#servicenow-itsm-automation)
- [Reference Architectures](#reference-architectures)
- [Logos, Graphics, Icons and Brand Rules](#logos-graphics-icons-and-brand-rules)

</nav>

<div class='highlighttable'>
<table class="bulletin-new">
<thead>
<tr>
<th>New</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://saleshub.redhat.com/Link/Content/DCq4DGPW7WFTBGhD7JhPm3BhpTPV">AAP + Customer Win</a>
<span class="bulletin-meta">Aug 7, 2026 · Major global financial services and insurance company</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://saleshub.redhat.com/Link/Content/DC39D99BDQp4C8qVQHpCqD6gjJ7j">Master your AAP 2.7 Pitch</a>
<span class="bulletin-meta">Aug 7, 2026</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://training-lms.redhat.com/sso/saml/auth/rhopen?RelayState=deeplinkoffering%3D92483258">Partner Tech Power Hour on AAP 2.7</a>
<span class="bulletin-meta">Aug 7, 2026</span>
</td>
</tr>
</tbody>
</table>

<table class="bulletin-power5">
<thead>
<tr>
<th>Power 5</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://videos.learning.redhat.com/media/Power%205%20-%20Episode%2068%20%22Master%20your%20AAP%202_7%20Pitch%22/1_5soe6g6j/366567272">Ep 68 — Master your AAP 2.7 Pitch</a>
<span class="bulletin-meta">Jun 17, 2026 · Tricia McConnell</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://videos.learning.redhat.com/media/1_4pszx8k5">Ep 66 — AAP + MetLife Win</a>
<span class="bulletin-meta">May 7, 2026 · Harper Buete and Tucker Fisher</span>
</td>
</tr>
</tbody>
</table>

<table class="bulletin-docs">
<thead>
<tr>
<th>Docs</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://access.redhat.com/articles/7095801">AAP 2.5 tested topologies</a>
<span class="bulletin-kind bulletin-kind--kb">KB</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://access.redhat.com/support/policy/updates/ansible-automation-platform">AAP life cycle</a>
<span class="bulletin-kind bulletin-kind--kb">KB</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://docs.redhat.com/en/documentation/red_hat_ansible_automation_platform/latest/html-single/tested_deployment_models/index">Tested deployment models</a>
<span class="bulletin-kind bulletin-kind--docs">Docs</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://docs.redhat.com/en/documentation/red_hat_ansible_automation_platform/2.7/whats_new-overview_of_redhat_ansible_intro">2.7 release notes</a>
<span class="bulletin-kind bulletin-kind--docs">Docs</span>
</td>
</tr>
</tbody>
</table>
</div>

</div>

<p class="catalog-lede">Browse by topic</p>

# Platform

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Automation Platform Pitch Deck for AEs (2024 version)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1QYQL6A0AalmVQ-woZhMkXovFTLcdjQzY4s4lYJkMDpQ/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=a8196555-1175-48b1-83df-171aa6697334" target="_new">Partners</a></div>
<ul><li><a href="https://videos.learning.redhat.com/media/1_0dz25zji" target="_blank">How to use this deck (Video)</a></li></ul>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Automation Platform Technical Deck for SSPs and SAs</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1sa_O12EIRG-fdChArYJf9HZe6wKDfqjnIAiH3udL39s/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=f07af1ec-7fe9-42ef-9cae-bc6bb651ea1d" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Automation Platform Strategy &amp; Roadmap</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1UUIG4j4C6Gb2el80BnCIw4MlChv7Nj7FX9K_MHUJPmI/edit?slide=id.g3ebe50672aa_0_0#slide=id.g3ebe50672aa_0_0" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=167d5ee4-2634-4e30-b53e-6c326443c82b" target="_blank">Partners</a></div>
</li>
</ul>

# Analysts - Market research

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">ABU | 2024 Forrester Wave for Infrastructure Automation Slide</strong>
<div class="info-bubble"><span aria-hidden="true" class="info-bubble-icon"></span><span class="info-bubble-text">A new 2026 Forrester Wave is coming soon, please attend office hours for more info</span></div>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1lwGlHO21R42ov1SmNQTfuIEj7QiUAbwkKxiCsJtDIx8/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=0191e421-44b8-4266-b513-4f16854c87cf" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">IDC 2024: Unlock the Business Value of IT Automation</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1BR0wm_QM7IsXQwzjqdQAw4mppLM6WxwbQf36nHmQyJo/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=2c001f57-d8ae-49d9-8924-b5b7519e7d56" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Red Hat Ansible G2 Review Highlights</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1n8oYeaIlThs71BLeEYIRfHQfefVY_H-zgYaQTrGsVyY/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=61aad783-0421-440b-b959-b73efc586502" target="_blank">Partners</a></div>
</li>
</ul>

# ROI (Return on Investment)

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Red Hat Ansible Automation Platform by the numbers (FY26)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1R4PXvhNOOEX9QUURHluPVdGP0anNbZHXBUBuiG96jOo/edit?slide=id.gbcf8801439_1_0#slide=id.gbcf8801439_1_0" target="_new">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-1" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-1" class="deck-partners-tip" role="tooltip">This deck is internal only and is not available in Red Hat Content Center. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Red%20Hat%20Ansible%20Automation%20Platform%20by%20the%20numbers%20%28FY26%29&amp;body=%23%23%20Deck%0ARed%20Hat%20Ansible%20Automation%20Platform%20by%20the%20numbers%20%28FY26%29%0A%0A%23%23%20Context%0AThis%20deck%20is%20currently%20marked%20%2A%2Ainternal%20only%2A%2A%20%28no%20Red%20Hat%20Content%20Center%20/%20Partners%20link%29.%0A%0A%23%23%20Ask%0APlease%20confirm%20whether%20partner%20distribution%20is%20possible%2C%20or%20document%20why%20it%20cannot%20be%20shared%20via%20RHCC.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request partner access or document why it cannot be shared.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Comparing Community Ansible and Red Hat Ansible Automation Platform</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1x79L1K3EnaIscRRUvHO8uZwns8dvJ1ctYu_1k73w2-Q/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=05b5b5a7-e405-42c7-8e39-e787f61c656a" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Metrics Utility &amp; Node Counting - Enablement Deck</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1ixeP9hzCxZ5elv41ULlG3--RRjSKChrCNtndnJESB68/edit?slide=id.g3ccf2ab1ef4_0_1918#slide=id.g3ccf2ab1ef4_0_1918" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-2" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-2" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Metrics%20Utility%20%26%20Node%20Counting%20-%20Enablement%20Deck&amp;body=%23%23%20Deck%0AMetrics%20Utility%20%26%20Node%20Counting%20-%20Enablement%20Deck%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Simple Ansible Time/Cost Saving Tool:
Use the Red Hat portal tooling to determine high level time and cost savings</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1LnGlQvdL27EOl6Ym_hIiqPaubzIZ1z7cCkvamm8gn5E/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://www.redhat.com/savetime" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Tech Target: Economic Benefits of AAP key takeaways</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/170AknZeOavixbRS2KbTjDkLRjqmLaVfpJFUB57VDLMs/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-3" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-3" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Tech%20Target%3A%20Economic%20Benefits%20of%20AAP%20key%20takeaways&amp;body=%23%23%20Deck%0ATech%20Target%3A%20Economic%20Benefits%20of%20AAP%20key%20takeaways%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
</ul>

# Release information

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">AAP 2.7 Overview (May 7, 2026)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1x01wBxJ5gKrya4QxDDWUGldkM0rNYrv0CcnZmtTO0sU/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-4" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-4" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20AAP%202.7%20Overview%20%28May%207%2C%202026%29&amp;body=%23%23%20Deck%0AAAP%202.7%20Overview%20%28May%207%2C%202026%29%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP 2.6 Overview (Oct 8, 2025)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1UeOGmYRoscmJGEDlePGZ5i8Yd2EcQz_nJk2-Kz2EVbo/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=80736aec-527d-4e43-acf7-7993c7b5ee07&amp;fusionQueryId=0Gmbv4IGzB&amp;query=customer%20deck)%20and%20(undefined" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP 2.5 Overview (Sep 30, 2024)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1mM0lfsQYy4d0TG4jHMpjElTDuPkdrqfJMhVBOKIyqqc/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=4ce94e30-a744-43b2-aad7-c802b0a30a9b" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP 2.4 Overview (Jun 27, 2023)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1Ea3O-gopJPADi2HNFJYucn8lNwGk13tBpwE5OJUCS4o/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=aca05fa8-c2ea-4c50-a881-5682d3f44298" target="_blank">Partners</a></div>
</li>
</ul>

# AI - Artificial Intelligence

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">AIOps Customer deck</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1bL0u8fLRbJP6YpArwpR1KyonII_rtJd2wtlYlDHDQeQ/edit?slide=id.g3a9447748b7_1_4#slide=id.g3a9447748b7_1_4" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=f9d63734-2b18-4316-8907-68b3c5e20728&amp;fusionQueryId=vNUOmSEnTI&amp;query=aiops" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Content Kit</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1tlV6CV1SZl01j3lKNRr2qD5dVNinIDnEVCegD7B_dsY/edit?slide=id.g3a047feee7c_0_6#slide=id.g3a047feee7c_0_6" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-5" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-5" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Content%20Kit&amp;body=%23%23%20Deck%0AContent%20Kit%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">AI + Ansible - 101/201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1wb4rAm6YUtExgu5DAoAsFEXmc4pbSLXLVwMb8Bhw7lQ/edit?slide=id.g1344cb18f70_1_583#slide=id.g1344cb18f70_1_583" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=4d781b0c-4d61-4a90-a85b-b0f22e546747" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AI + Ansible - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1HElTQjvI0HEP2U0Y4mY2-WwC175ywwa_lc3rWp8lT0U/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-6" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-6" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20AI%20%2B%20Ansible%20-%20301&amp;body=%23%23%20Deck%0AAI%20%2B%20Ansible%20-%20301%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Generative AI Features of Ansible Automation Platform</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1ks2S2SJ_zFOFj4JcEHTPdFSXOMQql-TSD9EWShB7Z5k/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-7" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-7" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Generative%20AI%20Features%20of%20Ansible%20Automation%20Platform&amp;body=%23%23%20Deck%0AGenerative%20AI%20Features%20of%20Ansible%20Automation%20Platform%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">ABU | Automation Coding Assistant w/ WCA (formerly Ansible Lightspeed)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1LZTrVoqYFk_0e51tPXZW-qkEhA5rwk_xl_Ik_6gWCOk/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-8" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-8" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20ABU%20%7C%20Automation%20Coding%20Assistant%20w/%20WCA%20%28formerly%20Ansible%20Lightspeed%29&amp;body=%23%23%20Deck%0AABU%20%7C%20Automation%20Coding%20Assistant%20w/%20WCA%20%28formerly%20Ansible%20Lightspeed%29%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
</ul>

# EDA - Event-Driven Ansible

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Event-Driven Ansible - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/18FsymQlk8cCBENHsh7NXyqvXtatfGOr8Nl761r1rU4w/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=142aca20-7767-404b-8563-5da4a8ae4e7f" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Event-Driven Ansible - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1xQyUGRGqu-qpjZVRKrJvN3cbVLoFzZ0BP7ED1VOyuX4/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=2ac510d6-1458-4689-a7dd-b488ee0788a1" target="_new">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Event-Driven Ansible - Splunk Integration</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1fxPvQuNm6Kty1H2oArnbo1uAfpybwyz7H6hnN_Yt_yQ/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=c6341dd2-4288-4f91-a797-af86d6710c4f&amp;fusionQueryId=3tFUfGcDml&amp;query=splunk" target="_new">Partners</a></div>
</li>
</ul>

# Edge Automation

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">AAP Edge Collateral</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1U_oFnYze4ZVCJuBNu0gOT1ttVu5Y3vdiBokB7FborYU/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-9" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-9" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20AAP%20Edge%20Collateral&amp;body=%23%23%20Deck%0AAAP%20Edge%20Collateral%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Edge Automation - 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/16GqzO19UR6AxsUS2x8mW3WRZbkDu6rEYEUT6cI7G19I/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=4412db2c-3484-47cb-9c01-d817d953e2d9" target="_new">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Edge Automation - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1Zk-25k14yq9uXvh-Z-VOieuR5Ew8tehyH8eFksoKyjs/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=97965f14-c34e-409a-8694-91a6c2e15333" target="_new">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Edge Automation - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1sXosxja65iS8r4LGItpXPWO1W085zGtPO7MU4mAbRVw/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=de60bea0-2fdc-4a76-9a57-1e1262a20219" target="_blank">Partners</a></div>
</li>
</ul>

# Hybrid Cloud Automation

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Hybrid Cloud Automation 101 - Introduction</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1JVXGf23MXoRH3jn7OMHoNp7whBs4q-Tm9CzlRnXracA/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=3a2738a8-f69b-42b3-bf55-e24b2df1d7ca" target="_blank">Partners</a></div>
</li>
</ul>


## Public Cloud

<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Public Cloud  - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1zZC6L-leuVAlwhwrnc8iUdqb0lKuqVh3F4I2oBINgAA/edit?usp=share_link" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=cd3b67b0-8949-44d6-acac-7dcd3221b77a" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Public Cloud  - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1Z_hG_XCMZiOmytyV4q4v2rncuf2KNH8OFdi1wwdkmiE/edit?usp=share_link" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=226ef383-7de5-4968-9364-5e5ee2b344bc" target="_blank">Partners</a></div>
</li>
</ul>

</div>

## Hashicorp + Ansible

<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Content Kit</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1EwTvqHDd2nLugntB-qQssWOS3I_11ReQ04zd3k5X_SU/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-10" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-10" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Content%20Kit&amp;body=%23%23%20Deck%0AContent%20Kit%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible + Terraform 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1YxE_o3zQCNC8MjMGTlqAztLhHTHid4M7rf8LLDoEZVQ/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=fc071158-d128-476c-ae60-aaa4a0a473a3&amp;fusionQueryId=mHh6ZJgLSF&amp;query=terraform" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible + Terraform 201 (includes Roadmap)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/11Lm7KBgFjvYarZByIUcUXApB6UgbtI_bgcGDBWSv8fo/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=3ba1f885-4330-4992-9442-a25239ce9977&amp;fusionQueryId=CACs6eq3nF&amp;query=vault%20201" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible + Vault 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1XD14iAm5-g7yfFKA_NJS-7zUif511CVvwrX7GITPaLw/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=1ccbf007-1c6a-4bbe-8def-34809af04766&amp;fusionQueryId=8LQrlQgNKc&amp;query=vault" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible + Vault 201 (includes Roadmap)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1hZ5FdE-zQuygXUE8h5-ob8EBuP1IalmUBmJyrbPc8NQ/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=0a55707e-05b4-4aa1-b658-80ae513d475c" target="_blank">Partners</a></div>
</li>
</ul>

</div>

## On Cloud

<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">AAP on AWS - Business deck</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1QfyRhXJarqwSQEBriZmx93oL3TMxqqRcEx-HF_L3iKc/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=8abd56ad-3960-4403-aa64-9893d3058279" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP on AWS - Tech deck</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/17JHGlFwtdcV1mVaPmAPs1fKoxqHhDwNwL35sxrRyVE0/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=5ddfc608-a7dc-4921-a4db-e61e64f91cd7" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP on Azure - Business deck</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1QD5QtQXKZZ2hwT71cRbZTl2LoBlN3p0mhsqoXq0RMmU/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=1bb2ce2e-7227-4481-9ad4-e7435fb4492f" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP on Azure - Tech deck</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1vPM7v4UraxDxl2xysT92VGNf7mL1VWzsMv_MS-2vvpw/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=3471cca0-cf31-4d66-9daf-8459d52799df" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP on Google Cloud - Business deck</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1skrObhqOvX8Z8hwMGgBsplZcIK0ujcbQrTQy_3f6V2M/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=3b5e58ed-1353-4870-b6c5-30c0c718498e" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP on Google Cloud - Tech deck</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1a7K2lt5_p_mjnmjpkxc7xJcErdTO5YC4LdGfgaeqDKk/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=bd99843a-4ecb-461e-9d25-a2b57ef03bec" target="_blank">Partners</a></div>
</li>
</ul>

</div>

## OpenShift Cloud Native

<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Cloud Native - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1aSkhjwk4r8N5RJU1Np8-eUl9LK-eN5a1M-6hSAb0Dd0/edit?usp=share_link" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=3b221f1b-fd10-4c94-9961-e0ab4123508d" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Cloud Native - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1WE5xIDHow0sqi5qFoX9LDGPwM2epERs9aBklVDTUGjQ/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=2eef02ae-24ef-4e99-a40c-6bf7787c0694" target="_blank">Partners</a></div>
</li>
</ul>
</div>

## OpenShift Virtualization

<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Content Kit</strong>
<div class="deck-access"><a href="https://docs.google.com/document/d/1XXsxYuckRt7IlFAKJ9vq3CpmKt3fRW_IeVODaTx78dQ/edit?usp=sharing" target="_new">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-11" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-11" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Content%20Kit&amp;body=%23%23%20Deck%0AContent%20Kit%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">OpenShift Virtualization - 101/201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1_U71g9w35JqareMhaq01xzjudrPv4dHP8IK2XPnD4VE/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=441462ea-66b8-446a-a7cf-6950ca5e6eb3&amp;fusionQueryId=M491NNl2Z2&amp;query=day%202%20virtual" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible OpenShift Virtualization - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1vyrW_88vn6P_AHqOCL5YdWhnf_TLqfJuUosHMHReXiI/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-12" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-12" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Ansible%20OpenShift%20Virtualization%20-%20301&amp;body=%23%23%20Deck%0AAnsible%20OpenShift%20Virtualization%20-%20301%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Day 2 virtual infrastructure automation 101 / 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1_U71g9w35JqareMhaq01xzjudrPv4dHP8IK2XPnD4VE/edit" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-13" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-13" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Day%202%20virtual%20infrastructure%20automation%20101%20/%20201&amp;body=%23%23%20Deck%0ADay%202%20virtual%20infrastructure%20automation%20101%20/%20201%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">OpenShift Virtualization Migration Factory Ansible Collection</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1k-ZICNZ1ceIP9zj_GM9q6Hf0qbX3ZJKHbcRCYP6Gy6M/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-14" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-14" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20OpenShift%20Virtualization%20Migration%20Factory%20Ansible%20Collection&amp;body=%23%23%20Deck%0AOpenShift%20Virtualization%20Migration%20Factory%20Ansible%20Collection%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
</ul>
</div>

## Private Cloud - VMware

<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Private Cloud - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1Ff6ueze2BHq6PtrdJ5pcw9K4Z7BQQlcEUVIaq1VjUQo/edit?usp=share_link" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=bf99e5a3-33e7-49e2-a38d-df8deda4d044" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Private Cloud - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1aMArG9rfWvH3J0Jt53rG8fJemwiShOTxMS48KTM_B6c/edit?usp=share_link" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=77b96e31-b4c7-464a-aa00-ec961e357539" target="_blank">Partners</a></div>
</li>
</ul>

</div>

# Network Automation

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Network Automation - 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1g9T0QwgAzhmBiZHZ3HLmL1fZLqFwNsD21xODjWt_KqQ" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=4b2712e3-0cd2-4dfa-a166-eebcce7e65ee" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Network Automation - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1GhYnnw9ESdIUIKinHFnHt-vmVJVdyf-Uld1X5sQJWTE/edit#slide=id.g29bcdc10752_0_6" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=ef06199f-0551-47d3-9fe3-b9d1a6d76260" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Network Automation - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1h21-kuaMuo6jRtfsDkldgCeQnXx1NNgx2MWBk_fvjgQ/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=433463ff-1c70-4861-bc49-6dee7cdeda52" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Cisco Enterprise Networking + AAP - Content Kit</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1NeQukF5hWiSaYZqscfRhG9tkh5QDMjbFNu6b2utQt8s/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-15" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-15" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Cisco%20Enterprise%20Networking%20%2B%20AAP%20-%20Content%20Kit&amp;body=%23%23%20Deck%0ACisco%20Enterprise%20Networking%20%2B%20AAP%20-%20Content%20Kit%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
</ul>

# Infrastructure Automation

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Infrastructure Automation - 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1e4pttjBe-m3k1_c2DgLxH5PvxfVqmtP5POrQWpZZI60/edit" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=1dbea8b2-3d96-4b99-a4ef-76b1775fe1ec" target="_new">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Infrastructure Automation - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1GaYUtsjCCpjBiCqLMkxBNuDh4LdJRmfhdeDQRZaGcZw/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=598c741c-cce4-4e69-8c25-c31a5c541992" target="_new">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Infrastructure Automation - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1WjyrSCGnsDugk5A-CTruJV_gD52GTukSXCndZh5TxvE/edit" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=f22ce5b6-c943-43f1-921c-bc680254aa33" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Windows Automation</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1oKwQBQbrvDArTttxXjDyA3s82qtgbKdT0ugh6e_Ga5Q/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=4b5e6402-67db-44d5-bde0-a58cecdcdb99" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP and IBM Z Mainframe Automation Overview</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1HgkeyRgKzVbO6q13FcZbCEevc4c6VRIJitUTwZWWxw8/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=79b621ef-17c1-4a6a-a8b5-4097bf84600e&amp;fusionQueryId=5wVDtqn0gf" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Red Hat Enterprise Linux Automation  101/102</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1Uat6WAuNB2wAMjSwvvi0cQzbb_D8V8HOnLc_rvEm0C4/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-16" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-16" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Red%20Hat%20Enterprise%20Linux%20Automation%20101/102&amp;body=%23%23%20Deck%0ARed%20Hat%20Enterprise%20Linux%20Automation%20101/102%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
</ul>

# Policy Enforcement

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Intro Policy Enforcement - 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1tvo3Gzm6Dq_VUQgNERMlb4xXxSvfHLbv7DfGD8GfWKc/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-17" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-17" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Intro%20Policy%20Enforcement%20-%20101&amp;body=%23%23%20Deck%0AIntro%20Policy%20Enforcement%20-%20101%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
</ul>

# Security Automation

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Security Automation - 101/201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1v-Qj6Wrz8suoSfR3L4O1DcgPgOsW8lppLN8t9iMczw8/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=97d129d2-7752-4a8f-9730-b39754e75888&amp;fusionQueryId=POMvjp8OJn&amp;query=security%20automation%20101" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Security Automation - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/19qZyXhZO6rfhzPElAMypIbfEnL9nPW83ce4i5MWJD2s/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-18" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-18" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Ansible%20Security%20Automation%20-%20301&amp;body=%23%23%20Deck%0AAnsible%20Security%20Automation%20-%20301%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Automation Platform - Mythos</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1-ZgLAyKVx3ccHyJB-eGaozMpNGq3AjFOfoAK9YZfl1Y/edit?slide=id.g3e8ae193bf2_4_199#slide=id.g3e8ae193bf2_4_199" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-19" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-19" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Ansible%20Automation%20Platform%20-%20Mythos&amp;body=%23%23%20Deck%0AAnsible%20Automation%20Platform%20-%20Mythos%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Security Content kit</strong>
<div class="deck-access"><a href="https://docs.google.com/document/d/1LoMUaQYuiU_0a2AVNqfk2s4c3WsNuz0nGqcQ53MSXHU/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-20" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-20" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Security%20Content%20kit&amp;body=%23%23%20Deck%0ASecurity%20Content%20kit%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
</ul>

# ServiceNow ITSM Automation

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Automation Platform for ServiceNow ITSM</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1tZerCHqspFzGd3-kYWUz3tsiaIvHr-Ufs-veW4TozMU/edit?usp=sharing" target="_blank">Employees</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="deck-partners-pending"><span class="deck-partners-label">Partners</span><span class="deck-partners-help"><button type="button" class="deck-partners-info-btn" aria-describedby="deck-partners-tip-21" aria-label="Partner availability details"><span class="deck-partners-info-icon" aria-hidden="true"></span></button><span id="deck-partners-tip-21" class="deck-partners-tip" role="tooltip">Not available in Red Hat Content Center yet. <a href="https://github.com/ansible/slides/issues/new?title=RHCC%3A%20Ansible%20Automation%20Platform%20for%20ServiceNow%20ITSM&amp;body=%23%23%20Deck%0AAnsible%20Automation%20Platform%20for%20ServiceNow%20ITSM%0A%0A%23%23%20Context%0AThere%20is%20currently%20no%20Red%20Hat%20Content%20Center%20%28Partners%29%20link%20for%20this%20deck%20on%20Slide%20Finder.%0A%0A%23%23%20Ask%0APlease%20add%20an%20RHCC%20/%20Partners%20link%20when%20available%2C%20or%20comment%20here%20if%20it%20cannot%20be%20published%20for%20partners%20%28and%20why%29.%0A" target="_blank" rel="noopener">Open a GitHub issue</a> to request it, or to note why a Partners link cannot be added.</span></span></span></div>
</li>
</ul>

# Reference Architectures

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Deploying Ansible Automation Platform 2.1</strong>
<div class="deck-access"><a href="https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.1/html-single/deploying_ansible_automation_platform_2.1/index" target="_blank">Employees</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Deploying Ansible Automation Platform 2 on Red Hat OpenShift</strong>
<div class="deck-access"><a href="https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.4/html-single/deploying_ansible_automation_platform_2_on_red_hat_openshift/index" target="_blank">Employees</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Automation Platform 1.2 to 2 Migration Guide</strong>
<div class="deck-access"><a href="https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.4/html-single/ansible_automation_platform_1.2_to_2_migration_guide/index" target="_blank">Employees</a></div>
</li>
</ul>

# Logos, Graphics, Icons and Brand Rules

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Product component icon library</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1LkMrfvfOrZ8JJD8tm1PhSTIru20MkNiH0H7J8Jz8VXY/edit?usp=sharing" target="_blank">Employees</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Red Hat Ansible Automation Platform: technology icons - Design Guidelines</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/17yXBuN5WOw8BL0-FTFGCcRG8HqIii3rR25-s9Qe_IBc/edit?usp=sharing" target="_blank">Employees</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Red Hat Icon Repository</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1SRhy8-bYBgaA3Jsi1t_Fxz-Yo9ORgdRy5Kec9hg_wSM/edit?usp=sharing" target="_blank">Employees</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Red Hat Ansible Automation Platform - Logos</strong>
<div class="deck-access"><a href="https://drive.google.com/drive/folders/1mpp-3yhFPttEmtwMSMR2kPM1nQ3-ZVEM?usp=drive_link" target="_blank">Employees</a></div>
</li>
</ul>
