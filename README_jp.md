**他の言語でもお読みいただけます**:
<br>![uk](https://raw.githubusercontent.com/ansible/slides/main/images/uk.png) [English](README.md),  ![japan](https://raw.githubusercontent.com/ansible/slides/main/images/japan.png)[日本語](README_jp.md).


<h1> Ansible Automation Platform デッキファインダー<div class="editlink">[<a target="_new" href="https://github.com/ansible/slides/edit/main/README_jp.md">編集</a>]</div></h1>
<p><a href="https://ansible.github.io/slides">本サイト</a></p>

<div class='parentsean'>
<div class='tableofcontents' markdown="1">
  
- [一般](#一般)
- [ROI (Return on Investment)](#roi-return-on-investment)
- [Release information](#release-information)
- [EDA - Event-Driven Ansible](#eda---Event-Driven-ansible)
- [エッジの自動化](#エッジの自動化)
- [ハイブリットクラウドの自動化](#ハイブリッドクラウドの自動化)
  - [パブリッククラウド](#パブリッククラウド)
  - [オンクラウド](#オンクラウド)
  - [クラウドネイティブ](#クラウドネイティブ)
  - [OpenShift Virtualization](#openshift-virtualization)
  - [プライベートクラウド - VMware](#プライベートクラウド---vmware)
- [Lightspeed AI](#lightspeed-ai)
- [Middleware](#middleware)
- [ネットワークの自動化](#ネットワークの自動化)
- [インフラの自動化](#インフラの自動化)
- [セキュリティの自動化](#セキュリティの自動化)
- [ServiceNow ITSM Automation](#servicenow-itsm-automation)
- [リファレンスアーキテクチャー](#リファレンスアーキテクチャー)
- [Logos, Graphics, Icons and Brand Rules](#logos-graphics-icons-and-brand-rules)

</div>
<div class='highlighttable'>
<table>
<thead>
<tr>
<th>New and recently updated!</th>
</tr>
</thead>
<tbody>
<tr>
<td>July 1st, 2024 - <a target="_new" href="/slides/customer_references#ansiblefest-2024">Ansiblefest 2024 customer recordings
</a></td>
</tr>
<tr>
<td>June 12th, 2024 : <a target="_new" href="https://docs.google.com/document/d/11Of3-qBQlG4-edrtJejIXmq98Zo9S6SVaIsD05UrWlw/">Ansible for OpenShift Virtualization
</a></td>
</tr>
</tbody>
</table>
  
</div>
</div>


# 一般

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
<th>RHCC リンク (社員及びパートナー用) </th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible Automation Platform ピッチデッキfor AE (2023 Version)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1lcy0P8f5WBwKJeLtXrscKcGSc262N14MFqtGdJNfot8">Google Source</a><br>
<ul><li><a target="_blank" href="https://videos.learning.redhat.com/media/1_0dz25zji">How to use this deck (Video)</a></li></ul></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Red Hat Ansible Automation Platform by the numbers</td>
<td><a target="_new" href="https://docs.google.com/presentation/d/1IyLTqzL9bTkAVuuJYXq3cHoqSnQOG9IVauhbHi-i-VU/">Google Source
</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Ansible Automation Platform テクニカルデッキ for SSP & SA</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1EHYX1ob8UkHYoJKvC6371BQVMNqAyPBYdRJYpU_PpYE/edit?usp=drive_link">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=616db7ea-d29e-4c1e-b93d-4f70e8b6249f">Content Center</a></td>
</tr>
<tr>
<td>テクニカルロードマップ</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1N5r3XYcL9Thc2t0oamW9Hq1HakMhjofO7MF9F9YNwxQ/">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Red Hat Ansible Automation Platform: プラットフォームセキュリティの価値提案 (Internal Only)<br>
Ansible Automation Platform: セキュリティの自動化 (External OK)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1KHgotpBYHjwf6XLkyNfbyx_DSit9vllBfyAZZW0cIBE/">Google Source</a><br>
<a target="_blank" href="https://docs.google.com/presentation/d/1oRvMn_ig2mTAcSPSPwZbHa7q3QbWm5k4U_YBrRBpP-I/">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>コミュニティ版の Ansible と Red Hat Ansible Automation Platform の比較 （RHCCは英語版）</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1JWnt3OphoFGfxW4k1M0SciVIgm1gTnNE1UpABBKrKG0/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=05b5b5a7-e405-42c7-8e39-e787f61c656a">Content Center</a></td>
</tr>
<tr>
<td>Ansible Validated Content</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1ERBB6kR8SSybR1AsopcCSkXgwIi8HzGJ-5lCFWZDwts">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Red Hat Insights と Red Hat Ansible Automation Platform</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1s7s0Pw8YuiUyjGCxxQkQ0lutF69d2sXujYDWTXWrxiE/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Automation 2.0: 
Unlock the Business Value of IT Automation (英語版)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1ePMYcPPCpmGZZw1spjIlH6VacAc_i3DsQS0ikYnKjGY/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
</tbody>
</table>

# ROI (Return on Investment)

<table>
<thead>
<tr>
<th>Slide Deck</th>
<th>Red Hat Internal Link</th>
<th>RHCC Link (employees and partners)</th>
</tr>
</thead>
<tbody>
<tr>
<td>ROI 計算ツール (IDC 製作) : 
AAP によるITオートメーションのビジネス価値とインパクトの特定と算出</td>
<td><a target="_blank" href="https://redhatansibleroi.com/">https://redhatansibleroi.com/</a>
and <a target="_blank" href="https://docs.google.com/presentation/d/1dIze8IHgspD2PT-yaTpzPuYxfk3ZoeZZUgqZ2DDUbKM/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>簡易 Ansible 時間/コストセービングツール: 
Red Hatポータルツールを使用したハイレベルな時間およびコストの削減</td>
<td><a target="_blank" href="https://www.redhat.com/savetime">https://www.redhat.com/savetime</a>
and <a target="_blank" href="https://docs.google.com/presentation/d/190gZ4Eej2M5x6y373G18FB99Tqn3hcyhOBHSAp8BwL4/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>洗練されたコストセービングスプレッドシート: 
スプレッドシートを使用したハイレベルな時間およびコスト削減</td>
<td><a target="_blank" href="https://docs.google.com/spreadsheets/d/1XI3zKIAI4uvLY0rbYDeacatSFj38mIwjng4ZN3Wwvyg/edit?usp=sharing">Spreadsheet Google Source</a>
and <a target="_blank" href="https://docs.google.com/presentation/d/190gZ4Eej2M5x6y373G18FB99Tqn3hcyhOBHSAp8BwL4">Deck Google Source</a></td>
<td>Coming soon!</td>
</tr>
</tbody>
</table>

# Release information

<table>
<thead>
<tr>
<th>Slide Deck</th>
<th>Red Hat Internal Link</th>
<th>RHCC Link (employees and partners)</th>
</tr>
</thead>
<tbody>
<tr>
<td>AAP 2.4 Overview (Jun 27, 2023)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1JKvNpY4OEM2-gSZtxhciaBdkteMK2KoNNs05MP764Rc/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=9640db7b-064c-4074-8b76-6b7df5bf8cfe">Content Center</a></td>
</tr>
<tr>
<td>AAP 2.3 Overview (Nov 29, 2022)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1Le5yMZbOptQl2NhiJ0r0PssltJV4JuMyDNxy4Gs7jX8">Google Source</a></td>
<td>Coming Soon!</td>
</tr>
<tr>
<td>AAP 2.2 Overview (May 22, 2022)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1MjRjRFMdWBbBh5nfPC4SkKAesdserf8HdwFedIYWJZA">Google Source</a></td>
<td>Coming Soon!</td>
</tr>
</tbody>
</table>

# EDA - Event-Driven Ansible

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
<th>RHCC リンク (社員及びパートナー用) </th>
</tr>
</thead>
<tbody>
<tr>
<td>Event-Driven Ansible - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1hr2ocZPAQC8KzFyo5_ugxe9tfdiBnjZlcCGs8krST5A/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=9d0fa55f-d100-4497-9572-0150eb2470d8">Content Center</a></td>
</tr>
<tr>
<td>Event-Driven Ansible - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/128f9ropoc2IgD4AFPelQRR3axv6T8Wn6FezxjYUEzeE/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=699ef55b-e0a9-4351-8e1d-b0614e5e93ec">Content Center</a></td>
</tr>
<tr>
<td>Event-Driven Ansible - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1fEP54hMx45zHmXmmUvW5CPCyXGbN0GsWaFJ2ntzVs3k/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=44938f0c-c48e-4353-9782-fe8e48d3a0ce">Content Center</a></td>
</tr>
</tbody>
</table>

# エッジの自動化

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
<th>RHCC リンク (社員及びパートナー用) </th>
</tr>
</thead>
<tbody>
<tr>
<td>AAP Edge Collateral</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1Rn1sw75wfoMm1bCT-Gn5XKUPjaSvwv2FW5-m81cuj4g/">Google Source</a></td>
<td>N/A</td>
</tr>
<tr>
<td>Ansible エッジ自動化 - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1hx648sSdFQ5OpSsbg6bA1lx25aZxQnUY21BsZofqYco/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=9ed45b8b-c813-4836-a303-f2c59f63a756">Content Center</a></td>
</tr>
<tr>
<td>Ansible エッジ自動化 - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/17wWU9J3SIWbK6lqIj-ntlRNj4PH08DN22iR3OWILsrk/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=fdc49113-f050-4fb3-bb41-8cb15a76526e">Content Center</a></td>
</tr>
<tr>
<td>Ansible エッジ自動化 - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1Buhzk4XGPBbaGFQTq6Ohl2iUzUCi_7BsLE6nAAKVg0k/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=b0373c76-8685-4a13-afed-8427d88fe589">Content Center</a></td>
</tr>
</tbody>
</table>

# ハイブリッドクラウドの自動化

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
<th>RHCC リンク (社員及びパートナー用) </th>
</tr>
</thead>
<tbody>
<tr>
<td>Hybrid Cloud Automation 101 - Introduction</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/18GNw9U2iEqS1YyiqgFSOvTxnWGuybQrbOmoWumJpt-U/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=f567f2e9-a82b-46e8-8b75-b95277a2e987">Content Center</a></td>
</tr>
</tbody>
</table>


## パブリッククラウド

<div id="cloud-use-cases">

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
<th>RHCC リンク (社員及びパートナー用) </th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible Public Cloud  - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1fwiRitEGIoiv5acYtg49lBhmMXl8ZZNaUlpvudjM_2I/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=e08128c8-c26c-43ea-81e0-5e29bf1f69af">Content Center</a></td>
</tr>
<tr>
<td>Ansible Public Cloud  - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1Vh3lMYJZFFsJkuupw0NPfbQOfS88O7nPoBUmDqly_d8/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=3e6eae1f-d1fb-4da1-9fc4-c35aab2bcfb6">Content Center</a></td>
</tr>
<tr>
<td>Ansible Terraform Collection とプロバーダーの概要</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1o8NuU3pJJZvXXFH8Tmc6HI6ZcwZs-IhC2B9pvCbdLAs/">Google Source</a></td>
<td>Coming soon!</td>
</tr>
</tbody>
</table>

</div>

## オンクラウド

<div id="cloud-use-cases">

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
<th>RHCC リンク (社員及びパートナー用) </th>
</tr>
</thead>
<tbody>
<tr>
<td>AAP on AWS - Tech deck</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td>AAP on Azure - Tech deck</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td>AAP on Google Cloud - Tech deck</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

</div>

## クラウドネイティブ

<div id="cloud-use-cases">

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
<th>RHCC リンク (社員及びパートナー用) </th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible クラウドネイティブ - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1mr6DwUMlvh13Lk9Ruh_-ILANIPFNXIjZ9kR7shdThhI/">Google Source</a></td>
  <td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=a48744c9-c3f0-46f7-a518-21ba5f4329f2">Content Center</a></td>
</tr>
<tr>
<td>Ansible クラウドネイティブ - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/17irXtCOCmZg9bvhNj1N-XAUlHcl9ea7I9O56sS0UHLU/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=b9012cfb-df25-4185-8c06-bd9c95d25f7d">Content Center</a></td>
</tr>
</tbody>
</table>
</div>

## OpenShift Virtualization

<div id="cloud-use-cases">

<table>
<thead>
<tr>
<th>Slide Deck</th>
<th>Red Hat Internal Link</th>
<th>RHCC Link (employees and partners)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Content Kit</td>
<td><a target="_new" href="https://docs.google.com/document/d/11Of3-qBQlG4-edrtJejIXmq98Zo9S6SVaIsD05UrWlw/">Ansible for OpenShift Virtualization</a>
</td>
<td>Coming Soon!</td>
</tr>
<tr>
<td>Ansible OpenShift Virtualization - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/14Lgwf7Df1CPRFPMgankaoCvvcWslMzdZhFoTPSe580A/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?fusionQueryId=vrxZX1c31D&id=f1e0f500-5814-4b62-a74f-d6689c62441b&query=ABU%20%7C%20AVA%20%7C%20101%20-%20Ansible%20OpenShift%20Virtualization%20Automation%20-%20Introduction_ja">Content Center</a></td>
</tr>
<tr>
<td>Ansible OpenShift Virtualization - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/19T6tSiNSha846_-6oGXpgNbewCy95p7DEjnaXCfNdss/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?fusionQueryId=Q2KFZaCWEn&id=08c67177-0266-4353-8738-a58d06f59a6e&query=ABU%20%7C%20AVA%20%7C%20301%20-%20Ansible%20OpenShift%20Virtualization%20Automation_ja">Content Center</a></td>
</tr>
<tr>
<td>OpenShift Virtualization Migration Factory Ansible Collection</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1lrqhXmnrdbdZmGG9xT17xQQMtp33LkGFu2gl4BTrtxI/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?fusionQueryId=jPilscC7zl&id=3ca8b1dd-5138-4398-bf7d-e3d097dd37b9&query=OpenShift%20Virtualization%20Ansible%20Migration%20Factory%20Collection_ja">Content Center</a></td>
</tr>
</tbody>
</table>
</div>

## プライベートクラウド - VMware

<div id="cloud-use-cases">

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
<th>RHCC リンク (社員及びパートナー用) </th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible プライベートクラウド - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1G0N2gcprR_SVKZJk6dBCs5nelBq-nAkOeAHuWVmix0w/">Google Source</a></td>
  <td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=ab4c475f-2434-4924-b927-b9f083d4108f">Content Center</a></td>
</tr>
<tr>
<td>Ansible プライベートクラウド - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1rNDTUJaQ0fozuLqIeDEr4BuF1yXpNvqSwXalrV4WO90/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=c2611445-31cc-45a1-b332-c394d7a45c34">Content Center</a></td>
</tr>
</tbody>
</table>

</div>

# Lightspeed AI

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
<th>RHCC リンク (社員及びパートナー用) </th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible Lightspeed with IBM Watson Code Assistant 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/15S-ls1E-HFeDPUXDWCojmYzzN2dcrSNxV2vW46NxdTk/">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Ansible Lightspeed Sales Enablement Overview</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/10pwzJmYaWUQVzfOWwrrTB5e08ymUoUWvLG1PPVaFgYo/">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Ansible Lightspeed with IBM Watson Code Assistant Technical Preview Overview (Jun 26, 2023)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1kp3neTC9DRShtGM43LQ9nE-wZZOcfY7hXV0UdNx8QSc/">Google Source</a></td>
<td>Coming soon!</td>
</tr>
</tbody>
</table>

# Middleware

<table>
<thead>
<tr>
<th>Slide Deck</th>
<th>Red Hat Internal Link</th>
<th>RHCC Link (employees and partners)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible for Middleware</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/166VOoOEIJrdA_PfmcDOp6o_181KleybPbWNYweakUPk/">Google Source</a></td>
<td>Coming soon!</td>
</tr>
</tbody>
</table>


# ネットワークの自動化

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
<th>RHCC リンク (社員及びパートナー用) </th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible ネットワーク自動化 - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/114_nyRhafsL5o7D8ADawHJKgvy7IpSFf3eVLRWNV5gU/">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Ansible ネットワーク自動化 - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1cHAuyt4p4r0vKmoi5w2svnI0GGyjRkTycjgwY_uFPJs/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=8dde1a1a-e829-49b0-a7dd-91c5d75e321e">Content Center</a></td>
</tr>
<tr>
<td>Ansible ネットワーク自動化 - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1KIwPMXy8fKFkoB0kyXj_yQpVkYDcNuwNKz66Ldf_8BA/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=0c0f2b12-abef-4e44-8b12-c0d1e1328046">Content Center</a></td>
</tr>
</tbody>
</table>

# インフラの自動化

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
<th>RHCC リンク (社員及びパートナー用) </th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible インフラ自動化 - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1yb-Z6nGDDHXWWLPEkk_67jXhdIx5ZF23hkMhtYa9p4Y/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=c1799f02-9704-468d-80bc-5060acd51162">Content Center</a></td>
</tr>
<tr>
<td>Ansible インフラ自動化 - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1yVG58w4Iq2Py3don2sc3gHXAv1bA-mn1GGsijukqAT0/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=3e72899a-59d7-4ef7-a461-026175c24f01">Content Center</a></td>
</tr>
<tr>
<td>Ansible インフラ自動化 - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1Za7_Gn1NSPdz4AGsZbXXA6JFsw6GFy-UIXJu9wqW_Og/">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=0c6560bf-50b6-4ce0-97b5-8bbe1dbb96e9">Content Center</a></td>
</tr>
</tbody>
</table>

# セキュリティの自動化

<table>
<thead>
<tr>
<th>スライドデッキ</th>
<th>Red Hat Internal (社員用)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible セキュリティ自動化 - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1eHZOCBOIj2XoY9zXfqtYjvWsl_WBmqldMpzk4boeJ0I/">Google Source</a></td>
</tr>
<tr>
<td>Ansible セキュリティ自動化 - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1OGJqp3e-_ET_1N_e-wNWu03drKQ17s47UQeGmfWHa80/">Google Source</a></td>
</tr>
<tr>
<td>Ansible セキュリティ自動化 - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1XxqBZAAno7IidQRacxSMXVrvhYegKNtwuK6YMXMQRtw/">Google Source</a></td>
</tr>
</tbody>
</table>

# ServiceNow ITSM Automation

<table>
<thead>
<tr>
<th>Slide Deck</th>
<th>Red Hat Internal Link (社員用)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible Automation Platform for ServiceNow ITSM</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1CrjQzOsPCfcq4RgzQBYQw1h-1Y2oqslsqJiSUe52Vxo/">Google Source</a></td>
</tr>
</tbody>
</table>

# リファレンスアーキテクチャー

<table>
<thead>
<tr>
<th>リファレンスアーキテクチャー</th>
<th>Red Hat Link</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible Automation Platform 2.1 の導入</td>
<td><a target="_blank"
href="https://access.redhat.com/documentation/ja-jp/red_hat_ansible_automation_platform/2.1/html-single/deploying_ansible_automation_platform_2.1/index">Link</a></td>
</tr>
<tr>
<td>Red Hat OpenShift への Ansible Automation Platform 2 のデプロイ</td>
<td><a target="_blank"
href="https://access.redhat.com/documentation/ja-jp/red_hat_ansible_automation_platform/2.4/html-single/deploying_ansible_automation_platform_2_on_red_hat_openshift/index">Link</a></td>
</tr>
<tr>
<td>Ansible Automation Platform 1.2 から 2 への移行ガイド</td>
<td><a target="_blank"
href="https://access.redhat.com/documentation/ja-jp/red_hat_ansible_automation_platform/2.4/html-single/ansible_automation_platform_1.2_to_2_migration_guide/index">Link</a></td>
</tr>
</tbody>
</table>

# Logos, Graphics, Icons and Brand Rules

<table>
<thead>
<tr>
<th>Slide Deck / Drive Link</th>
<th>Red Hat Internal Link (社員用)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Product component icon library </td>
<td><a target="_blank"
href="https://docs.google.com/presentation/d/1LkMrfvfOrZ8JJD8tm1PhSTIru20MkNiH0H7J8Jz8VXY/edit?usp=sharing">Link</a></td>
</tr>
<tr>
<td>Red Hat Ansible Automation Platform: technology icons - Design Guidelines</td>
<td><a target="_blank"
href="https://docs.google.com/presentation/d/17yXBuN5WOw8BL0-FTFGCcRG8HqIii3rR25-s9Qe_IBc/edit?usp=sharing">Link</a></td>
</tr>
<tr>
<td>Red Hat Icon Repository</td>
<td><a target="_blank"
href="https://docs.google.com/presentation/d/1SRhy8-bYBgaA3Jsi1t_Fxz-Yo9ORgdRy5Kec9hg_wSM/edit?usp=sharing">Link</a></td>
</tr>
<tr>
<td>Red Hat Ansible Automation Platform - Logos</td>
<td><a target="_blank"
href="https://drive.google.com/drive/folders/1mpp-3yhFPttEmtwMSMR2kPM1nQ3-ZVEM?usp=drive_link">Link</a></td>
</tr>
</tbody>
</table>
