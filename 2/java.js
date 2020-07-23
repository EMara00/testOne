//Задание №21
function func() {
    var elem = document.getElementsByClassName('zzz');
    for (var i=0; i < elem.length; i++) {
        elem[i].innerHTML = i + 1;
    }
}


//Задание №22
var date = new Date();
alert(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());


//Задание №23
var months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
var date = new Date();
var month = date.getMonth();
alert(months[month]);


