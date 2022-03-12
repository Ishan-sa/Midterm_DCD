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
  
   .unsafe-div{
        position: absolute;
        // display: flex;
        justify-content: center;
        z-index: 2;
        display: none;
   }
    .back-div{
        position: absolute;
        display: flex;
        margin-left: -299px;
        margin-top: -746px;
    }

    .home-div{
        position: absolute;
        display: flex;
        align-items: right;
        margin-left: 314px;
        margin-top: -747px;
    }
   
</style>


<div class="back-div">
    <a href="./2nd-page.html">
        <img class="back-button" src="./Assets/arrow-left-line.svg" alt="">
    </a>
</div>

<div class="home-div">
    <a href="./home-page.html">
        <img class="home-button" src="./Assets/Home.svg" alt="">
    </a>
</div>

<div class="content">
    <head-card icon="./Assets/warning.svg" text_uwc="Unsafe Working Conditions" class="hc"></head-card>

    <head-card icon="./Assets/watericon.svg" text_uwc="Water Waste" class="hc"></head-card>

    <head-card icon="./Assets/Pollution-icon.svg" text_uwc="Pollution" class="hc"></head-card>
</div>


<img src="./Assets/planet.gif" class="planet">

<div class="unsafe-div">
    <img class="unsafe" src="./Assets/uwc.svg" alt="">
</div>


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
    popUp(){

    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-background3", TheBackground3)
