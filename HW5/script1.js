function rezult (a, b, c){
    let calcul = (a - b) / c;  
    console.log(calcul);
    }
rezult(5, 2, 2);

function ret (d){
    let rez1 = d ** 3; 
    let rez2 = d ** 2;  
    console.log(rez1);
    console.log(rez2);
    }
ret(2);

function Min(a, b){
    if (a < b){
        return a;
    }else{
        return b;
    }
}
console.log((Min(115, 6)));
function Max(a, b){
    if (a > b){
        return a;
    }else{
        return b;
    }
}
console.log(Max(2, 59));

function makeArray (a, b){
    let array = [];
    for (let i = a; i < b; i++){
        array.push(i);
    }
    return array;
}
function printArr (arr){
    for (let el of arr){
        console.log(el);
    }
}

//printArr (makeArray(+prompt('a'), +prompt('b')));

function isEven(n){
    if (n % 2 == 0){
       return true;
    }else{
        return false;
    } 
}
console.log(isEven(2)); 

function num(){
   let newArray = [];
for (f = 0; f <= arrs.length; f++){
    if (isEven(arrs[f])){
        newArray.push(arrs[f]);
    }
}
console.log(newArray);
}
let arrs = [1, 2, 8, 5, 7, 12, 15];
num(); 

function pyramid(len){
    let marker = '';
    if (arguments.length > 1){
        if (arguments[1] !== ' ' && String(arguments[1]).length === 1){
            marker = arguments[1];
        }
    }
    for (let t = 1; t < len + 1; t++){
        for (let p = 0; p < t; p++){
            document.write(marker ? marker : t);
        }
        document.write('<br/>');
    }
}
//pyramid(6);

function fib(k){
    return k < 3 ? 1 : fib (k - 1) + fib (k - 2);
}
console.log(fib(6));

function summ (nums){
    let sum = 0;
    nums += '';
    for (let n of nums){
        sum += +n;
    }
    if (sum < 10) return sum;
    return summ(sum);
}
console.log(summ(565));











