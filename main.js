/*//Задание 1 
let userName = prompt ("Как вас зовут?");
alert ("Привет, " + userName);
//Задание 2
let userDate = +prompt ("Введите год рождения");
const Thisyear = 2021
let a = Thisyear-userDate;
alert ("Ваш возраст " + a);
//Задание 3
let b = +prompt ("Введите длину стороны квадрата");
let P = b*4;
alert ("Периметр квадрата равен " + P);*/
/*//Задание 4
let r = +prompt ("Введите радиус окружности");
const p = 3.14;
let S = p*(r**2);
alert ("Площадь окружности равна" + S);*/
/*//Задагие 5
let S = +prompt ("Введите расстояние между двумя городами, в км");
let t = +prompt ("Введите время, в ч");
let u = S/t;
alert ("Необходимая скорость равна " + u);*/
/*//Задание 6
let money = +prompt ("Введите сумму в долларах");
const exchange = money*0.84;
alert ("Сумма в евро составляет " + exchange);*/
/*//Задание 7
let gb = +prompt ("Введите объем памяти в гб");
const mg = gb*1000;
let file = mg/820;
alert ("Количество файлов на флешке равно " + file);*/
/*//Задание 8
let money = +prompt ("Введите сумму");
let chocolate = +prompt ("Введите стоимость одной шоколадки");
let result = money/chocolate;
let back = money-result*chocolate;
alert ("Количество шоколадок равно " + result);
alert ("Ваша сдача равна " + back);*/
/*//Задание 9
let number = +prompt ("Введите трехзначное число");
let a = number%100;
let z = a%10;
let b = (a-(a%10))/10;
let c = (number-a)/100;
let d = z*100+b*10+c;
alert (d);*/
//Задание 10
let num = +prompt ("Введите целое число");
let f = (num%2 ===0 &&alert("Число четное"))||(num%2 !==0&&alert ("Число нечетное"));