//MUST HAVE - CREATE A TEMPLATE TAG
var template_button = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_button.innerHTML = `
<style>
    .button,
    .button_top {
        position: absolute;
        width: 211px;
        height: 47px;
        left: 89px;
        top: 590px;
        font-family: 'Poppins', sans-serif;
        // border: 0.5px solid #EFF6EE;
        border-radius: 12px;
        border: none;
    }
    .button {
        z-index: 0;
    }
    .button_top {
        background: transparent;
        font-size: 0;
        z-index: 2;
    }
    .button_top:hover + .button {
        background: #bababa;
    }
</style>

<button class='button_top'>
    hi
</button>
<button class='button'>
    hi
</button>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheButton extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_button.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector('.button').innerHTML = this.getAttribute("button_text");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-button", TheButton)