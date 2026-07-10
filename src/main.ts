import "./design/globals.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Application root not found.");
}

app.innerHTML = `
    <main class="foundation">

        <p class="eyebrow">
            Teo Growth™
        </p>

        <h1>
            Product Experience Lab™
        </h1>

        <p class="message">
            Mientras tomabas tu café...
        </p>

        <p class="message">
            Teo ya revisó tu empresa.
        </p>

        <button>
            Comenzar experiencia
        </button>

    </main>
`;