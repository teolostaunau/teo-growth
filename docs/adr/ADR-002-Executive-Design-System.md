ADR-002 — Executive Design System™

Decisión

Mantener colors.css, spacing.css, typography.css y elevation.css como la capa de Design Tokens.
Evolucionar progresivamente hacia una carpeta src/design/components/ con componentes reutilizables (buttons.css, cards.css, badges.css, metrics.css, etc.).
Limitar workspace.css exclusivamente al layout del Workspace (Sidebar, Header, Footer y Growth Center).

Creo que este ADR marcará un antes y un después en la arquitectura visual de Teo Growth™, y además nos facilitará muchísimo el trabajo cuando retomemos el Runtime de la aplicación real.