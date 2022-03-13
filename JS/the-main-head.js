//MUST HAVE - CREATE A TEMPLATE TAG
var template_main_head = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_main_head.innerHTML = `
<style>
    .main-head{
        position: absolute;
        text-align: center;
        left: 80px;
        top: 42px;
        width: 215px;
        height: 30px;
        font-weight: semi-bold;
        font-size: 20px;
        line-height: 40px;
        color: #FFFFFF;
        font-family: 'Poppins', sans-serif;
    }
</style>

<div class="main-head">
    Hi
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheMainHead extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_main_head.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector('.main-head').innerHTML = this.getAttribute("main_head");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-main-head", TheMainHead)