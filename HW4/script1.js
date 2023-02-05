let i = 0;
for(let i = 1; i <=5; i++){
   console.log(i);
}
console.log("\n");

let num = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let k = 0; k <= num.length; k++){
    if((num[k] < 0 && num[k] > -10) || (num[k] < 0 && num[k] < -3)) console.log(num[k]);
}
console.log("\n");

let arrW = [];
let n = 22;
while(n < 57){
    n++;
    arrW.push(n);
}
console.log(arrW);

let arr = [];
let result = 0;
for(let m = 23; m <= 57; m++){
    arr.push(m);
    result += m;
}
console.log(arr); 
console.log(result);
console.log("\n");

let str = ['10', '20', '30', '50', '235', '3000'];
for(let a = 0; a < str.length; a++){
    if(String(str[a])[0] == '1' || String(str[a])[0] == '2' || String(str[a])[0] == '5'){
        console.log(str[a]);
    }
}
console.log("\n");

let days = [' Понедельник', ' Вторник', ' Среда', ' Четверг', ' Пятница', ' Суббота', ' Воскресенье'];
    for (let p = 0; p < days.length; p++) {
        if (days[p] == ' Суббота' || days[p] == ' Воскресенье') {
            document.write('<strong>' + days[p] + '</strong>');
        } else {
            document.write(days[p] + ' ');
        }
    }


let month = ['Январь', 'Февраль', 'Март'];
console.log(month);

month[month.length] = 'Апрель';
console.log(month);
console.log("\n");

let h = [];
while (1){
    let g = +prompt('Введите число');
    h.push(g);
    if (g === 0) break;
    if (isNaN(g)){
        alert('Введено не число');
        continue;
    }
}
console.log(h);
h.sort(function(a, b){
    return a - b;
});
console.log(h);
console.log("\n");

let rev = [12, false, 'Текст', 4, 2, -5, 0];
rev.reverse();
console.log(rev);
console.log("\n");

let t = [5, 9, 21, , , 9, 78, , , , 6];
let zero = 0;
for(f = 0; f < t.length; f++){
    zero += (t[f] === undefined); 
}
console.log(zero); 
console.log("\n");
















