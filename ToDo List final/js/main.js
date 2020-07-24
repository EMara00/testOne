var addButton = document.getElementById('addButton');
var addInput = document.getElementById('itemInput');
var todoList = document.getElementById('todoList');
var listArray = [];
//объявить функцию addToList

import { keypress, ul_checked, pencil_show_hide, save_todo, clear_todo, tips, close, fun } from "./clickers.js";
import { cat_facts } from "./cat_facts.js";

// Document ready
$(document).ready(() => {
  var spans = document.getElementsByTagName("span");
  var ul = document.querySelector("ul");
  var ul_cat_facts = document.querySelector('.cat-facts');

  // Initialize event listeners
  keypress(deleteTodo);
  ul_checked();
  pencil_show_hide();
  save_todo();
  clear_todo();
  tips();
  close();
  fun();

  // Load cat facts data
  cat_facts("https://cat-fact.herokuapp.com/facts/random?animal_type&amount=3")
    .done(data => {
      console.log(data);
      setFactsData(data);
    })
    .fail(err => {
      console.log(err);
    })

  function setFactsData(cat_facts) {
    cat_facts.map(elem => {
      let li = document.createElement('li');
      li.innerText = elem.text;
      ul_cat_facts.append(li);
    })
    console.log(ul_cat_facts);
  }

  // Delete todo if delete span clicked
  function deleteTodo() {
    for (let span of spans) {
      span.addEventListener("click", function () {
        console.log(span.parentElement);
        span.parentElement.remove();
      });
    }
  }

  function loadTodos() {
    if (localStorage.getItem("todoList")) {
      ul.innerHTML = localStorage.getItem("todoList");
    }
  }

  deleteTodo();
  loadTodos();
});



function listItemObj(content, status) {
    this.content = '';
    this.status = 'incomplete';
}
var changeToComp = function(){
    var parent = this.parentElement;
    console.log('Changed to complete');
    parent.className = 'uncompleted well';
    this.innerText = 'Incomplete';
    this.removeEventListener('click',changeToComp);
    this.addEventListener('click',changeToInComp);
    changeListArray(parent.firstChild.innerText,'complete');

}
var changeToInComp = function(){
    var parent = this.parentElement;
    console.log('Changed to incomplete');
    parent.className = 'completed well';
    this.innerText = 'Complete';
    this.removeEventListener('click',changeToInComp);
    this.addEventListener('click',changeToComp);
    changeListArray(parent.firstChild.innerText,'incomplete');

}

var removeItem = function(){
    var parent = this.parentElement.parentElement;
    parent.removeChild(this.parentElement);

    var data = this.parentElement.firstChild.innerText;
    for(var i=0; i < listArray.length; i++){

        if(listArray[i].content == data){
            listArray.splice(i,1);
            refreshLocal();
            break;
        }
    }


}

//функция для изменения массива списка дел
var changeListArray = function(data,status){

    for(var i=0; i < listArray.length; i++){

        if(listArray[i].content == data){
            listArray[i].status = status;
            refreshLocal();
            break;
        }
    }
}

//функция для изменения списка todo list
var createItemDom = function(text,status){

    var listItem = document.createElement('li');
    var itemLabel = document.createElement('label');
    var itemCompBtn = document.createElement('button');
    var itemIncompBtn = document.createElement('button');
    listItem.className = (status == 'incomplete')?'completed well':'uncompleted well';
    itemLabel.innerText = text;
    itemCompBtn.className = 'btn btn-success';
    itemCompBtn.innerText = (status == 'incomplete')?'Complete':'Incomplete';
    if(status == 'incomplete'){
        itemCompBtn.addEventListener('click',changeToComp);
    }else{
        itemCompBtn.addEventListener('click',changeToInComp);
    }
    itemIncompBtn.className = 'btn btn-danger';
    itemIncompBtn.innerText = 'Delete';
    itemIncompBtn.addEventListener('click',removeItem);
    listItem.appendChild(itemLabel);
    listItem.appendChild(itemCompBtn);
    listItem.appendChild(itemIncompBtn);
    return listItem;
}

var refreshLocal = function(){
    var todos = listArray;
    localStorage.removeItem('todoList');
    localStorage.setItem('todoList', JSON.stringify(todos));
}

var addToList = function(){
    var newItem = new listItemObj();
    newItem.content = addInput.value;
    listArray.push(newItem);
    //добавить в локальное хранилище
    refreshLocal();
    //менять 
    var item = createItemDom(addInput.value,'incomplete');
    todoList.appendChild(item);
    addInput.value = '';
}

//функция, чтобы очистить список todo
var clearList = function(){
    listArray = [];
    localStorage.removeItem('todoList');
    todoList.innerHTML = '';

}

window.onload = function(){
    var list = localStorage.getItem('todoList');

    if (list != null) {
        todos = JSON.parse(list);
        listArray = todos;

        for(var i=0; i<listArray.length;i++){
            var data = listArray[i].content;

            var item = createItemDom(data,listArray[i].status);
            todoList.appendChild(item);
        }

    }

};

//добавить связующее событие к кнопке
addButton.addEventListener('click',addToList);
clearButton.addEventListener('click',clearList);