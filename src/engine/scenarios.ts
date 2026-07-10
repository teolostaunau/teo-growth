import type { DemoScenario } from "./types";

export const scenarios: DemoScenario[] = [

{
id:"owner",
label:"Dueño",

hero:{
greeting:"Buenos días, Carlos.",
message:"Mientras tomabas tu café encontré una oportunidad estimada en S/ 18,500.",
action:"Ver oportunidad"
},

opportunity:{
title:"Cinco clientes esperan respuesta.",
description:"Todos escribieron durante las últimas 48 horas.",
probability:"82 %"
},

snapshot:[
{label:"Conversaciones",value:"126"},
{label:"Oportunidades",value:"38"},
{label:"Pipeline",value:"S/214K"}
],

coach:{
title:"Recomendación",
message:"Prioriza los clientes del sector construcción."
}

},

{
id:"agent",
label:"Agente",

hero:{
greeting:"Buenos días, María.",
message:"Hoy tienes siete conversaciones prioritarias.",
action:"Ver prioridades"
},

opportunity:{
title:"Tres clientes respondieron esta mañana.",
description:"Conviene responder antes del mediodía.",
probability:"76 %"
},

snapshot:[
{label:"Pendientes",value:"7"},
{label:"Respondidas",value:"18"},
{label:"Objetivo",value:"92%"}
],

coach:{
title:"Consejo",
message:"Empieza por quienes solicitaron una cotización."
}

},

{
id:"viewer",
label:"Observador",

hero:{
greeting:"Buenos días.",
message:"El equipo mantiene un excelente ritmo de atención.",
action:"Ver desempeño"
},

opportunity:{
title:"Seguimiento semanal.",
description:"El rendimiento supera el promedio.",
probability:"93 %"
},

snapshot:[
{label:"Equipo",value:"8"},
{label:"Respuesta",value:"93%"},
{label:"SLA",value:"1h"}
],

coach:{
title:"Observación",
message:"No se requieren acciones inmediatas."
}

},

{
id:"coach",
label:"Coach",

hero:{
greeting:"Hola Carlos.",
message:"Quiero mostrarte por qué elegí esta oportunidad.",
action:"Explícamelo"
},

opportunity:{
title:"Patrón detectado.",
description:"Las oportunidades provienen del mismo segmento.",
probability:"89 %"
},

snapshot:[
{label:"Patrones",value:"4"},
{label:"Insights",value:"12"},
{label:"Impacto",value:"Alto"}
],

coach:{
title:"Coaching",
message:"Si actúas hoy, aumentarás la probabilidad de cierre."
}

}

];