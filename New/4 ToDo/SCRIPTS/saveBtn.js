var saveBtn = document.querySelector(".save");

export function saving(){
    saveBtn.addEventListener('click', function(){
        localStorage.setItem('todoList',ul.innerHTML);
    })
}