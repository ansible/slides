<div class="page-intro">
  <h1>Buscador de presentaciones de Ansible</h1>
  <span class="page-lang">
    <a class="lang-btn" href="./" hreflang="en">
      <img src="https://raw.githubusercontent.com/ansible/slides/main/images/uk.png" alt="" width="16" height="12">
      <span>EN</span>
    </a>
    <a class="lang-btn" href="README_jp.html" hreflang="ja">
      <img src="https://raw.githubusercontent.com/ansible/slides/main/images/japan.png" alt="" width="16" height="12">
      <span>日本語</span>
    </a>
    <a class="lang-btn is-active" href="README_es.html" hreflang="es" aria-current="page">
      <img src="assets/images/spain.png" alt="" width="16" height="12">
      <span>ES</span>
    </a>
  </span>
  <span class="editlink">[<a target="_new" href="https://github.com/IPvSean/slides/edit/main/README_es.md">editar</a>]</span>
</div>

<div class="deck-filter-bar">
  <div class="deck-filter-field">
    <label class="deck-filter-label" for="deck-filter">Buscar presentaciones</label>
    <span class="deck-filter-icon" aria-hidden="true"></span>
    <input type="search" id="deck-filter" class="deck-filter-input" placeholder="Busca por título, tema o texto del enlace…" autocomplete="off">
  </div>
  <span id="deck-filter-status" class="deck-filter-status" aria-live="polite"></span>
</div>

<div class='parentsean'>
<nav class="tableofcontents" aria-label="En esta página" markdown="1">

**En esta página**

