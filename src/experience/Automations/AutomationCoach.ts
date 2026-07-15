export function renderAutomationCoach(): HTMLElement {

  const section = document.createElement("section");

  section.className = "tg-automation-coach";

  section.innerHTML = `
    <h3>🤖 Growth Coach™</h3>

    <p>
      Tus automatizaciones están funcionando con una tasa de éxito del
      <strong>97%</strong>, lo que indica una operación estable.
    </p>

    <p>
      Actualmente existen <strong>3 procesos</strong> pendientes de ejecución.
      Ninguno representa un riesgo inmediato, pero la automatización
      <strong>"Cliente sin respuesta"</strong> debería ejecutarse antes de las
      10:00 para mantener la velocidad de seguimiento comercial.
    </p>

    <p>
      <strong>Recomendación:</strong>
      considera crear una automatización para identificar clientes que no han
      interactuado durante los últimos 30 días y generar una campaña de
      reactivación automáticamente.
    </p>
  `;

  return section;

}