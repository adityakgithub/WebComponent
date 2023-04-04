class AppNavbar extends HTMLElement{
    constructor(){
        super();
        const shdowRoot= this.attachShadow({mode: "open"});
    }
}
window.customElements.define("app-navbar",AppNavbar);
/* 
<style>
    p {
        color: red;
    }
</style>
<p>Page subtitle</p>
<dashboard-stats>
    <!-- Shadow DOM starts here -->
    <p>Dashboard stats</p>
    <!-- Shadow DOM ends here -->
</dashboard-stats>


<dashboard-stats>
    <!-- Shadow DOM starts here -->
    <style>
        p {
            font-weight: bold;
        }
    </style>
    <p>Dashboard stats</p>
    <!-- Shadow DOM ends here -->
</dashboard-stats>


class DashboardStats extends HTMLElement {
    constructor() {
        super(); // do not forget super() because we're overriding the constructor()
        const shadowRoot = this.attachShadow({mode: "open"});
    }
}
Result:
<dashboard-stats>
#shadow-root(open)
</dashboard-stats>
*/