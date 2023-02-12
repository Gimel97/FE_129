console.log('aaa@bbb@ccc'.replace(/@/g, '!'));

/*let date = new Date('2025-12-31');
let opt = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
}
console.log(date.toLocaleString('ru', opt));*/

let str = 'Я учу javascript!';
console.log(str.substr(2, 14));
console.log(str.substring(2, 16));
console.log(str.slice(2, 16));

let arr = [4, 2, 5, 19, 13, 0, 10];
let summ = 0;
for(let i = 0; i < arr.length; i++){
    summ += Math.pow(arr[i], 3);
}
console.log(Math.sqrt(summ));

let a = 3,
    b = 5,
    c = Math.abs(a - b);
console.log(c);

let dateNow = new Date();
function zero(num){
    if (num > 0 && num < 10){
        return '0' + num;
    }else{
        return num;
    }
}
console.log(dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds() + ' ' + dateNow.getDate() + '.' + zero(dateNow.getMonth()) + '.' + dateNow.getFullYear());



