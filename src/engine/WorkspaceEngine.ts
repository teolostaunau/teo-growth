export type Workspace =
  | "growth"
  | "inbox"
  | "contacts"
  | "pipelines"
  | "calendar"
  | "broadcasts"
  | "automations"
  | "flows"
  | "settings";

let currentWorkspace: Workspace = "growth";

export function getWorkspace(): Workspace {
  return currentWorkspace;
}

export function setWorkspace(workspace: Workspace) {
  currentWorkspace = workspace;
}