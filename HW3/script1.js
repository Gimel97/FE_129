let i = 1;
while (i <= 50) {
    console.log(i);
    i++;
}
console.log("\n");

let z = 35;
while (z >= 8) {
    console.log(z);
    z--;
}
console.log("\n");

let q = 89;
while (q >= 11) {
    console.log(q);
    q--;
}
console.log("\n");

let sum = 0;
for(let w = 0; w <= 100; w++){
    sum += w;
}
console.log(sum);
console.log("\n");

for(let s = 1; s <= 5; s++){
    sum = 0;
    for(let d = 1; d <= s; d++){
        sum +=d;
    }
    console.log('sum' + s + '=' + sum);
}
console.log("\n");

for(let even = 8; even <= 56; even++){
    if (even % 2 == 0){
     console.log(even);
}
}
console.log("\n");


for (let j = 2; j < 10; j++){  
for (let h = 2; h < 10; h++){ 
    console.log(`${j} * ${h} = ${j * h}`);
}
}
console.log("\n");

let n = 1000;
let t = 0;
while (n > 50){
  n /= 2;
  t++;
}
    console.log(`number: ${n}`); 
    console.log(`iteration: ${t}`);
console.log("\n");

/*let summ = 0,
    count = 0;
while(1){
   let a = +prompt('Введите число');
   if (a === 0) break;
   if (isNaN(a)){
    alert('Введено не число');
    continue;
   }
    summ += a;
    count++;;
}
console.log(summ);
console.log(summ / count);
console.log("\n");*/

let b = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let min = Infinity;
let max = -Infinity;
let buff = 0;
for (let g = 0; g < b.length; g++){
  if (b[g] !== ' ') {
   buff += b[g];
  }else{
    if(+buff > max) max = +buff;
    if(+buff < min) min = +buff;
    buff = '';
  }
}
console.log(max, min);
console.log("\n");

let num = prompt('Введите число');
let len = num.length;
let s = 0;
rev = '';
for (let v = 0; v < num.length; v++){
    s += +num[v];
}
for (let v = len - 1; v >= 0; v--){
    rev += num[v];
}
console.log(`Вводимое число: ${num}, цифр в числе: ${len}, сумма: ${s}, обратный порядок: ${rev}`);







