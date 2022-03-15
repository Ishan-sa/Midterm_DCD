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
  
  
    .home-div{
        position: absolute;
        top: 22px;
        right: 22px;
    }
    
    .home-button:hover{
        filter: invert(55%) sepia(66%) saturate(2329%) hue-rotate(159deg) brightness(104%) contrast(105%);
    }

    .back-div{
        position: absolute;
        z-index: 4;
        top: 12px;
        left: 10px;
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
    border-color: #fff;
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
    border-color: #fff;
    transform-origin: 100% 0;
    transition: 0.2s ease;
}
div.arrow:hover::after {
    transform: rotate(45deg);
    border-color: #00ccff;
    height: 120%;
}
div.arrow:hover::before {
    border-color: #00ccff;
    transform: scale(0.8);
}

/* Popups */

.popup{
    background: rgba(0, 0, 0, 0.6);
    display: none;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 375px;
    height: 812px;
    border-radius: 15px;
    animation: fade 0.5s ease-in-out forwards;
}



.popup-2{
    background: rgba(0, 0, 0, 0.6);
    display: none;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 375px;
    height: 812px;
    border-radius: 15px;
    animation: fade 0.5s ease-in-out forwards;
}

.popup-3{
    background: rgba(0, 0, 0, 0.6);
    display: none;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 375px;
    height: 812px;
    border-radius: 15px;
    animation: fade 0.5s ease-in-out forwards;
}


/* Background fade black */

@keyframes fade{
    0%{opacity: 0%;}
    100%{opacity: 100%;}
}

/* Popups centered */

.unsafe, .water-waste, .pollution{
    margin-top: 100px;
}

/* Learn more buttons */

.lm-1{
    position: absolute;
    display: flex;
    top: 237px;
    padding: 3px 8px 3px 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    border: 0px;
    border-radius: 5px;
    color: rgb(193, 193, 193);
    background-color: #3dceff00;
    cursor: pointer;
}

#unsafe, #water-waste, #pollution{
    top: -400px;
    animation: drop 1s ease-in-out forwards;
}

@keyframes drop{
    0%{opacity: 0;}
    50%{transform: translateY(50px);}
    100%{transform: translateY(0px); opacity: 1;}
}

.ra-1{
    margin-left: 10px;
}

.lm-2{
    position: absolute;
    display: flex;
    top: 339px;
    padding: 3px 8px 3px 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    border: 0px;
    border-radius: 5px;
    color: rgb(193, 193, 193);
    background-color: #3dceff00;
    cursor: pointer;
}

.lm-3{
    position: absolute;
    display: flex;
    top: 437px;
    padding: 3px 8px 3px 8px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    border: 0px;
    border-radius: 5px;
    color: rgb(193, 193, 193);
    background-color: #3dceff00;
    cursor: pointer;
}

/* Shrink effect on hover */

.shrink{
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
}

.shrink:hover, .shrink:focus, .shrink:active{
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
}
      
</style>


<!-- Back button icon -->


<div class="back-div">
    <a href="./2nd-page.html">
        <div class="arrow"></div>
    </a>
</div>


<!-- Home Button icon -->

<div class="home-div">
    <a href="./home-page.html">
        <img class="home-button shrink" src="./Assets/home.svg" alt="">
    </a>
</div>

<!-- ICONS in cards -->

<div class="content">
    <head-card icon="./Assets/warning.svg" text_uwc="Unsafe Working Conditions" class="hc"></head-card>

    <head-card icon="./Assets/watericon.svg" text_uwc="Water Waste" class="hc"></head-card>

    <head-card icon="./Assets/Pollution-icon.svg" text_uwc="Pollution" class="hc"></head-card>
</div>

<!-- Planet GIF -->
<img src="./Assets/planet-over-profit.gif" class="planet">


<!-- POPUPS -->

<div class="popup" id="popup_container">
    <div class="popup-content">
        <img class="unsafe" id="unsafe" src="./Assets/uwc.svg" alt="">
    </div>
</div>

<div class="popup-2" id="popup_container">
    <div class="popup-content">
        <img class="water-waste" id="water-waste" src="./Assets/ww.svg" alt="">
    </div>
</div>

<div class="popup-3" id="popup_container">
    <div class="popup-content">
        <img class="pollution" id="pollution" src="./Assets/Pollution.svg" alt="">
    </div>
</div>


<!-- Learn More Buttons -->

<button class="lm-1 shrink">
    Learn More
    <img class="ra-1" id="ra-1" src="./Assets/right-arrow.svg" alt="">
</button>

<button class="lm-2 shrink">
    Learn More
    <img class="ra-1" src="./Assets/right-arrow.svg" alt="">
</button>

<button class="lm-3 shrink">
    Learn More
    <img class="ra-1" src="./Assets/right-arrow.svg" alt="">
</button>

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

        this.shadowRoot.querySelector(".lm-1").onclick = () => this.popUp1();
        this.shadowRoot.querySelector(".lm-2").onclick = () => this.popUp2();
        this.shadowRoot.querySelector(".lm-3").onclick = () => this.popUp3();




        
        this.shadowRoot.querySelector(".popup").onclick = () => this.close_1();
        this.shadowRoot.querySelector(".popup-2").onclick = () => this.close_2();
        this.shadowRoot.querySelector(".popup-3").onclick = () => this.close_3();

        // this.shadowRoot.querySelector(".unsafe").onclick = () => this.test();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    
    popUp1(){
        this.shadowRoot.querySelector(".popup").style.cssText = `
        display: flex;
        z-index: 7;
        `;
    }
    popUp2(){
        this.shadowRoot.querySelector(".popup-2").style.cssText = `
        display: flex;
        z-index: 8;
        `;
    }
    popUp3(){
        this.shadowRoot.querySelector(".popup-3").style.cssText = `
        display: flex;
        z-index: 9;
        `;
    }
    close_1(){
        this.shadowRoot.querySelector(".popup").style.cssText = `
        pointer-events: none;
        `
    }
    close_2(){
        this.shadowRoot.querySelector(".popup-2").style.cssText = `
        pointer-events: none;
        `
    }
    close_3(){
        this.shadowRoot.querySelector(".popup-3").style.cssText = `
        pointer-events: none;
        `
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-background3", TheBackground3)
