//MUST HAVE - CREATE A TEMPLATE TAG
var template_background2 = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_background2.innerHTML = `
<style>

   .think-gif{
       position: absoulte;
       left: 95px;
       top: 69px;
       width: 185px;
       height: 123px;
   }
   .bg {
        background-image: url("./Assets/bg.svg");
        height: 100%;
        background-repeat: no-repeat;
   }
   .bg > img {
       position: absolute;
   }
   
   .clothes{
       position: absolute;
       width: 302px;
       height: 201px;
       left: 37px;
       top: 300px;
   }
   .hm{
        position: absolute;
        width: 28.8px;
        height: 18px;
        left: 54px;
        top: 586px;    
   }
   .f21{
        position: absolute;
        width: 96px;
        height: 16px;
        left: 130px;
        top: 587px;
   }
   .shein{
        position: absolute;
        width: 61px;
        height: 13px;
        left: 273px;
        top: 589px;    
   }
   .rect-grey{
        position: absolute;
        width: 324px;
        height: 33px;
        left: 26px;
        top: 579px;
        background: rgba(0,0,0,0.34);
        border-radius: 7px;
   }
   .hm, .f21, .shein, .rect-grey{
       margin-top: -55px;
   }
   .mockup{
       position: absolute;
       top: 4%;
   }
   .any-idea{
        position: absolute;
        width: 189.22px;
        height: 207.72px;
        left: 94.78px;
        top: 675.78px;
   }
   .no-idea{
        position: absolute;
        width: 208px;
        height: 208px;
        left: 85px;
        top: 873px;
   }

</style>





<div class="bg">
    <img src="./Assets/think-gif.gif" class="think-gif" alt="think-img">
</div>

<div>
    <img src="./Assets/clothes.png" class="clothes" alt="clothes">
</div>
    
<div class="rect-grey"></div>

<div>
    <img src="./Assets/H&M.svg" class="hm" alt="h&m">
</div>

<div>
    <img src="./Assets/F21.svg" class="f21" alt="f21">
</div>

<div>
    <img src="./Assets/SHEIN.svg" class="shein" alt="Shein">
</div>

<div>
    <img src="./Assets/any-idea.svg" class="any-idea" alt="any-idea-vector">
</div>

<div>
    <img src="./Assets/no-idea.gif" class="no-idea" alt="no-idea-gif">
</div>



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
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-background2", TheBackground2)