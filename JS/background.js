//MUST HAVE - CREATE A TEMPLATE TAG
var template_background = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_background.innerHTML = `
<style>
    .cursor{
        position: relative;
        width: 160px;
        height: 160px;
        padding-top: 100px;
        margin-right: -50px;
    }
    .imgBox,
    .pointerBox {
        text-align: center;
    }
    .yn{
        position: relative;
        width: 197px;
        height: 196px;
        padding-top: 265px;
    }
</style>

<the-header head_text="Do you guys know about fast fashion and its effects on environment?">
</the-header>

<the-button button_text="Tell me about it!"></the-button>
<div class="imgBox">
    <img src="./Assets/yes or no.svg" alt="" class="yn">
</div>
<div class="pointerBox">
    <img src="./Assets/cursor.gif" alt="" class="cursor">
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