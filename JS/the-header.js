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
        color: white;
        font-family: 'Poppins', sans-serif;
    }
    .head-3{
        position: absolute;
        width: 284px;
        height: 120px;
        left: 46px;
        top: 585px;
        text-align: center;
        color: white;
        font-family: 'Poppins', sans-serif;
    }
    .head-4{
        position: absolute;
        width: 282px;
        height: 36px;
        left: 47px;
        text-align: center;
        color: black;
        font-family: 'Poppins', sans-serif;
        padding-top: 906px;
    }

</style>

<div class="head-1" id="head-1">
    heading-1
</div>

<div class="head-2" id="head-2">
    heading-2
</div>

<div class="head-3" id="head-3">
    heading-3
</div>

<div class="head-4" id="head-4">
    heading-4
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
        this.shadowRoot.querySelector('.head-2').innerHTML = this.getAttribute("head_text2");
        this.shadowRoot.querySelector('.head-3').innerHTML = this.getAttribute("head_text3");
        this.shadowRoot.querySelector('.head-4').innerHTML = this.getAttribute("head_text4");
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define('the-header', TheHeader)