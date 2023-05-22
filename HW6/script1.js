console.log('aaa@bbb@ccc'.replace(/@/g, '!'));

/*let date = '2025-12-31';
//date = date.replace('-', '/');
let regDate = /([0-9]{4})-(\d{2})-(\d{2})/g;
let date2 = date.replace(regDate, '$3/$2/$1');
console.log(date2);*/

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

const replaceString = function (str){
    let regExp = /ab+a/g;
    return str.match (regExp);
}

const number = function(phone){
    let reg = /^\+375\((25|29|33|44)\)\d{3}-\d{2}-\d{2}$/;
    return reg.test(phone);
}

function mail(email){
    let regMail = /^[a-zA-Z0-9-_\.]{2,}@[a-z0-9\.]{2,11}\.[a-z]{2,11}$/g;
    return regMail.test(email);
}

const addres = function(url){
    let reg = /(https?:\/\/[0-9]?[a-z][a-z0-9]+(?:\.?[0-9a-z]+)+\.[a-z]{2,11})(\/.+\/(?:[^\?\s]+))?(\?[^#]+)?(#\w+)?/g
    let groups = reg.exec(url);
    console.log([...groups]);
    return [...groups].filter(function(elem, index){
        return index !== 0 ? elem : null;
    });

}


