/* 
constructor()
The constructor() is called when the element is created before it gets inserted into the DOM.
This is often used to attach the shadow root.
You should not make any DOM manipulations at this stage. It's better to make these in the connectedCallback as at that time you will be able to safely access child elements.

connectedCallback()
The connectedCallback() method is called as soon as the element is inserted into the DOM. This is where you'd call any code that depends on the DOM because the element is now inserted into the DOM.
This is where you'll most likely manage attributes (we'll see that in a future lesson) and add event listeners.

disconnectedCallback()
The disconnectedCallback() method is called when the element is removed from the DOM.
This is often used to clean up and restore memory. Most commonly, it's used to remove event listeners that you have added in the connectedCallback().
 */
class AppDashboard extends HTMLElement {
    constructor() {
        super();
        console.log("AppDashboard created");
        const shadowRoot = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        console.log("AppDashboard inserted into DOM");
        // add event listeners (if necessary)
    }

    disconnectedCallback() {
        console.log("AppDashboard removed from DOM");
        // remove event listeners (that were added in connectedCallback())
    }
}

window.customElements.define("app-dashboard", AppDashboard);

/* 
constructor vs connectedCallback
Remember that in the constructor(), the element has not been inserted into the DOM yet. This is why event listeners go into the connectedCallback.

We recommend that you attach the shadow in the constructor() and do all remaining DOM operations in the connectedCallback.

To better visualize the difference, take a look at the code below:
*/
class AppDashboard extends HTMLElement {
    constructor() {
        super();
        console.log("AppDashboard created");
        const shadowRoot = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        console.log("AppDashboard inserted into DOM");
    }
}

window.customElements.define("app-dashboard", AppDashboard);

const element = document.createElement("app-dashboard"); // "AppDashboard created" will be logged
document.body.appendChild(element); // "AppDashboard inserted into DOM" will be logged