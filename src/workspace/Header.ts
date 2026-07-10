export function renderHeader(): HTMLElement {
  const header = document.createElement("header");

  header.className = "tg-header";

  header.innerHTML = `
    <div>
      <p class="tg-overline">Buenos días</p>
      <h1>Teo ya revisó tu empresa</h1>
    </div>

    <button class="tg-demo-button">
      Cambiar Rol
    </button>
  `;

  return header;
}