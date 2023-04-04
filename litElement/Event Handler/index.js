import {LitElement, html} from "lit";

class AppCounter extends LitElement {
    constructor(){
        super();
        this.counter=0;
    }
    addOne(){
        this.counter+=1;
        this.requestUpdate();
    }
    reduceOne(){
        this.counter-=1;
        this.requestUpdate();
    }
    rese(){
        this.counter=0;
        this.requestUpdate();
    }

    render() {
        return html`<h1>Counter ${this.counter}</h1>
        <button @click="${this.addOne}">Add 1</button>
        <button @click="${this.reduceOne}">Sub 1</button>
        <button @click="${this.rese}">Reset</button>`;
    }
}

window.customElements.define("app-counter", AppCounter);
