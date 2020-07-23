var closeBtn = document.querySelector(".closebtn");

export function closing(){
    closeBtn.addEventListener("click", function(event){
        event.preventDefault();
        overlay.style.height ="0" ;
    });
}