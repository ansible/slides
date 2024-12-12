**Read this in other languages**:
<br>![uk](https://raw.githubusercontent.com/ansible/slides/main/images/uk.png) [English](README.md),  ![japan](https://raw.githubusercontent.com/ansible/slides/main/images/japan.png)[日本語](README_jp.md).

<h1> Ansible Deck Finder<div class="editlink">[<a target="_new" href="https://github.com/ansible/slides/edit/main/README.md">edit</a>]</div></h1>
<p><a href="https://ansible.github.io/slides">View on website</a></p>

<div class='parentsean'>
<div class='tableofcontents' markdown="1">

- [General](#general)
- [ROI (Return on Investment)](#roi-return-on-investment)
- [Release information](#release-information)
- [EDA - Event-Driven Ansible](#eda---event-driven-ansible)
- [Edge Automation](#edge-automation)
- [Hybrid Cloud Automation](#hybrid-cloud-automation)
  - [Public Cloud](#public-cloud)
  - [On Cloud](#on-cloud)
  - [OpenShift Cloud Native](#openshift-cloud-native)
  - [OpenShift Virtualization](#openshift-virtualization)
  - [Private Cloud - VMware](#private-cloud---vmware)
- [Lightspeed AI](#lightspeed-ai)
- [Middleware](#middleware)
- [Network Automation](#network-automation)
- [Infrastructure Automation](#infrastructure-automation)
- [Security Automation](#security-automation)
- [ServiceNow ITSM Automation](#servicenow-itsm-automation)
- [Reference Architectures](#reference-architectures)
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
<td>Dec 2nd, 2024 - <a target="_new" href="https://docs.google.com/presentation/d/1lwGlHO21R42ov1SmNQTfuIEj7QiUAbwkKxiCsJtDIx8/edit?usp=sharing">ABU | 2024 Forrester Wave for Infrastructure Automation Slide
</a></td>
</tr>
<tr>
<td>Dec 2nd, 2024 - <a target="_new" href="https://www.redhat.com/en/technologies/management/ansible/top-tasks-to-automate">Jumpstart your use of Red Hat Ansible Automation Platform
</a></td>
</tr>
<tr>
<td>Oct 9th, 2024 - <a target="_new" href="https://docs.google.com/presentation/d/1zoKb4QurLM6yGpYN9k_6LF76gjrn99uhC1okH_BORXI/edit?usp=sharing">Updated Roadmap (post 2.5, 2025)
</a></td>
</tr>
<tr>
<td>Oct 9th, 2024 - <a target="_new" href="https://docs.google.com/presentation/d/1sa_O12EIRG-fdChArYJf9HZe6wKDfqjnIAiH3udL39s/edit?usp=sharing">Updated Technical Deck (post 2.5)
</a></td>
</tr>
</tbody>
</table>
<div class='highlighttable'>
<table>
<thead>
<tr>
<th>Important Documentation for the Field</th>
</tr>
</thead>
<tbody>
<tr>
<td>KB: <a target="_new" href="https://access.redhat.com/articles/7095801">AAP 2.5 Aligning Customer Infrastructure to Tested Topologies
</a></td>
</tr>
<tr>
<td>KB: <a target="_new" href="https://access.redhat.com/support/policy/updates/ansible-automation-platform">Red Hat Ansible Automation Platform Life Cycle
</a></td>
</tr>
<tr>
<td>Docs: <a target="_new" href="https://docs.redhat.com/en/documentation/red_hat_ansible_automation_platform/latest/html-single/tested_deployment_models/index">Tested deployment models
</a></td>
</tr>
<tr>
<td>Docs: <a target="_new" href="https://docs.redhat.com/en/documentation/red_hat_ansible_automation_platform/2.5/html-single/release_notes/index">2.5 Release Notes
</a></td>
</tr>
</tbody>
</table>

</div>
</div>

# General

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
<td>ABU | 2024 Forrester Wave for Infrastructure Automation Slide</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1lwGlHO21R42ov1SmNQTfuIEj7QiUAbwkKxiCsJtDIx8/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=0191e421-44b8-4266-b513-4f16854c87cf">Content Center</a></td>
</tr>
<tr>
<td>Ansible Automation Platform Pitch Deck for AEs (2023 version)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1QYQL6A0AalmVQ-woZhMkXovFTLcdjQzY4s4lYJkMDpQ/edit?usp=sharing">Google Source</a><br>
<ul><li><a target="_blank" href="https://videos.learning.redhat.com/media/1_0dz25zji">How to use this deck (Video)</a></li></ul></td>
<td><a target="_new" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=a8196555-1175-48b1-83df-171aa6697334">Content Center</a></td>
</tr>
<tr>
<td>Red Hat Ansible Automation Platform by the numbers</td>
<td><a target="_new" href="https://docs.google.com/presentation/d/1nb_5_kIVw3mNZM5-ZWqz90mypWNwj_pMUkSxnxcjQ84/edit?usp=sharing">Google Source
</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Ansible Automation Platform Technical Deck for SSPs and SAs</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1sa_O12EIRG-fdChArYJf9HZe6wKDfqjnIAiH3udL39s/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=f07af1ec-7fe9-42ef-9cae-bc6bb651ea1d">Content Center</a></td>
</tr>
<tr>
<td>Technical Roadmap (post AAP 2.5, 2025)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1zoKb4QurLM6yGpYN9k_6LF76gjrn99uhC1okH_BORXI/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Red Hat Ansible Automation Platform: Platform Security Value Proposition (Internal Only)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1eA8CFzR48MEfGipRoFJINlJPYz7ujH9Sip8f0v74hZo/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Ansible Automation Platform: The Secure Way to Automate (External OK)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1_JzCjB9H8duRgjuhyQ7os1iviXsG0w9NikcktGbVoPg/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Comparing Community Ansible and Red Hat Ansible Automation Platform</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1x79L1K3EnaIscRRUvHO8uZwns8dvJ1ctYu_1k73w2-Q/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=05b5b5a7-e405-42c7-8e39-e787f61c656a">Content Center</a></td>
</tr>
<tr>
<td>Ansible Validated Content</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1dnl7tKPyFTWct6pX86pAsna--SmMWjzNm6V4e-Qvd44/edit#slide=id.g2450694eb32_0_928
">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>IDC 2024: Unlock the Business Value of IT Automation</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1BR0wm_QM7IsXQwzjqdQAw4mppLM6WxwbQf36nHmQyJo/edit?usp=sharing">Google Source</a></td>
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
<td>IDC Built ROI Calculator:
Identify and calculate the Business Value and Impact of IT Automation with AAP</td>
<td><a target="_blank" href="https://redhatansibleroi.com/">https://redhatansibleroi.com/</a>
and <a target="_blank" href="https://docs.google.com/presentation/d/1-Z2ZT6gg5pPlo9kpmNLf5tnkPOqHfpxRn-zCgtyE7oY/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Simple Ansible Time/Cost Saving Tool:
Use the Red Hat portal tooling to determine high level time and cost savings</td>
<td><a target="_blank" href="https://www.redhat.com/savetime">https://www.redhat.com/savetime</a>
and <a target="_blank" href="https://docs.google.com/presentation/d/1LnGlQvdL27EOl6Ym_hIiqPaubzIZ1z7cCkvamm8gn5E/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Sophisticated Savings Spreadsheet:
Use a spreadsheet to determine high level time and cost savings</td>
<td><a target="_blank" href="https://docs.google.com/spreadsheets/d/1XI3zKIAI4uvLY0rbYDeacatSFj38mIwjng4ZN3Wwvyg/edit?usp=sharing">Spreadsheet Google Source</a>
and <a target="_blank" href="https://docs.google.com/presentation/d/1LnGlQvdL27EOl6Ym_hIiqPaubzIZ1z7cCkvamm8gn5E/edit?usp=sharing">Deck Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Tech Target: Economic Benefits of AAP key takeaways</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/170AknZeOavixbRS2KbTjDkLRjqmLaVfpJFUB57VDLMs/edit?usp=sharing">Deck Google Source</a></td>
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
<td>AAP 2.5 Overview (Sep 30, 2024)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1mM0lfsQYy4d0TG4jHMpjElTDuPkdrqfJMhVBOKIyqqc/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=4ce94e30-a744-43b2-aad7-c802b0a30a9b">Content Center</a></td>
</tr>
<tr>
<td>AAP 2.4 Overview (Jun 27, 2023)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1Ea3O-gopJPADi2HNFJYucn8lNwGk13tBpwE5OJUCS4o/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=aca05fa8-c2ea-4c50-a881-5682d3f44298">Content Center</a></td>
</tr>
<tr>
<td>AAP 2.3 Overview (Nov 29, 2022)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1_YBMjRGvqNx5PE_Wtq9dO-_YC2xQX5cleW-0Cy-HKrk/edit?usp=sharing">Google Source</a></td>
<td>Coming Soon!</td>
</tr>
<tr>
<td>AAP 2.2 Overview (May 22, 2022)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/16zfS_r6-fIaBUxkmAMAinhcO7gRKC6DXesIhFCKWDxU/edit?usp=sharing">Google Source</a></td>
<td>Coming Soon!</td>
</tr>
</tbody>
</table>

# EDA - Event-Driven Ansible

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
<td>Event-Driven Ansible - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1Uf1Y42p8WfQnBQH-5ZjMXzQezdYj2UW6WcDfrbGu1fQ/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=068ce666-c386-4ba7-8dee-a7e76ba5607c">Content Center</a></td>
</tr>
<tr>
<td>Event-Driven Ansible - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/18FsymQlk8cCBENHsh7NXyqvXtatfGOr8Nl761r1rU4w/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=142aca20-7767-404b-8563-5da4a8ae4e7f">Content Center</a></td>
</tr>
<tr>
<td>Event-Driven Ansible - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1xQyUGRGqu-qpjZVRKrJvN3cbVLoFzZ0BP7ED1VOyuX4/edit?usp=sharing">Google Source</a></td>
<td><a target="_new" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=2ac510d6-1458-4689-a7dd-b488ee0788a1">Content Center</a></td>
</tr>
</tbody>
</table>

# Edge Automation

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
<td>AAP Edge Collateral</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1U_oFnYze4ZVCJuBNu0gOT1ttVu5Y3vdiBokB7FborYU/edit?usp=sharing">Google Source</a></td>
<td>N/A</td>
</tr>
<tr>
<td>Ansible Edge Automation - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/16GqzO19UR6AxsUS2x8mW3WRZbkDu6rEYEUT6cI7G19I/edit?usp=sharing">Google Source</a></td>
<td><a target="_new" href="https://content.redhat.com/us/en/assets/display.html?id=4412db2c-3484-47cb-9c01-d817d953e2d9">Content Center</a></td>
</tr>
<tr>
<td>Ansible Edge Automation - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1Zk-25k14yq9uXvh-Z-VOieuR5Ew8tehyH8eFksoKyjs/edit?usp=sharing">Google Source</a></td>
<td><a target="_new" href="https://content.redhat.com/us/en/assets/display.html?id=97965f14-c34e-409a-8694-91a6c2e15333">Content Center</a></td>
</tr>
<tr>
<td>Ansible Edge Automation - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1sXosxja65iS8r4LGItpXPWO1W085zGtPO7MU4mAbRVw/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=de60bea0-2fdc-4a76-9a57-1e1262a20219">Content Center</a></td>
</tr>
</tbody>
</table>

# Hybrid Cloud Automation

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
<td>Hybrid Cloud Automation 101 - Introduction</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1JVXGf23MXoRH3jn7OMHoNp7whBs4q-Tm9CzlRnXracA/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=3a2738a8-f69b-42b3-bf55-e24b2df1d7ca">Content Center</a></td>
</tr>
</tbody>
</table>


## Public Cloud

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
<td>Ansible Public Cloud  - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1zZC6L-leuVAlwhwrnc8iUdqb0lKuqVh3F4I2oBINgAA/edit?usp=share_link">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=cd3b67b0-8949-44d6-acac-7dcd3221b77a">Content Center</a></td>
</tr>
<tr>
<td>Ansible Public Cloud  - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1Z_hG_XCMZiOmytyV4q4v2rncuf2KNH8OFdi1wwdkmiE/edit?usp=share_link">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=226ef383-7de5-4968-9364-5e5ee2b344bc">Content Center</a></td>
</tr>
<tr>
<td>Ansible Terraform Collection and Provider Overview</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/11Lm7KBgFjvYarZByIUcUXApB6UgbtI_bgcGDBWSv8fo/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
</tbody>
</table>

</div>

## On Cloud

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
<td>AAP on AWS - Business deck</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1QfyRhXJarqwSQEBriZmx93oL3TMxqqRcEx-HF_L3iKc/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=5af6da0d-0f47-4a3a-b521-016341d95c65">Content Center</a></td>
</tr>
<tr>
<td>AAP on AWS - Tech deck</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/17JHGlFwtdcV1mVaPmAPs1fKoxqHhDwNwL35sxrRyVE0/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=5ddfc608-a7dc-4921-a4db-e61e64f91cd7">Content Center</a></td>
</tr>
<tr>
<td>AAP on Azure - Business deck</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1QD5QtQXKZZ2hwT71cRbZTl2LoBlN3p0mhsqoXq0RMmU/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=1bb2ce2e-7227-4481-9ad4-e7435fb4492f">Content Center</a></td>
</tr>
<tr>
<td>AAP on Azure - Tech deck</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1vPM7v4UraxDxl2xysT92VGNf7mL1VWzsMv_MS-2vvpw/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=3471cca0-cf31-4d66-9daf-8459d52799df">Content Center</a></td>
</tr>
<tr>
<td>AAP on Google Cloud - Business deck</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1skrObhqOvX8Z8hwMGgBsplZcIK0ujcbQrTQy_3f6V2M/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=3b5e58ed-1353-4870-b6c5-30c0c718498e">Content Center</a></td>
</tr>
<tr>
<td>AAP on Google Cloud - Tech deck</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1a7K2lt5_p_mjnmjpkxc7xJcErdTO5YC4LdGfgaeqDKk/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=bd99843a-4ecb-461e-9d25-a2b57ef03bec">Content Center</a></td>
</tr>
</tbody>
</table>

</div>

## OpenShift Cloud Native

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
<td>Ansible Cloud Native - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1aSkhjwk4r8N5RJU1Np8-eUl9LK-eN5a1M-6hSAb0Dd0/edit?usp=share_link">Google Source</a></td>
  <td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=3b221f1b-fd10-4c94-9961-e0ab4123508d">Content Center</a></td>
</tr>
<tr>
<td>Ansible Cloud Native - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1WE5xIDHow0sqi5qFoX9LDGPwM2epERs9aBklVDTUGjQ/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=2eef02ae-24ef-4e99-a40c-6bf7787c0694">Content Center</a></td>
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
<td><a target="_new" href="https://docs.google.com/document/d/1XXsxYuckRt7IlFAKJ9vq3CpmKt3fRW_IeVODaTx78dQ/edit?usp=sharing">Ansible for OpenShift Virtualization</a>
</td>
<td>Coming Soon!</td>
</tr>
<tr>
<td>Ansible OpenShift Virtualization - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1ctLr8CD6q6-b6nZBFgK6FhYsPeGco-ypcJN6b_Zqe10/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?fusionQueryId=aWxSgyz6iQ&id=5a5b263a-5513-4817-907f-6344820a8bf2&">Content Center</a></td>
</tr>
<tr>
<td>Ansible OpenShift Virtualization - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1vyrW_88vn6P_AHqOCL5YdWhnf_TLqfJuUosHMHReXiI/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="">Coming Soon!</a></td>
</tr>
<tr>
<td>OpenShift Virtualization Migration Factory Ansible Collection</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1_As1mANKzdU9m5fOQkQVNbxGNOZNLZW6v8L979W0JrI/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="">Coming Soon!</a></td>
</tr>
</tbody>
</table>
</div>

## Private Cloud - VMware

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
<td>Ansible Private Cloud - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1Ff6ueze2BHq6PtrdJ5pcw9K4Z7BQQlcEUVIaq1VjUQo/edit?usp=share_link">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=bf99e5a3-33e7-49e2-a38d-df8deda4d044">Content Center</a></td>
</tr>
<tr>
<td>Ansible Private Cloud - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1aMArG9rfWvH3J0Jt53rG8fJemwiShOTxMS48KTM_B6c/edit?usp=share_link">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=77b96e31-b4c7-464a-aa00-ec961e357539">Content Center</a></td>
</tr>
</tbody>
</table>

</div>

# Lightspeed AI

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
<td>Ansible Lightspeed with IBM Watson Code Assistant 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1ks2S2SJ_zFOFj4JcEHTPdFSXOMQql-TSD9EWShB7Z5k/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Ansible Lightspeed Sales Enablement Overview</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1LZTrVoqYFk_0e51tPXZW-qkEhA5rwk_xl_Ik_6gWCOk/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
<tr>
<td>Ansible Lightspeed with IBM Watson Code Assistant Technical Preview Overview (Jun 26, 2023)</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1WZmjs2ta7cMSo3mOD8pwathduVL0sbiQbIGokEbMY6E/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=74a76dfc-7a95-43be-bb33-42e4b2a11e04">Content Center</a></td>
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
<td><a target="_blank" href="https://docs.google.com/presentation/d/12S1G0YHw_VS9kExZjQmlMIyl13vh8ZKjKrFRN4RnpOs/edit?usp=sharing">Google Source</a></td>
<td>Coming soon!</td>
</tr>
</tbody>
</table>

# Network Automation

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
<td>Ansible Network Automation - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1g9T0QwgAzhmBiZHZ3HLmL1fZLqFwNsD21xODjWt_KqQ">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=4b2712e3-0cd2-4dfa-a166-eebcce7e65ee">Content Center</a></td>
</tr>
<tr>
<td>Ansible Network Automation - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1GhYnnw9ESdIUIKinHFnHt-vmVJVdyf-Uld1X5sQJWTE/edit#slide=id.g29bcdc10752_0_6">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=ef06199f-0551-47d3-9fe3-b9d1a6d76260">Content Center</a></td>
</tr>
<tr>
<td>Ansible Network Automation - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1h21-kuaMuo6jRtfsDkldgCeQnXx1NNgx2MWBk_fvjgQ/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=433463ff-1c70-4861-bc49-6dee7cdeda52">Content Center</a></td>
</tr>
</tbody>
</table>

# Infrastructure Automation

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
<td>Ansible Infrastructure Automation - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1e4pttjBe-m3k1_c2DgLxH5PvxfVqmtP5POrQWpZZI60/edit">Google Source</a></td>
<td><a target="_new" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=359b2146-2857-4dfc-90b4-2751a97e939c">Content Center</a></td>
</tr>
<tr>
<td>Ansible Infrastructure Automation - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1GaYUtsjCCpjBiCqLMkxBNuDh4LdJRmfhdeDQRZaGcZw/edit?usp=sharing">Google Source</a></td>
<td><a target="_new" href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=1d9c3f4d-d1ed-40ee-8b4c-75d9367071c9">Content Center</a></td>
</tr>
<tr>
<td>Ansible Infrastructure Automation - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1WjyrSCGnsDugk5A-CTruJV_gD52GTukSXCndZh5TxvE/edit">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=58d11f4e-18e1-4244-97c5-394f4aab9dc1">Content Center</a></td>
</tr>
<tr>
<td>Ansible Windows Automation</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1oKwQBQbrvDArTttxXjDyA3s82qtgbKdT0ugh6e_Ga5Q/edit?usp=sharing">Google Source</a></td>
<td><a target="_blank" href="https://content.redhat.com/us/en/assets/display.html?id=4b5e6402-67db-44d5-bde0-a58cecdcdb99">Content Center</a></td>
</tr>
</tbody>
</table>

# Security Automation

<table>
<thead>
<tr>
<th>Slide Deck</th>
<th>Red Hat Internal Link</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible Security Automation - 101</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1IC10jlKluqaVtEgYJLE2ldIDiIjQ2loLzTOvBQE-sv0/edit#slide=id.g867136564f_0_0">Google Source</a></td>
</tr>
<tr>
<td>Ansible Security Automation - 201</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1-XOF3F6Je0W3mLf1KJt5a7UFEyU3kogQzqNtNdRNmKc/edit?usp=sharing">Google Source</a></td>
</tr>
<tr>
<td>Ansible Security Automation - 301</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/19qZyXhZO6rfhzPElAMypIbfEnL9nPW83ce4i5MWJD2s/edit?usp=sharing">Google Source</a></td>
</tr>
</tbody>
</table>

# ServiceNow ITSM Automation

<table>
<thead>
<tr>
<th>Slide Deck</th>
<th>Red Hat Internal Link</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ansible Automation Platform for ServiceNow ITSM</td>
<td><a target="_blank" href="https://docs.google.com/presentation/d/1-7c8WJGucwlmkiKuy_k15Cn2EpJyoy7tIun-PQkoL-8/edit?usp=sharing">Google Source</a></td>
</tr>
</tbody>
</table>

# Reference Architectures

<table>
<thead>
<tr>
<th>Reference Architecture</th>
<th>Red Hat Link</th>
</tr>
</thead>
<tbody>
<tr>
<td>Deploying Ansible Automation Platform 2.1</td>
<td><a target="_blank"
href="https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.1/html-single/deploying_ansible_automation_platform_2.1/index">Link</a></td>
</tr>
<tr>
<td>Deploying Ansible Automation Platform 2 on Red Hat OpenShift</td>
<td><a target="_blank"
href="https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.4/html-single/deploying_ansible_automation_platform_2_on_red_hat_openshift/index">Link</a></td>
</tr>
<tr>
<td>Ansible Automation Platform 1.2 to 2 Migration Guide</td>
<td><a target="_blank"
href="https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.4/html-single/ansible_automation_platform_1.2_to_2_migration_guide/index">Link</a></td>
</tr>
</tbody>
</table>

# Logos, Graphics, Icons and Brand Rules

<table>
<thead>
<tr>
<th>Slide Deck / Drive Link</th>
<th>Red Hat Internal Link</th>
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
