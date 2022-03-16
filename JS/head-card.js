//MUST HAVE - CREATE A TEMPLATE TAG
var template_headcard = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_headcard.innerHTML = `
<style>


/* CARDS */
.head_card {
    background-color: rgba(0,0,0,0.4);
    display: flex;
    position: relative;
    border-radius: 12px;
    border: none;
    padding: 20px 20px;
    width: 300px;
    height: 83px;
    margin-bottom: 20px;
    padding-top: 10px;
}
/* Text inside cards */
.text_uwc {
    /* position: relative; */
    color: rgb(255, 255, 255);
    font-family: 'Poppins', sans-serif;
    /* text-align: left; */
    /* flex: 1; */
}


/* Icons inside cards */
.icon_warn {
    position: relative;
    height: 100%;
}

/* Content */
.content{
    display: flex;
    /* justify-content: left; */
    /* flex-direction: column; */
    /* align-items: flex-start; */
    /* flex: 2; */
    padding-left: 20px;
    text-align: left;
}

</style>

<button class="head_card">

    <img class="icon_warn" src="./Assets/warning.svg">
    <div class="content">
        <p class="text_uwc">hi</p>
    </div>
</button>


`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class HeadCard extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_headcard.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".icon_warn").src = this.getAttribute("icon")
        this.shadowRoot.querySelector(".text_uwc").innerHTML = this.getAttribute("text_uwc")
       

    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("head-card", HeadCard)