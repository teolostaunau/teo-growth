export function renderFooter(): HTMLElement {
  const footer = document.createElement("footer");

  footer.className = "tg-footer";

  footer.innerHTML = `
    Vision Demo v2.0 · Product Experience Lab™
  `;

  return footer;
}