var clearBtn = document.querySelector(".clear");

export function clearing(){
    clearBtn.addEventListener('click',function(){
        ul.innerHTML="";
    });
}