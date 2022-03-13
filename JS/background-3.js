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
        top: 22px;
        right: 22px;
    }

    .back-div{
        position: absolute;
        display: flex;
        align-items: right;
        margin-left: 314px;
        margin-top: -548px;
    }
    
    /* Back Button */

div.arrow {
    width: 15px;
    height: 15px;
    box-sizing: border-box;
    position: absolute;
    left: 18px;
    top: 15px;
    transform: rotate(135deg);
    rotate: 90deg;
}
div.arrow::before {
    content: '';
    width: 100%;
    height: 100%;
    border-width: 3px 3px 0px 0px;
    border-style: solid;
    border-color: #7d7d7d;
    transition: 0.2s ease;
    display: block;
    transform-origin: 100% 0;
}
div.arrow:after {
    content: '';
    float: left;
    position: relative;
    top: -100%;
    width: 100%;
    height: 100%;
    border-width: 0 2px 0 0;
    border-style: solid;
    border-color: #7d7d7d;
    transform-origin: 100% 0;
    transition: 0.2s ease;
}
div.arrow:hover::after {
    transform: rotate(45deg);
    border-color: #3dcfff;
    height: 120%;
}
div.arrow:hover::before {
    border-color: #3dcfff;
    transform: scale(0.8);
}

.unsafe-div{
    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 2;
    display: none;
}

.popup{
    background: rgba(0, 0, 0, 0.6);
    width: 375px;
    height: 812px;
    border-radius: 15px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
}

.popup .show{
    display: flex;
}

.popup-content{

}

.test{
    position: absolute;
    top: 226px;
    padding: 6px;
}
      
</style>


<div class="back-div">
    <a href="./2nd-page.html">
        <div class="arrow"></div>
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

<div class="popup" id="popup_container">
    <div class="popup-content">
        <img class="unsafe" src="./Assets/uwc.svg" alt="">
    </div>
</div>

<!--- <button class="test" id="open">
    Learn More
</button> --->

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


    // extras

//MUST HAVE - define the tag for the custom elements
customElements.define("the-background3", TheBackground3)
