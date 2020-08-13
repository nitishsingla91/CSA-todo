//Variables
let LIST =[], id =0;

// Select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

//Claasses names
const CHECK = "fa-check-circle";
const UNCHECK ="fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Show today Date
const options = {weekday: "long", month:"short", day:"numeric"}
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US",options);

//add to do function

function addToDo(toDo, id, done, trash){

    if(trash){ return; }
  
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";


    const item =   ` <li class="item">
    <i class="fa ${DONE} co" job="complete" id=${id}> </i>
    <p class="text ${LINE}">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id=${id}> </i>
    </li>
    `;
                

    const position = "beforeend";
    list.insertAdjacentHTML(position,item);
}

// add an item to the list
document.addEventListener("keyup",function(even){

    if(event.keyCode == 13){
       const toDo = input.value;

        if(toDo){
            addToDo(toDo, id, false, false);

            LIST.push({
               name : toDo,
               id : id,
               done : false,
               trash : false
            });

            id++;
        }
        input.value = "";
    }

});


// Complete To Do
function completeToDo(element){

    element.classList.toggle(CHECK);
    
    element.classList.toggle(UNCHECK);

    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;

}

//Remove To DO
function removeToDO(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

    LIST[element.id].trash = true;
}

// target the items created dynamically
list.addEventListener("click", function(event){
  const  element = event.target;

  const elementJob = element.attributes.job.value;

  if(elementJob == "complete"){
    completeToDo(element);
  }else if(elementJob == "delete"){
    removeToDO(element);
   }
});