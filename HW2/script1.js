let name = prompt('Меня зовут', 'Имя');
console.log(name);
let age = prompt('Мне лет', 'Возраст');
let year = 2023;
document.write(name + ' родился в ' + (year - age)  + " году.");
console.log(age);
let city = prompt('Я проживаю в городе', 'Город');
console.log(city);
let company = prompt('и работаю в компании', 'Компания');
console.log(company);
let phone = prompt('Мои контактные данные:', 'Телефон');
console.log(phone);
let email = prompt('Мои контактные данные:', 'Почта');
console.log(email);

let str = prompt('Введите 6 цифр');
let num = ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) ? 'да' : 'нет';
console.log(num);

let test = prompt('Введите 1, 0 или -3');
if (test > 0){
    console.log('Верно');
} else{
    console.log('Неверно');
}

let a = 10,
    b = 2,
    sum = a + b,
    dif = a - b,
    mult = a * b,
    share = a / b;
console.log(sum);
console.log(dif);
console.log(mult);
console.log(share);
if (sum > 1) console.log(sum * sum);
if (a > 2 && a < 11 || b >= 6 && b < 14){
    console.log('Верно');
} else {
    console.log('Неверно');
}

let n = prompt('Введите число от 0 до 59');
if ((n >= 0) && (n <= 14)) {
    console.log(1);
}
if ((n >= 15) && (n <= 30)) {
    console.log(2);
}
if ((n >= 31) && (n <= 45)) {
    console.log(3);
}
if ((n >= 46) && (n<= 59)) {
    console.log(4);
}

let day = prompt('Введите число от 1 до 31');
if ((n > 0) && (n <= 10)) {
    console.log(1);
}
if ((n >= 11) && (n <= 20)) {
    console.log(2);
}
if ((n >= 21) && (n <= 31)) {
    console.log(3);
}

let days = 180,
    years = days / 365,
    month = days / 31,
    week = days / 7,
    hour = days * 24,
    minutes = hour * 60,
    seconds = minutes * 60;
console.log(days),
console.log(years),
console.log(month),
console.log(week),
console.log(hour),
console.log(minutes),
console.log(seconds);
if (days < 365) {
    console.log('Меньше года');
} else {
    console.log('Больше года');
}
if (days < 31) {
    console.log('Меньше месяца');
} else {
    console.log('Больше месяца');
}
if (days < 7) {
    console.log('Меньше недели');
} else {
    console.log('Больше недели');
}


if (days >= 1 && days <= 31){
    console.log(1);
}
if (days >= 32 && days <= 59){
    console.log(2);
}
if (days >= 60 && days <= 90){
    console.log(3);
}
if (days >= 90 && days <= 120){
    console.log(4);
}
if (days >= 121 && days <= 151){
    console.log(5);
}
if (days >= 152 && days <= 181){
    console.log(6);
}
if (days >= 182 && days <= 212){
    console.log(7);
}
if (days >= 213 && days <= 243){
    console.log(8);
}
if (days >= 244 && days <= 273){
    console.log(9);
}
if (days >= 274 && days <= 304){
    console.log(10);
}
if (days >= 305 && days <= 334){
    console.log(11);
}
if (days >= 335 && days <= 365){
    console.log(12);
}

switch(true){
    case days <= 90:
        console.log('Зима');
    break;
    case days <= 180:
        console.log('Весна');
    break;
    case days <= 270:
        console.log('Лето');
    break;
    case days <= 365:
        console.log('Осень');
    break;
}

















