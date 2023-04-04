/* 
npm install lit
*/
import {LitElement, html} from "lit";

class UserCard extends LitElement {
    static properties ={
        user:{type:Object}
    }
    constructor(){
        super();
    }
    render() {
        return html`<div>
        <h2>${this.user.name}</h2>
        <p>User is ${this.user.status}</p>
        </div>`;
    }
}

window.customElements.define("user-card", UserCard);

// Sample usage - do not modify
const card1 = document.querySelector("#card1");
card1.user = {
    id: 1,
    name: "Sam Green",
    status: "paid"
};

const card2 = document.querySelector("#card2");
card2.user = {
    id: 2,
    name: "Alex Kop",
    status: "free"
};
