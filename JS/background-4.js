//MUST HAVE - CREATE A TEMPLATE TAG
var template_background4 = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_background4.innerHTML = `
<style>

.building1{
    position: absolute;
    left: 95px;
    top: 69px;
    width: 185px;
    height: 123px;
}

</style>


<div>
    <img src="./Assets/building1.svg" class="building1" alt="Building1">
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBackground4 extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_background4.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-background4", TheBackground4)