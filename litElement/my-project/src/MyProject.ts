import { LitElement, html, css, PropertyValues } from 'lit';
import { property,state, query } from 'lit/decorators.js';


//const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

export class MyProject extends LitElement {
  @property({ type: String }) title = 'My app'
  list = [
    { Name: 'Aditya Korade'},
    { Company: 'Cybage'},
    { EmpID: 24553}
  ];
  
  static styles = css`
    :host {
      display: block;
    }
    #message {
      position: fixed;
      background-color: cornflowerblue;
      color: white;
      padding: 10px;
    }
  `;
  @state()
  _showMessage = false;

  @query('#message')
  _message!: HTMLDivElement;

  

  render() { 
    return html`
    
      <button @click=${() => this._showMessage = !this._showMessage}>Click me</button>
      <div id="message" ?hidden=${!this._showMessage}>
      { Name: 'Aditya Korade'},
      { Company: 'Cybage'},
      { EmpID: 24553}
      </div>
    `;
  }

  // @query('#newitem')
  // input!: HTMLInputElement;
  
  // addToDo() { 
  //   // this.listItems.push({text: this.input.value, completed: false});
  //   // this.input.value = '';
  //   // this.requestUpdate();
  //   console.log(this.list);
  //   return(html`<h1>${this.list}/<h1>`);}

  protected updated(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('_showMessage')) {
      const final = this._message.getBoundingClientRect().width;
      const starting = 0 - final;
      var player = this._message.animate([
        { transform: `translateX(${starting}px)` },
        { transform: `translateX(0)` }
      ], {
        duration: 500,
        easing: 'ease-out',
      });
    }
  }
    
    
      
  
}