- [Plataforma](#platform)
- [Analistas - Investigación de mercado](#analysts---market-research)
- [ROI (retorno de la inversión)](#roi-return-on-investment)
- [Información de versiones](#release-information)
- [IA - Inteligencia artificial](#ai---artificial-intelligence)
- [EDA - Event-Driven Ansible](#eda---event-driven-ansible)
- [Automatización edge](#edge-automation)
- [Automatización de nube híbrida](#hybrid-cloud-automation)
  - [Nube pública](#public-cloud)
  - [HashiCorp + Ansible](#hashicorp--ansible)
  - [On Cloud](#on-cloud)
  - [OpenShift Cloud Native](#openshift-cloud-native)
  - [OpenShift Virtualization](#openshift-virtualization)
  - [Nube privada - VMware](#private-cloud---vmware)
- [Automatización de red](#network-automation)
- [Automatización de infraestructura](#infrastructure-automation)
- [Cumplimiento de políticas](#policy-enforcement)
- [Automatización de seguridad](#security-automation)
- [Automatización ServiceNow ITSM](#servicenow-itsm-automation)
- [Arquitecturas de referencia](#reference-architectures)
- [Logos, gráficos, iconos y reglas de marca](#logos-graphics-icons-and-brand-rules)

</nav>

<div class='highlighttable'>
<table class="bulletin-new">
<thead>
<tr>
<th>Nuevo</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://saleshub.redhat.com/Link/Content/DCq4DGPW7WFTBGhD7JhPm3BhpTPV">AAP + victoria de cliente</a>
<span class="bulletin-meta">7 ago 2026 · Gran empresa global de servicios financieros y seguros</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://saleshub.redhat.com/Link/Content/DC39D99BDQp4C8qVQHpCqD6gjJ7j">Domina tu pitch de AAP 2.7</a>
<span class="bulletin-meta">7 ago 2026</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://training-lms.redhat.com/sso/saml/auth/rhopen?RelayState=deeplinkoffering%3D92483258">Partner Tech Power Hour sobre AAP 2.7</a>
<span class="bulletin-meta">7 ago 2026</span>
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
<a class="bulletin-title" target="_new" href="https://videos.learning.redhat.com/media/Power%205%20-%20Episode%2068%20%22Master%20your%20AAP%202_7%20Pitch%22/1_5soe6g6j/366567272">Ep 68 — Domina tu pitch de AAP 2.7</a>
<span class="bulletin-meta">17 jun 2026 · Tricia McConnell</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://videos.learning.redhat.com/media/1_4pszx8k5">Ep 66 — AAP + victoria MetLife</a>
<span class="bulletin-meta">7 may 2026 · Harper Buete and Tucker Fisher</span>
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
<a class="bulletin-title" target="_new" href="https://access.redhat.com/articles/7095801">Topologías probadas de AAP 2.5</a>
<span class="bulletin-kind bulletin-kind--kb">KB</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://access.redhat.com/support/policy/updates/ansible-automation-platform">Ciclo de vida de AAP</a>
<span class="bulletin-kind bulletin-kind--kb">KB</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://docs.redhat.com/en/documentation/red_hat_ansible_automation_platform/latest/html-single/tested_deployment_models/index">Modelos de implementación probados</a>
<span class="bulletin-kind bulletin-kind--docs">Docs</span>
</td>
</tr>
<tr>
<td>
<a class="bulletin-title" target="_new" href="https://docs.redhat.com/en/documentation/red_hat_ansible_automation_platform/2.7/whats_new-overview_of_redhat_ansible_intro">Notas de la versión 2.7</a>
<span class="bulletin-kind bulletin-kind--docs">Docs</span>
</td>
</tr>
</tbody>
</table>
</div>

</div>

<p class="catalog-lede">Explorar por tema</p>

<h1 id="platform">Plataforma</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Presentación comercial de Ansible Automation Platform para AEs (versión 2024)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1QYQL6A0AalmVQ-woZhMkXovFTLcdjQzY4s4lYJkMDpQ/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=a8196555-1175-48b1-83df-171aa6697334" target="_new">Partners</a></div>
<ul><li><a href="https://videos.learning.redhat.com/media/1_0dz25zji" target="_blank">Cómo usar esta presentación (video)</a></li></ul>
</li>
<li class="deck-item">
<strong class="deck-title">Presentación técnica de Ansible Automation Platform para SSP y SA</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1sa_O12EIRG-fdChArYJf9HZe6wKDfqjnIAiH3udL39s/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=f07af1ec-7fe9-42ef-9cae-bc6bb651ea1d" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Automation Platform Strategy &amp; Roadmap</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1UUIG4j4C6Gb2el80BnCIw4MlChv7Nj7FX9K_MHUJPmI/edit?slide=id.g3ebe50672aa_0_0#slide=id.g3ebe50672aa_0_0" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=167d5ee4-2634-4e30-b53e-6c326443c82b" target="_blank">Partners</a></div>
</li>
</ul>

<h1 id="analysts---market-research">Analistas - Investigación de mercado</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">ABU | Forrester Wave 2024 de automatización de infraestructura</strong>
<div class="info-bubble"><span aria-hidden="true" class="info-bubble-icon"></span><span class="info-bubble-text">Pronto llegará el Forrester Wave 2026; asiste a office hours para más información</span></div>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1lwGlHO21R42ov1SmNQTfuIEj7QiUAbwkKxiCsJtDIx8/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=0191e421-44b8-4266-b513-4f16854c87cf" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">IDC 2024: Desbloquea el valor de negocio de la automatización de TI</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1BR0wm_QM7IsXQwzjqdQAw4mppLM6WxwbQf36nHmQyJo/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=2c001f57-d8ae-49d9-8924-b5b7519e7d56" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Aspectos destacados de reseñas G2 de Red Hat Ansible</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1n8oYeaIlThs71BLeEYIRfHQfefVY_H-zgYaQTrGsVyY/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=61aad783-0421-440b-b959-b73efc586502" target="_blank">Partners</a></div>
</li>
</ul>

<h1 id="roi-return-on-investment">ROI (retorno de la inversión)</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Red Hat Ansible Automation Platform en cifras (FY26)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1R4PXvhNOOEX9QUURHluPVdGP0anNbZHXBUBuiG96jOo/edit?slide=id.gbcf8801439_1_0#slide=id.gbcf8801439_1_0" target="_new">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Solo interno</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Comparación entre Ansible Community y Red Hat Ansible Automation Platform</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1x79L1K3EnaIscRRUvHO8uZwns8dvJ1ctYu_1k73w2-Q/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=05b5b5a7-e405-42c7-8e39-e787f61c656a" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Metrics Utility y conteo de nodos — presentación de enablement</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1ixeP9hzCxZ5elv41ULlG3--RRjSKChrCNtndnJESB68/edit?slide=id.g3ccf2ab1ef4_0_1918#slide=id.g3ccf2ab1ef4_0_1918" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">—</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Herramienta simple de ahorro de tiempo/costo de Ansible:
Usa las herramientas del portal de Red Hat para estimar ahorros de tiempo y costo</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1LnGlQvdL27EOl6Ym_hIiqPaubzIZ1z7cCkvamm8gn5E/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://www.redhat.com/savetime" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Tech Target: conclusiones clave sobre los beneficios económicos de AAP</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/170AknZeOavixbRS2KbTjDkLRjqmLaVfpJFUB57VDLMs/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
</ul>

<h1 id="release-information">Información de versiones</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Descripción general de AAP 2.7 (7 may 2026)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1x01wBxJ5gKrya4QxDDWUGldkM0rNYrv0CcnZmtTO0sU/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Descripción general de AAP 2.6 (8 oct 2025)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1UeOGmYRoscmJGEDlePGZ5i8Yd2EcQz_nJk2-Kz2EVbo/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=80736aec-527d-4e43-acf7-7993c7b5ee07&amp;fusionQueryId=0Gmbv4IGzB&amp;query=customer%20deck)%20and%20(undefined" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Descripción general de AAP 2.5 (30 sep 2024)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1mM0lfsQYy4d0TG4jHMpjElTDuPkdrqfJMhVBOKIyqqc/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=4ce94e30-a744-43b2-aad7-c802b0a30a9b" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Descripción general de AAP 2.4 (27 jun 2023)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1Ea3O-gopJPADi2HNFJYucn8lNwGk13tBpwE5OJUCS4o/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=aca05fa8-c2ea-4c50-a881-5682d3f44298" target="_blank">Partners</a></div>
</li>
</ul>

<h1 id="ai---artificial-intelligence">IA - Inteligencia artificial</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Presentación de cliente AIOps</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1bL0u8fLRbJP6YpArwpR1KyonII_rtJd2wtlYlDHDQeQ/edit?slide=id.g3a9447748b7_1_4#slide=id.g3a9447748b7_1_4" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=f9d63734-2b18-4316-8907-68b3c5e20728&amp;fusionQueryId=vNUOmSEnTI&amp;query=aiops" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Kit de contenido</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1tlV6CV1SZl01j3lKNRr2qD5dVNinIDnEVCegD7B_dsY/edit?slide=id.g3a047feee7c_0_6#slide=id.g3a047feee7c_0_6" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">—</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">IA + Ansible - 101/201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1wb4rAm6YUtExgu5DAoAsFEXmc4pbSLXLVwMb8Bhw7lQ/edit?slide=id.g1344cb18f70_1_583#slide=id.g1344cb18f70_1_583" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=4d781b0c-4d61-4a90-a85b-b0f22e546747" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">IA + Ansible - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1HElTQjvI0HEP2U0Y4mY2-WwC175ywwa_lc3rWp8lT0U/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Funciones de IA generativa de Ansible Automation Platform</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1ks2S2SJ_zFOFj4JcEHTPdFSXOMQql-TSD9EWShB7Z5k/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">ABU | Automation Coding Assistant con WCA (antes Ansible Lightspeed)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1LZTrVoqYFk_0e51tPXZW-qkEhA5rwk_xl_Ik_6gWCOk/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
</ul>

<h1 id="eda---event-driven-ansible">EDA - Event-Driven Ansible</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Event-Driven Ansible - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/18FsymQlk8cCBENHsh7NXyqvXtatfGOr8Nl761r1rU4w/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=142aca20-7767-404b-8563-5da4a8ae4e7f" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Event-Driven Ansible - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1xQyUGRGqu-qpjZVRKrJvN3cbVLoFzZ0BP7ED1VOyuX4/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=2ac510d6-1458-4689-a7dd-b488ee0788a1" target="_new">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Event-Driven Ansible — integración con Splunk</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1fxPvQuNm6Kty1H2oArnbo1uAfpybwyz7H6hnN_Yt_yQ/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=c6341dd2-4288-4f91-a797-af86d6710c4f&amp;fusionQueryId=3tFUfGcDml&amp;query=splunk" target="_new">Partners</a></div>
</li>
</ul>

<h1 id="edge-automation">Automatización edge</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Materiales AAP Edge</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1U_oFnYze4ZVCJuBNu0gOT1ttVu5Y3vdiBokB7FborYU/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">—</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Automatización Ansible Edge - 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/16GqzO19UR6AxsUS2x8mW3WRZbkDu6rEYEUT6cI7G19I/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=4412db2c-3484-47cb-9c01-d817d953e2d9" target="_new">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Automatización Ansible Edge - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1Zk-25k14yq9uXvh-Z-VOieuR5Ew8tehyH8eFksoKyjs/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=97965f14-c34e-409a-8694-91a6c2e15333" target="_new">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Automatización Ansible Edge - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1sXosxja65iS8r4LGItpXPWO1W085zGtPO7MU4mAbRVw/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=de60bea0-2fdc-4a76-9a57-1e1262a20219" target="_blank">Partners</a></div>
</li>
</ul>

<h1 id="hybrid-cloud-automation">Automatización de nube híbrida</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Automatización de nube híbrida 101 — introducción</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1JVXGf23MXoRH3jn7OMHoNp7whBs4q-Tm9CzlRnXracA/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=3a2738a8-f69b-42b3-bf55-e24b2df1d7ca" target="_blank">Partners</a></div>
</li>
</ul>


<h2 id="public-cloud">Nube pública</h2>
<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Public Cloud - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1zZC6L-leuVAlwhwrnc8iUdqb0lKuqVh3F4I2oBINgAA/edit?usp=share_link" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=cd3b67b0-8949-44d6-acac-7dcd3221b77a" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Public Cloud - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1Z_hG_XCMZiOmytyV4q4v2rncuf2KNH8OFdi1wwdkmiE/edit?usp=share_link" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=226ef383-7de5-4968-9364-5e5ee2b344bc" target="_blank">Partners</a></div>
</li>
</ul>

</div>

<h2 id="hashicorp--ansible">HashiCorp + Ansible</h2>
<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Kit de contenido</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1EwTvqHDd2nLugntB-qQssWOS3I_11ReQ04zd3k5X_SU/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">—</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible + Terraform 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1YxE_o3zQCNC8MjMGTlqAztLhHTHid4M7rf8LLDoEZVQ/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=fc071158-d128-476c-ae60-aaa4a0a473a3&amp;fusionQueryId=mHh6ZJgLSF&amp;query=terraform" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible + Terraform 201 (incluye hoja de ruta)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/11Lm7KBgFjvYarZByIUcUXApB6UgbtI_bgcGDBWSv8fo/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=3ba1f885-4330-4992-9442-a25239ce9977&amp;fusionQueryId=CACs6eq3nF&amp;query=vault%20201" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible + Vault 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1XD14iAm5-g7yfFKA_NJS-7zUif511CVvwrX7GITPaLw/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=1ccbf007-1c6a-4bbe-8def-34809af04766&amp;fusionQueryId=8LQrlQgNKc&amp;query=vault" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible + Vault 201 (incluye hoja de ruta)</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1hZ5FdE-zQuygXUE8h5-ob8EBuP1IalmUBmJyrbPc8NQ/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=0a55707e-05b4-4aa1-b658-80ae513d475c" target="_blank">Partners</a></div>
</li>
</ul>

</div>

<h2 id="on-cloud">On Cloud</h2>
<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">AAP en AWS — presentación comercial</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1QfyRhXJarqwSQEBriZmx93oL3TMxqqRcEx-HF_L3iKc/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=8abd56ad-3960-4403-aa64-9893d3058279" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP en AWS — presentación técnica</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/17JHGlFwtdcV1mVaPmAPs1fKoxqHhDwNwL35sxrRyVE0/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=5ddfc608-a7dc-4921-a4db-e61e64f91cd7" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP en Azure — presentación comercial</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1QD5QtQXKZZ2hwT71cRbZTl2LoBlN3p0mhsqoXq0RMmU/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=1bb2ce2e-7227-4481-9ad4-e7435fb4492f" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP en Azure — presentación técnica</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1vPM7v4UraxDxl2xysT92VGNf7mL1VWzsMv_MS-2vvpw/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=3471cca0-cf31-4d66-9daf-8459d52799df" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP en Google Cloud — presentación comercial</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1skrObhqOvX8Z8hwMGgBsplZcIK0ujcbQrTQy_3f6V2M/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=3b5e58ed-1353-4870-b6c5-30c0c718498e" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">AAP en Google Cloud — presentación técnica</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1a7K2lt5_p_mjnmjpkxc7xJcErdTO5YC4LdGfgaeqDKk/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=bd99843a-4ecb-461e-9d25-a2b57ef03bec" target="_blank">Partners</a></div>
</li>
</ul>

</div>

<h2 id="openshift-cloud-native">OpenShift Cloud Native</h2>
<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Cloud Native - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1aSkhjwk4r8N5RJU1Np8-eUl9LK-eN5a1M-6hSAb0Dd0/edit?usp=share_link" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=3b221f1b-fd10-4c94-9961-e0ab4123508d" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Cloud Native - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1WE5xIDHow0sqi5qFoX9LDGPwM2epERs9aBklVDTUGjQ/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=2eef02ae-24ef-4e99-a40c-6bf7787c0694" target="_blank">Partners</a></div>
</li>
</ul>
</div>

<h2 id="openshift-virtualization">OpenShift Virtualization</h2>
<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Kit de contenido</strong>
<div class="deck-access"><a href="https://docs.google.com/document/d/1XXsxYuckRt7IlFAKJ9vq3CpmKt3fRW_IeVODaTx78dQ/edit?usp=sharing" target="_new">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">—</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">OpenShift Virtualization - 101/201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1_U71g9w35JqareMhaq01xzjudrPv4dHP8IK2XPnD4VE/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=441462ea-66b8-446a-a7cf-6950ca5e6eb3&amp;fusionQueryId=M491NNl2Z2&amp;query=day%202%20virtual" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible OpenShift Virtualization - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1vyrW_88vn6P_AHqOCL5YdWhnf_TLqfJuUosHMHReXiI/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Automatización de infraestructura virtual day 2 — 101 / 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1_U71g9w35JqareMhaq01xzjudrPv4dHP8IK2XPnD4VE/edit" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Colección Ansible Migration Factory para OpenShift Virtualization</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1k-ZICNZ1ceIP9zj_GM9q6Hf0qbX3ZJKHbcRCYP6Gy6M/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
</ul>
</div>

<h2 id="private-cloud---vmware">Nube privada - VMware</h2>
<div id="cloud-use-cases">

<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Private Cloud - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1Ff6ueze2BHq6PtrdJ5pcw9K4Z7BQQlcEUVIaq1VjUQo/edit?usp=share_link" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=bf99e5a3-33e7-49e2-a38d-df8deda4d044" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Private Cloud - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1aMArG9rfWvH3J0Jt53rG8fJemwiShOTxMS48KTM_B6c/edit?usp=share_link" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=77b96e31-b4c7-464a-aa00-ec961e357539" target="_blank">Partners</a></div>
</li>
</ul>

</div>

<h1 id="network-automation">Automatización de red</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Automatización de red con Ansible - 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1g9T0QwgAzhmBiZHZ3HLmL1fZLqFwNsD21xODjWt_KqQ" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/content/rhcc/us/en/assets/display.html?id=4b2712e3-0cd2-4dfa-a166-eebcce7e65ee" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Automatización de red con Ansible - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1GhYnnw9ESdIUIKinHFnHt-vmVJVdyf-Uld1X5sQJWTE/edit#slide=id.g29bcdc10752_0_6" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=ef06199f-0551-47d3-9fe3-b9d1a6d76260" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Automatización de red con Ansible - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1h21-kuaMuo6jRtfsDkldgCeQnXx1NNgx2MWBk_fvjgQ/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=433463ff-1c70-4861-bc49-6dee7cdeda52" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Cisco Enterprise Networking + AAP — kit de contenido</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1NeQukF5hWiSaYZqscfRhG9tkh5QDMjbFNu6b2utQt8s/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">—</span></div>
</li>
</ul>

<h1 id="infrastructure-automation">Automatización de infraestructura</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Automatización de infraestructura con Ansible - 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1e4pttjBe-m3k1_c2DgLxH5PvxfVqmtP5POrQWpZZI60/edit" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=1dbea8b2-3d96-4b99-a4ef-76b1775fe1ec" target="_new">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Automatización de infraestructura con Ansible - 201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1GaYUtsjCCpjBiCqLMkxBNuDh4LdJRmfhdeDQRZaGcZw/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=598c741c-cce4-4e69-8c25-c31a5c541992" target="_new">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Automatización de infraestructura con Ansible - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1WjyrSCGnsDugk5A-CTruJV_gD52GTukSXCndZh5TxvE/edit" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=f22ce5b6-c943-43f1-921c-bc680254aa33" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Automatización Windows con Ansible</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1oKwQBQbrvDArTttxXjDyA3s82qtgbKdT0ugh6e_Ga5Q/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=4b5e6402-67db-44d5-bde0-a58cecdcdb99" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Descripción general de automatización AAP e IBM Z Mainframe</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1HgkeyRgKzVbO6q13FcZbCEevc4c6VRIJitUTwZWWxw8/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=79b621ef-17c1-4a6a-a8b5-4097bf84600e&amp;fusionQueryId=5wVDtqn0gf" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Automatización de Red Hat Enterprise Linux 101/102</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1Uat6WAuNB2wAMjSwvvi0cQzbb_D8V8HOnLc_rvEm0C4/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
</ul>

<h1 id="policy-enforcement">Cumplimiento de políticas</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Introducción al cumplimiento de políticas - 101</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1tvo3Gzm6Dq_VUQgNERMlb4xXxSvfHLbv7DfGD8GfWKc/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
</ul>

<h1 id="security-automation">Automatización de seguridad</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Automatización de seguridad con Ansible - 101/201</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1v-Qj6Wrz8suoSfR3L4O1DcgPgOsW8lppLN8t9iMczw8/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><a href="https://content.redhat.com/us/en/assets/display.html?id=97d129d2-7752-4a8f-9730-b39754e75888&amp;fusionQueryId=POMvjp8OJn&amp;query=security%20automation%20101" target="_blank">Partners</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Automatización de seguridad con Ansible - 301</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/19qZyXhZO6rfhzPElAMypIbfEnL9nPW83ce4i5MWJD2s/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Ansible Automation Platform — Mythos</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1-ZgLAyKVx3ccHyJB-eGaozMpNGq3AjFOfoAK9YZfl1Y/edit?slide=id.g3e8ae193bf2_4_199#slide=id.g3e8ae193bf2_4_199" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
<li class="deck-item">
<strong class="deck-title">Kit de contenido de seguridad</strong>
<div class="deck-access"><a href="https://docs.google.com/document/d/1LoMUaQYuiU_0a2AVNqfk2s4c3WsNuz0nGqcQ53MSXHU/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
</ul>

<h1 id="servicenow-itsm-automation">Automatización ServiceNow ITSM</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Ansible Automation Platform para ServiceNow ITSM</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1tZerCHqspFzGd3-kYWUz3tsiaIvHr-Ufs-veW4TozMU/edit?usp=sharing" target="_blank">Empleados</a><span aria-hidden="true" class="deck-access-sep"> | </span><span class="cell-status">Próximamente</span></div>
</li>
</ul>

<h1 id="reference-architectures">Arquitecturas de referencia</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Implementación de Ansible Automation Platform 2.1</strong>
<div class="deck-access"><a href="https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.1/html-single/deploying_ansible_automation_platform_2.1/index" target="_blank">Empleados</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Implementación de Ansible Automation Platform 2 en Red Hat OpenShift</strong>
<div class="deck-access"><a href="https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.4/html-single/deploying_ansible_automation_platform_2_on_red_hat_openshift/index" target="_blank">Empleados</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Guía de migración de Ansible Automation Platform 1.2 a 2</strong>
<div class="deck-access"><a href="https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/2.4/html-single/ansible_automation_platform_1.2_to_2_migration_guide/index" target="_blank">Empleados</a></div>
</li>
</ul>

<h1 id="logos-graphics-icons-and-brand-rules">Logos, gráficos, iconos y reglas de marca</h1>
<ul class="deck-list">
<li class="deck-item">
<strong class="deck-title">Biblioteca de iconos de componentes del producto</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1LkMrfvfOrZ8JJD8tm1PhSTIru20MkNiH0H7J8Jz8VXY/edit?usp=sharing" target="_blank">Empleados</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Red Hat Ansible Automation Platform: iconos tecnológicos — directrices de diseño</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/17yXBuN5WOw8BL0-FTFGCcRG8HqIii3rR25-s9Qe_IBc/edit?usp=sharing" target="_blank">Empleados</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Repositorio de iconos de Red Hat</strong>
<div class="deck-access"><a href="https://docs.google.com/presentation/d/1SRhy8-bYBgaA3Jsi1t_Fxz-Yo9ORgdRy5Kec9hg_wSM/edit?usp=sharing" target="_blank">Empleados</a></div>
</li>
<li class="deck-item">
<strong class="deck-title">Red Hat Ansible Automation Platform — logos</strong>
<div class="deck-access"><a href="https://drive.google.com/drive/folders/1mpp-3yhFPttEmtwMSMR2kPM1nQ3-ZVEM?usp=drive_link" target="_blank">Empleados</a></div>
</li>
</ul>
