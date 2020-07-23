var pencil = document.querySelector("#pencil");

export function penciling(){
    pencil.addEventListener("click",  function(){
        input.classList.toggle("display");
    });
}