//Задание №1.1
var stroka1 = 'Задание №1.1';
var arr = stroka1.split("",stroka1.length);
var newArr = arr.slice(1);
var newStroka = arr[0].toUpperCase() + newArr.join("");
console.log(newStroka);

//Задание №1.2
var stroka12 = 'Задание №1.2';
var newStroka = stroka12[0].toUpperCase() + stroka12.substr(1);
console.log(newStroka);

//Задание №2
var str2 = '123456';
var arr = str2.split("",str2.length);
var newStroka = arr.reverse().join("");
console.log(newStroka);

//Задание №3
var str3 = 'https://www.nntu.ru/';
if (str3.slice(0, 8) == 'https://'){
    console.log('Начинается на https://');
}
else {
    console.log('Не начинется на https://');
}

//Задание №4
var str4 = 'https://www.nntu.ru/';
if (str4.substr(-5) == '.html'){
    console.log('Заканчивается на .html');
}
else {
    console.log('Не заканчивается на .html');
} 

//Задание №5
var arr = [];
var stroka="";

for(var i = 0; i< 5; i++){
    stroka += "x";
    arr.push(stroka);
}
console.log(arr);

//Задание №6
var arr = [];
var stroka="";

for(var i = 1; i < 5; i++) {
    for(var j = 1; j <= i; j++) {
      stroka += i;
    }
    arr.push(stroka);
    stroka = ""; 
}
console.log(arr);

//Задание №7
function arrayFill(a, b) {
    var arr = [];
    for(let i = 0; i < b; i++) {
      arr.push(a);
    }
    return arr;
  }
  console.log(arrayFill('x', 5));

//Задание №8
var arr = [1, 2, 3, 4, 3, 45, 2];
var a = 0;
for(var i = 0; i < arr.length; i++) {
  a += arr[i];
  if(a > 10) {
    console.log(i + 1);
    break;
  }
}

//Задание №9
arr = [1, 2, 3, 4, 5];
arr1 = [];
for(var i = arr.length - 1; i >= 0; i--) {
  arr1.push(arr[i]);
}
console.log(arr1);

//Задание №10
arr = [[1, 2, 3], [4, 5], [6]];
summa = 0;
for(var i = 0; i < arr.length; i++) {
  summa += arr[i].reduce(function(summa, item) {
    return summa + item;
  })
}

console.log(summa);

//Задание №11
arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
summa = 0;
for(var i = 0; i < arr.length; i++) {
  for(var j = 0; j < arr[i].length; j++) {
    summa += arr[i][j].reduce(function(summa, item) {
    return summa + item;
    })
  }
}
console.log(summa);

//Задание №12
function getDivisors(x) {    
    function check(x) {
    var newArr = [];
    for (var i = 1; i <= x; i++) {
        if (x % i ==0 ) {
        newArr.push(i);
        }
    }
    return newArr;
    }
    console.log(check(x));
}
getDivisors(76);

//Задание №13
var stroka = 'var_text_hello';
var b = stroka.split('_');
var newarr = [];
for (var i = 0; i < b.length; i++) {
    newarr.push(ucfirst(b[i]));
}
console.log(newarr.join(''));

function ucfirst(str) {
var a = str[0].toUpperCase() + str.substr(1);
return(a);
}

//Задание №14
function inArray(stroka, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == stroka) return true;
    }
    return false;
  }
   
  console.log(inArray('Аб', ['Ад', 'ДВ', 'Аб', 'дК']));
  
//Задание №15
var arr = [1,2,3,4,5];

elem(arr);

function elem(arr){
    console.log("Элемент массива - "+arr.shift());

    if (arr.length != 0){
    elem(arr);
    }
}

//Задание №16
var num = 56;
function Sum(num) {
    if (num == 0) return 0;
    return (num - 1) % 9 + 1;
}
console.log(Sum(num));

