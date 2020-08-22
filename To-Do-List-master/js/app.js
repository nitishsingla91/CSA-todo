import './components/main.component.js';

// make sure sw are supported
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

const app = document.createElement('todo-application');
document.querySelector('.appid').appendChild(app);