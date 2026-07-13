import type { DemoScenario } from "./types";

export const scenarios: DemoScenario[] = [

{
  id: "owner",
  label: "Dueño",

  hero: {
    greeting: "Carlos",
    status: "🟢 Tu negocio está creciendo",
    message:
      "Antes de que comenzaras tu jornada, encontré tres decisiones que pueden marcar la diferencia en los resultados de hoy.",
    action: "Comenzar mi día"
  },

  opportunity: {
    title: "Constructora Andina puede cerrarse hoy",
    description:
      "Valor estimado: S/ 18,500. Realiza el seguimiento antes del mediodía para maximizar la probabilidad de cierre.",
    probability: "82 %",
    action: "Continuar seguimiento"
  },

snapshot: {
  title: "📊 ¿Por qué esta decisión es importante?",
  metrics: [
  {
    label: "Conversaciones activas",
    value: "126",
    insight: "+18 desde ayer"
  },
  {
    label: "Oportunidades abiertas",
    value: "38",
    insight: "5 requieren atención hoy"
  },
  {
    label: "Pipeline estimado",
    value: "S/214K",
    insight: "82 % con alta probabilidad"
  }
],
},

coach: {
  title: "Hoy comenzaría por Constructora Andina.",
  summary:
    "Tiene una probabilidad de cierre del 82 % y lleva dos días esperando respuesta.",
  reasons: [
    "Cliente con alto potencial.",
    "Ya mostró interés dos veces.",
    "Una llamada antes del mediodía puede marcar la diferencia."
  ],  
}
},

{
  id: "executive",
  label: "Ejecutivo",

  hero: {
    greeting: "María",
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
    action: "Continuar seguimiento"
  },

snapshot: {
    title:"📊 Tu actividad de hoy",
    metrics: [
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
},

coach: {
  title: "Cinco seguimientos requieren tu atención.",
  summary:
    "Completar estas conversaciones hoy aumentará significativamente tus posibilidades de cierre.",
  reasons: [
    "Dos clientes son Premium.",
    "Tres conversaciones llevan más de 24 horas.",
    "Hoy puedes superar tu meta semanal."
  ]
},
},

{
  id: "viewer",
  label: "Observador",

  hero: {
    greeting: "Javier",
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

snapshot:{

    title:"📊 Estado general del negocio", metrics: [
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
},

coach: {
  title: "El equipo mantiene un buen ritmo.",
  summary:
     "La prioridad ahora es reducir los tiempos de respuesta para sostener el crecimiento.",
  reasons: [
    "El SLA se mantiene sobre el 90 %.",
    "Las conversaciones activas siguen creciendo.",
    "Conviene revisar los casos pendientes del día."
  ]  
}
},

];