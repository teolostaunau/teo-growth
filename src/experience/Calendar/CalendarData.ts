export interface PriorityActivity {
  title: string;
  time: string;
  impact: string;
}

export const priorityAgenda: PriorityActivity[] = [
  {
    title: "Seguimiento • Constructora Andina",
    time: "09:00",
    impact: "Alta prioridad",
  },
  {
    title: "Presentación • Grupo Pacífico",
    time: "11:30",
    impact: "Oportunidad de venta",
  },
  {
    title: "Negociación • Caricias del Alma",
    time: "16:00",
    impact: "Cierre esperado",
  },
];

export interface ImpactBlock {
  time: string;
  title: string;
  source: string;
}

export interface WeekDay {
  day: string;
  focus: string;
  events: ImpactBlock[];
}

export const weekSchedule: WeekDay[] = [
  {
    day: "Lun",
    focus: "🔥 Seguimientos",
    events: [
      {
        time: "09:00",
        title: "Constructora Andina",
        source: "Pipeline",
      },
      {
        time: "15:00",
        title: "Cliente Premium",
        source: "Inbox",
      },
    ],
  },

  {
    day: "Mar",
    focus: "💼 Comercial",
    events: [
      {
        time: "11:30",
        title: "Grupo Pacífico",
        source: "Pipeline",
      },
    ],
  },

  {
    day: "Mié",
    focus: "🎯 Presentaciones",
    events: [
      {
        time: "10:00",
        title: "Demo Corporativa",
        source: "Contacts",
      },
    ],
  },

  {
    day: "Jue",
    focus: "🤝 Negociaciones",
    events: [
      {
        time: "16:00",
        title: "Caricias del Alma",
        source: "Pipeline",
      },
    ],
  },

  {
    day: "Vie",
    focus: "📊 Revisión",
    events: [
      {
        time: "09:30",
        title: "Indicadores",
        source: "Growth",
      },
    ],
  },

  {
    day: "Sáb",
    focus: "⭐ Clientes",
    events: [
      {
        time: "11:00",
        title: "Mentoría",
        source: "Calendar",
      },
    ],
  },

  {
    day: "Dom",
    focus: "💙 Planificación",
    events: [
      {
        time: "18:00",
        title: "Semana siguiente",
        source: "Planning",
      },
    ],
  },
];