//MUST HAVE - CREATE A TEMPLATE TAG
var template_learn_more = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_learn_more.innerHTML = `
<style>
    .learn-more{
        position: absolute;
        width: 121.25px;
        height: 24.76px;
        left: 127px;
        top: 1257px;
        background-color: blue;
    }
</style>

<div class="learn-more">
    yo
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class LearnMore extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot
        this.shadowRoot.querySelector(".learn-more").innerHTML = this.getAttribute("learn_more");
        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_learn_more.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("learn-more", LearnMore)