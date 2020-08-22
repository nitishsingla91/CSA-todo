import './addtodo.component.js';
import './list.component.js';

if('serviceWorker' in  navigator){

    window.addEventListener('load', () =>{

        navigator.serviceWorker
        .register('../sw_cached_pages.js')
        .then(reg => console.log('Service Worker Registered'))
        .catch(err => console.log(`Service Worker Error: ${err}`));
    });
}


// Select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");


//Show today Date
const options = {weekday: "long", month:"short", day:"numeric"}
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US",options);


clear.addEventListener("click",function(event){
    localStorage.clear();
    location.reload();

});

//Custom Component implementation
const template = document.createElement('template');
template.innerHTML = `
<main class="container">
  <todo-list ref="list"></todo-list>
  <add-todo></add-todo>
</main>
`;


class Main extends HTMLElement {

    LIST ;
     id ;
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

    
    }
  connectedCallback() {
  
    this.refs = {
      form: this._shadowRoot.querySelector('add-todo'),
      list: this._shadowRoot.querySelector('todo-list'),
    }
    this.refs.form.props = {
      onSubmit: this.addTask.bind(this),
    }

    let data =  localStorage.getItem("TODO");

    if(data){
  
        this.LIST = JSON.parse(data);
        this.id = this.LIST.length;
      
      }else{
        this.LIST = [];
        this.id = 0;
      }
    
    this.refs.form.render();
    this.refs.list.render();
  }

  render() {
    this.dom.innerHTML = template;
  }

  addTask(task) {

    this.refs.list.addItem(task.text,this.id);

    this.LIST.push({
        name : task.text,
        id : this.id,
        done : false,
        trash : false
     });
     localStorage.setItem("TODO", JSON.stringify(this.LIST));
     this.id++;
   
  }
}

window.customElements.define('todo-application', Main);