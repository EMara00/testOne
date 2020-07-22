var ul = document.querySelector("ul");

export function uling(){
ul.addEventListener("click", function(e){
    if (e.target.tagName === 'LI'){
    e.target.classList.toggle('checked');
    }
})
}