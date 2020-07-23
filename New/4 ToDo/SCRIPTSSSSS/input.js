var input = document.querySelector("input[type='text']");

export function inputing(){
    input.addEventListener("keypress",  function (key){
        if(key.which ===13){
            var li = document.createElement("li");
            var spanElement = document.createElement("span");
            var icon = document.createElement("i");
            
            var newTodo = this.value;
            this.value="";

            icon.classList.add('fas', 'fa-trash-alt');
            spanElement.append(icon);
            ul.appendChild(li).append(spanElement, newTodo) ;

            deleteTodo()
        }
    });
}