import type { DemoScenario } from "./types";

export const scenarios: DemoScenario[] = [

{
  id: "owner",
  label: "Dueño",

  hero: {
    greeting: "Buenos días, Carlos.",
    status: "🟢 Tu negocio está creciendo",
    message:
      "Antes de que comenzaras tu jornada, encontré tres decisiones que pueden marcar la diferencia en los resultados de hoy.",
    action: "Comenzar mi día"
  },

  opportunity: {
    title: "Constructora Andina está lista para avanzar.",
    description:
      "Una oportunidad estimada en S/ 18,500 podría cerrarse hoy si el seguimiento se realiza antes del mediodía.",
    probability: "82 %",
    action: "Abrir conversación"
  },

snapshot: [
  {
    label: "Clientes esperando",
    value: "5",
    insight: "Dos pertenecen al segmento Premium."
  },
  {
    label: "Clientes Premium",
    value: "2",
    insight: "Requieren seguimiento prioritario durante la mañana."
  },
  {
    label: "Pipeline activo",
    value: "S/214K",
    insight: "Representa las oportunidades actualmente en negociación."
  }
],

coach: {
  title: "Lo que haría hoy",
  message:
    "Si este fuera mi negocio, dedicaría la primera hora del día a contactar a Constructora Andina. Combina un alto valor potencial, una probabilidad de cierre del 82 % y una ventana de oportunidad que termina antes del mediodía."
}
},

{
  id: "executive",
  label: "Ejecutivo",

  hero: {
    greeting: "Buenos días, María.",
    status: "🟢 El negocio está creciendo",
    message:
      "Hoy tienes tres conversaciones que pueden convertirse en ventas si actúas durante la mañana.",
    action: "Ver prioridades"
  },

  opportunity: {
    title: "Constructora Andina espera tu seguimiento.",
    description:
      "El cliente mostró interés en la propuesta y está a la espera de una llamada para definir los siguientes pasos.",
    probability: "82 %",
    action: "Abrir conversación"
  },

snapshot: [
  {
    label: "Seguimientos hoy",
    value: "5",
    insight: "Cinco conversaciones requieren una acción antes del mediodía."
  },
  {
    label: "Clientes VIP",
    value: "2",
    insight: "Son las conversaciones con mayor impacto comercial."
  },
  {
    label: "Tiempo de respuesta",
    value: "94 %",
    insight: "El equipo mantiene un excelente nivel de atención."
  }
],

coach: {
  title: "Lo que haría hoy",
  message:
    "Comenzaría por las conversaciones con mayor intención de compra. Una llamada a tiempo puede marcar la diferencia entre una oportunidad abierta y una venta cerrada."
}
},

{
  id: "viewer",
  label: "Observador",

  hero: {
    greeting: "Buenos días.",
    status: "🟢 El negocio está creciendo",
    message:
      "La operación comercial mantiene un buen ritmo y existen oportunidades importantes en seguimiento.",
    action: "Ver panorama"
  },

  opportunity: {
    title: "Constructora Andina continúa en seguimiento.",
    description:
      "La oportunidad permanece activa y el equipo comercial tiene programado el siguiente contacto para hoy.",
    probability: "82 %",
    action: "Abrir conversación"
  },

snapshot: [
  {
    label: "Conversaciones activas",
    value: "126",
    insight: "La actividad comercial se mantiene estable durante la semana."
  },
  {
    label: "Pipeline activo",
    value: "S/214K",
    insight: "Existe una cartera saludable de oportunidades en proceso."
  },
  {
    label: "Cumplimiento SLA",
    value: "94 %",
    insight: "Los tiempos de atención se encuentran dentro del objetivo."
  }
],

coach: {
  title: "Mi lectura del negocio",
  message:
    "La operación comercial mantiene un comportamiento saludable. El seguimiento de las oportunidades prioritarias permitirá sostener el ritmo de crecimiento durante los próximos días."
}
},

];