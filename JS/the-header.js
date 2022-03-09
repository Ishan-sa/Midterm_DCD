//MUST HAVE - CREATE A TEMPLATE TAG
var template_header = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_header.innerHTML = `
<style>
    .head-1{
        position: absolute;
        width: 295.48px;
        height: 89px;
        left: 47px;
        top: 110px;
        text-align: center;
        color: white;
        font-family: 'Poppins', sans-serif;
    }
    .head-2{
        position: absolute;
        width: 284px;
        height: 120px;
        left: 50px;
        top: 196px;
        text-align: center;
        color: black;
        font-family: 'Poppins', sans-serif;
        background: blue;
    }
</style>

<div class="head-1">
    heading-1
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheHeader extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot
        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_header.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector('.head-1').innerHTML = this.getAttribute("head_text");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define('the-header', TheHeader)