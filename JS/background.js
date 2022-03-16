//MUST HAVE - CREATE A TEMPLATE TAG
var template_background = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_background.innerHTML = `
<style>
    .cursor{
        position: relative;
        width: 160px;
        height: 160px;
        padding-top: 100px;
        margin-right: -50px;
    }
    .imgBox,
    .pointerBox {
        text-align: center;
    }

    /* Yes or No Image */
    .yn{
        position: relative;
        width: 197px;
        height: 196px;
        padding-top: 265px;
    }



    /* Arrow pointing upwards */
    .arrow-10 {
        height:60px;
        padding-top: 60px;
        display: grid;
        margin-top: 147px;
        z-index: 3;
        background: 
        linear-gradient(currentColor 0 0) bottom/10px calc(100% - 15px),
        conic-gradient(from 134deg at top,#0000 ,currentColor 1deg 90deg,#0000 91deg) top/100% 15px;
        background-origin: content-box;
        background-repeat: no-repeat;
        animation: a10-0 2s infinite;
        color: white;
      }
      .arrow-10:before,
      .arrow-10:after {
        content: "";
        grid-area: 1/1;
        background:inherit;
        background-size: 10px calc(100% - 25px),100% 25px;
        animation: a10-1 2s infinite;
      }
      .arrow-10:after {
        background-size: 10px calc(100% - 30px),100% 30px;
        animation: a10-2 2s infinite;
      }
      @keyframes a10-0 {
        25%,100% {padding-top:0px}
      }
      
      @keyframes a10-1 {
        0%,25%   {margin:60px -10px 0}
        50%,100% {margin:8px  -10px 0}
      }
      @keyframes a10-2 {
        0%,50%   {margin:60px -15px 0}
        75%,100% {margin:20px -15px 0}
      }
    

      html, body {
        height: 100%;
      }
      
      body {
        display: grid;
        font-family: 'Poppins', sans-serif;
        color: #111;
      }
      
      a {
        text-decoration: none;
        color: inherit;
      }
      


      /* Tell me about it */
      .cta {
        position: absolute;
        margin: auto;
        padding: 19px 22px;
        transition: all 0.2s ease;
        margin-left: 46px;
        margin-top: 79px;
      }
      .cta:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        border-radius: 28px;
        background: rgb(66, 66, 66);
        width: 56px;
        height: 56px;
        transition: all 0.3s ease;
      }
      .cta span {
        position: relative;
        font-size: 16px;
        line-height: 18px;
        font-weight: 900;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        vertical-align: middle;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: white;
      }
      .cta svg {
        position: relative;
        top: 0;
        margin-left: 10px;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: rgb(255, 255, 255);
        stroke-width: 2;
        transform: translateX(-5px);
        transition: all 0.3s ease;
      }
      .cta:hover:before {
        width: 100%;
        background: #292929;
      }
      .cta:hover svg {
        transform: translateX(0);
        color: white;
      }
      .cta:active {
        transform: scale(0.96);
        color: white;
      }


    
</style>

<the-header head_text="Do you guys know about fast fashion and its effects on environment?">
</the-header>

<!-- <the-button button_text="Tell me about it!"></the-button> -->
<div class="imgBox">
    <img src="./Assets/yes or no.svg" alt="" class="yn">
</div>



<a href="./2nd-page.html" class="cta">
        <span>Tell me about it!</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
</a>



<div class="arrow-10"></div>



`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBackground extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor() {
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({ mode: "open" }) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback() {
        this.shadowRoot.appendChild(template_background.content.cloneNode(true)); //use the template to make a clone
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-background", TheBackground)