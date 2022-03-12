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
        left: 94.78px;
        padding-top: 130px;
   }
   .no-idea{
        position: relative;
        width: 208px;
        height: 208px;
        left: 62px;
   }
   .learn-more{
       position: relative;
       padding-left: 128px;
       margin-top: 43px;
       margin-bottom: 35px;
    //    width: 100px;
    //    height: 100px;
    //    transition: width 2s, height 2s;
   }

  .back-div{
    position: absolute;
    display: flex;
    margin-left: 15px;
    margin-top: 10px;
  }

  .home-div{
    position: absolute;
    display: flex;
    align-items: right;
    margin-left: 336px;
    margin-top: 17px;
  }
</style>


<div class="back-div">
    <a href="./home-page.html">
        <img class="back-button" src="./Assets/arrow-left-line.svg" alt="">
    </a>
</div>

<div class="home-div">
    <a href="./home-page.html">
        <img class="home-button" src="./Assets/home.svg" alt="">
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
    <img src="./Assets/learn-more.svg" class="learn-more">
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