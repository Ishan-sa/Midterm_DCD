//MUST HAVE - CREATE A TEMPLATE TAG
var template_background = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_background.innerHTML = `
<style>
    .cursor{
        position: absolute;
        width: 160px;
        height: 160px;
        left: 121px;
        top: 567px;
        z-index: 1;
    }
    .yn{
        position: absolute;
        width: 197px;
        height: 196px;
        left: 96px;
        top: 282px;
    }
</style>

<div>
    <img src="./Assets/bg.svg" alt="background" id="bg">
</div>

<div>
    <img src="./Assets/cursor.gif" alt="" class="cursor">
</div>

<div>
    <img src="./Assets/yes or no.svg" alt="" class="yn">
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBackground extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_background.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-background", TheBackground)