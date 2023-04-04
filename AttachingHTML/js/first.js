class DashboardStats extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        const template = document.querySelector("#dashboard-template");
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define("dashboard-stats", DashboardStats);