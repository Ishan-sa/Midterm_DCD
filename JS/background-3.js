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
   
/* had to change the styling to work on my computer, hopefully doesn't mess up on yours */

   .back-div{
    position: absolute;
    margin-top: -793px;
    margin-left: -347px;
    }

    .home-div{
        position: absolute;
        top: 22px;
        right: 22px;
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

<!--- created seperate pop ups for each different svg, 
probably not the best way to do it. --->

.popup{
    display: none;
}

#popup_container1{
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

#popup_container2{
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

#popup_container3{
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

    <head-card icon="./Assets/watericon.svg" text_uwc="Water Waste" class="hc2"></head-card>

    <head-card icon="./Assets/Pollution-icon.svg" text_uwc="Pollution" class="hc3"></head-card>
</div>


<img src="./Assets/planet.gif" class="planet">

<div class="unsafe-div">
    <img class="unsafe" src="./Assets/uwc.svg" alt="">
</div>

<!--- created seperate pop ups for each different svg, 
probably not the best way to do it. --->

<div class="popup">
    <div class="popup1" id="popup_container1">
        <div class="popup-content">
            <img class="unsafe" src="./Assets/uwc.svg" alt="">
        </div>
    </div>

    <div class="popup2" id="popup_container2">
        <div class="popup-content">
            <img class="unsafe" src="./Assets/ww2.svg" alt="">
        </div>
    </div>

    <div class="popup3" id="popup_container3">
        <div class="popup-content">
            <img class="unsafe" src="./Assets/Pol.svg" alt="">
        </div>
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
        this.shadowRoot.querySelector('.hc').onclick = () => this.PopUp(); 
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    PopUp(text_uwc = "Unsafe Working Conditions") {
        
        if (text_uwc = "Unsafe Working Conditions") {
            this.shadowRoot.querySelector('#popup_container1').style.cssText = `
            display: flex; 
        `}

        if (text_uwc = "Water Waste") {
            this.shadowRoot.querySelector('#popup_container2').style.cssText = `
            display: flex; 
            `}
        
        if (text_uwc = "Pollution") {
            this.shadowRoot.querySelector('#popup_container3').style.cssText = `
            display: flex; 
            `}
    }

    }

    



    // extras

//MUST HAVE - define the tag for the custom elements
customElements.define("the-background3", TheBackground3)
