//Задание №24
document.getElementById('elem').classList.add('www');
alert("Класс добавлен");


//Задание №25
var elem = document.getElementById('elem');
elem.classList.remove('www');
alert("Класс удалён");


//Задание №26
var elem = document.getElementById('elem');
alert("Наличие класса: " + elem.classList.contains('www'));


//Задание №27
var elem = document.getElementById('elem');
elem.classList.toggle('www');
alert("Удаление или добовление класса: " + "наличие класса www: " + elem.classList.contains('www'));


//Задание №28
var elem = document.getElementById('elem');
elem.classList.add('Fd');
elem.classList.add('Rt');
elem.classList.add('MJ');
elem.classList.add('Lk');
var elem = document.getElementById('elem');
alert("Колличество его классов: " + elem.classList.length);


//Задание №29
var elem = document.getElementById('elem');
for (var i = 0; i < elem.classList.length; i++){
    alert(elem.classList[i]);
}


//Задание №30
elem.style.cssText = 'height:30px; background-color:red; border:5px double #000000;'


//Задание №31-32
var elem = document.getElementById('elem');
function name(){
    alert("В верхнем регистре: " + elem.tagName);
    alert("В нижнем регистре: " + elem.tagName.toLowerCase());
}
