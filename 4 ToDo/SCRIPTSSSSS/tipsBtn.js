var overlay = document.getElementById("overlay");
var tipsBtn = document.querySelector(".tipBtn");

export function tipsing(){
    tipsBtn.addEventListener("click", function(){
        overlay.style.height ="100%" ;
    });
}