//MUST HAVE - CREATE A TEMPLATE TAG
var template_background3 = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_background3.innerHTML = `
<style>
   .planet{
       position: relative;
       width: 60%;
       text-align: center;
       margin-bottom: -115px;
   }

   .content {
       margin-top: -26px;
       text-align: center;
       padding-left: 5px;
   }
</style>


<div class="content">
    <head-card icon="./Assets/warning.svg" text_uwc="Unsafe Working Conditions" class="hc"></head-card>
    <head-card icon="./Assets/watericon.svg" text_uwc="Water Waste" class="hc"></head-card>
    <head-card icon="./Assets/Pollution.svg" text_uwc="Pollution" class="hc"></head-card>
</div>


<img src="./Assets/planet.gif" class="planet">

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBackground3 extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_background3.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-background3", TheBackground3)