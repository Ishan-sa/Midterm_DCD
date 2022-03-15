//MUST HAVE - CREATE A TEMPLATE TAG
var template_background2 = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_background2.innerHTML = `
<style>

   .think-gif{
       position: relative;
       margin-top: 75px;
       left: 95px;
       width: 185px;
       height: 123px;
   }
   .clothes{
       position: relative;
       width: 302px;
       height: 201px;
       left: 37px;
       padding-top: 89px;
    }
    .rect-grey{
         position: relative;
         width: 324px;
         height: 33px;
         left: 26px;
         margin-top: 23px;
         background: rgba(0,0,0,0.34);
         border-radius: 7px;
    }
   .hm{
        position: relative;
        width: 28.8px;
        height: 18px;
        left: 22px;
        padding-top: 6px;
   }
   .f21{
        position: relative;
        width: 96px;
        height: 16px;
        left: 80px;
        padding-top: 6px;
   }
   .shein{
        position: relative;
        width: 61px;
        height: 13px;
        left: 116px;
        padding-top: 6px;
   }
   .mockup{
       position: relative;
       top: 4%;
   }
   .any-idea{
        position: relative;
        width: 189.22px;
        height: 207.72px;
        padding-top: 130px;
        display: block;
        margin: auto;
   }
   .no-idea{
        position: relative;
        width: 208px;
        height: 208px;
        display: block;
        margin: auto;
   }


  .home-div{
    position: absolute;
    top: 22px;
    right: 22px;
  }

  .home-button:hover{
        filter: invert(55%) sepia(66%) saturate(2329%) hue-rotate(159deg) brightness(104%) contrast(105%);
    }

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
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
      }
  
  .back-div{
      position: absolute;
      margin-top: 12px;
      margin-left: 8px;
  }


  button {
    border-radius: 10px;
    background-color: #262626;
    border: none;
    color: #fff45c;
    text-align: center;
    font-size: 16px;
    padding: 16px;
    width: 150px;
    height: auto;
    transition: all 0.5s;
    cursor: pointer;
    box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    margin-bottom: 26px;
    margin-top: 50px;
  }
  
  button{
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }
  
  button:after {
    content: '»';
    position: absolute;
    opacity: 0;  
    top: 14px;
    right: -20px;
    transition: 0.5s;
  }
  
  button:hover{
    padding-right: 24px;
    padding-left:8px;
  }
  
  button:hover:after {
    opacity: 1;
    right: 10px;
  }

  .lmButton{
    display: flex;
    justify-content: center;
  }

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
    border-color: #3dcfff;
    height: 120%;
}
div.arrow:hover::before {
    border-color: #3dcfff;
    transform: scale(0.8);
}


</style>



<div class="back-div">
    <a href="./home-page.html">
        <div class="arrow"></div>
    </a>
</div>

<div class="home-div">
    <a href="./home-page.html">
        <img class="home-button shrink" id="shrink" src="./Assets/home.svg" alt="">
    </a>
</div>




<div class="bg">
    <img src="./Assets/think-gif.gif" class="think-gif" alt="think-img">
    
    <the-header head_text2="Fast Fashion is a term to describe companies that produce trendy clothes for a cheap price."></the-header>

    <the-header head_text3="The quick turn around times and mass production cause many social and  environmental issues."></the-header>

    <the-header head_text4="I want to know about it!"></the-header>
</div>

<div>
    <img src="./Assets/clothes.png" class="clothes" alt="clothes">
</div>
    
<div class="rect-grey">
    <img src="./Assets/H&M.svg" class="hm" alt="h&m">
    <img src="./Assets/F21.svg" class="f21" alt="f21">
    <img src="./Assets/SHEIN.svg" class="shein" alt="Shein">
</div>

<img src="./Assets/any-idea.svg" class="any-idea" alt="any-idea-vector">


<img src="./Assets/no-idea.gif" class="no-idea" alt="no-idea-gif">

<a href="./3rd-page.html">
    <div class="lmButton">
        <button><span>Learn More</span></button>
    </div>
</a>




`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheBackground2 extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_background2.content.cloneNode(true)); //use the template to make a clone
        // this.shadowRoot.querySelector(".learn-more").onclick = () => this.goToPage3();
        // this.shadowRoot.querySelector(".learn-more").onmouseenter = () => this.popUp();

    
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
// goToPage3(){
//     this.popUp(); 
//     setTimeout(()=> {
//         location.href = "./3rd-page.html"
//     },2000);
//     // location.href = "./3rd-page.html"
// }
// popUp(){
//     this.shadowRoot.querySelector(".learn-more").style.cssText = `width: 200px; height: 200px;`;
// }

}


//MUST HAVE - define the tag for the custom elements
customElements.define("the-background2", TheBackground2)