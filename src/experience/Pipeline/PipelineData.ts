export interface PipelineMetric {
  value: string;
  label: string;
}

export const pipelineMetrics: PipelineMetric[] = [
  {
    value: "52",
    label: "Oportunidades",
  },
  {
    value: "S/ 1.28 M",
    label: "Valor Pipeline",
  },
  {
    value: "S/ 24,600",
    label: "Ticket Promedio",
  },
  {
    value: "S/ 935 mil",
    label: "Valor Ponderado",
  },
  {
    value: "18",
    label: "Ganadas este mes",
  },
  {
    value: "5",
    label: "Perdidas este mes",
  },
];

export interface PipelineCard {
  company: string;
  amount: string;
  owner: string;
  probability: number;
}

export interface PipelineStage {
  title: string;
  total: number;
  value: string;
  cards: PipelineCard[];
}

export const pipelineStages: PipelineStage[] = [
  {
    title: "Nuevo Lead",
    total: 8,
    value: "S/ 124,000",
    cards: [
      {
        company: "Grupo Altavista",
        amount: "S/ 18,500",
        owner: "Carlos Ruiz",
        probability: 35,
      },
      {
        company: "Tecno Perú",
        amount: "S/ 12,000",
        owner: "María Díaz",
        probability: 28,
      },
    ],
  },
  {
    title: "Calificado",
    total: 10,
    value: "S/ 215,000",
    cards: [
      {
        company: "Constructora Andina",
        amount: "S/ 28,000",
        owner: "Carlos Ruiz",
        probability: 55,
      },
    ],
  },
  {
    title: "Propuesta",
    total: 14,
    value: "S/ 386,000",
    cards: [
      {
        company: "Grupo Pacífico",
        amount: "S/ 48,000",
        owner: "Lucía Torres",
        probability: 72,
      },
    ],
  },
  {
    title: "Negociación",
    total: 15,
    value: "S/ 412,000",
    cards: [
      {
        company: "Caricias del Alma",
        amount: "S/ 36,000",
        owner: "Carlos Ruiz",
        probability: 92,
      },
    ],
  },
  {
    title: "Ganado",
    total: 5,
    value: "S/ 143,000",
    cards: [
      {
        company: "Inversiones Sol",
        amount: "S/ 24,000",
        owner: "Ana Pérez",
        probability: 100,
      },
    ],
  },
];