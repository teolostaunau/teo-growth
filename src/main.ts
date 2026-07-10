import "./design/globals.css";

import { renderWorkspace } from "./workspace/Workspace";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Application root not found.");
}

app.appendChild(
  renderWorkspace()
);