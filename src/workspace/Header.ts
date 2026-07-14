import { renderPerspectiveSwitcher } from "./PerspectiveSwitcher";
import growthCenterLogo from "../assets/logos/growth-center.png";
import { getWorkspace } from "../engine/WorkspaceEngine";

export function renderHeader(): HTMLElement {
  const header = document.createElement("header");
  const workspace = getWorkspace();

  const headers: Record<
  import("../engine/WorkspaceEngine").Workspace,
  { title: string; subtitle: string }
> = {

    growth:{
    title:"Growth Center™",
    subtitle:"Centro de crecimiento de tu empresa."
    },

    inbox:{
    title:"Smart Inbox™",
    subtitle:"Las conversaciones más importantes primero."
    },

    contacts:{
    title:"Smart Contacts™",
    subtitle:"Las relaciones que impulsan tu crecimiento."
    },

    pipelines:{
    title:"Smart Pipeline™",
    subtitle:"Las oportunidades que generan ingresos."
    },

    calendar:{
    title:"Smart Calendar™",
    subtitle:"Organiza el tiempo que genera resultados."
    },

    broadcasts:{
    title:"Broadcast Center™",
    subtitle:"Comunícate con todos tus clientes."
    },

    automations:{
    title:"Automation Center™",
    subtitle:"Automatiza el crecimiento de tu empresa."
    },

    flows:{
    title:"Flow Studio™",
    subtitle:"Diseña procesos inteligentes."
    },

    settings:{
    title:"Configuración",
    subtitle:"Personaliza tu espacio de trabajo."
    }

  };

  const current = headers[workspace];

  header.className = "tg-header";

  header.innerHTML = `
  <div class="tg-header-left">

    <img
      src="${growthCenterLogo}"
      alt="Growth Center"
      class="tg-growth-logo"
    />

    <div class="tg-header-copy">

      <h1 class="tg-header-title">
        ${current.title}
      </h1>

      <p class="tg-header-subtitle">
        ${current.subtitle}
      </p>

    </div>

  </div>

  <div class="tg-header-right">

    <div id="tg-perspective-container"></div>

  </div>
`;

    const container = header.querySelector<HTMLElement>(
    "#tg-perspective-container"
    );

    if (container) {
    container.append(renderPerspectiveSwitcher());
    }

  return header;
}