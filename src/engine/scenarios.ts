import type { DemoScenario } from "./types";

export const scenarios: DemoScenario[] = [
  {
    role: "owner",

    hero: {
      greeting: "Buenos días, Carlos.",
      message:
        "Mientras tomabas tu café encontré una oportunidad estimada en S/ 18,500.",
      action: "Ver oportunidad"
    },

    opportunity: {
      title: "Cinco clientes esperan respuesta.",
      description:
        "Todos escribieron durante las últimas 48 horas.",
      probability: "82 %"
    },

    snapshot: [
      { label: "Conversaciones", value: "126" },
      { label: "Oportunidades", value: "38" },
      { label: "Pipeline", value: "S/ 214K" }
    ],

    coach: {
      title: "Recomendación",
      message:
        "Prioriza los clientes del sector construcción."
    }
  },

  {
    role: "agent",

    hero: {
      greeting: "Buenos días, María.",
      message:
        "Hoy tienes siete conversaciones con alta probabilidad de cierre.",
      action: "Ver prioridades"
    },

    opportunity: {
      title: "Tres clientes respondieron esta mañana.",
      description:
        "Conviene atenderlos antes del mediodía.",
      probability: "76 %"
    },

    snapshot: [
      { label: "Pendientes", value: "7" },
      { label: "Respondidas", value: "18" },
      { label: "Objetivo", value: "92 %" }
    ],

    coach: {
      title: "Sugerencia",
      message:
        "Empieza por quienes ya solicitaron una cotización."
    }
  }
];