let a1=5 % 3;
console.log(a1, typeof a1);

let a2=3 % 5;
console.log(a2, typeof a2);

let a3=5 + '3';
console.log(a3, typeof a3);

let a4='5' - 3;
console.log(a4, typeof a4);

let a5=75 + 'кг';
console.log(a5, typeof a5);

let a6=785 * 653;
console.log(a6, typeof a6);

let a7=100 / 25;
console.log(a7, typeof a7);

let a8=0 * 0;
console.log(a8, typeof a8);

let a9=0 / 2;
console.log(a9, typeof a9);

let a10=89 / 0;
console.log(a10, typeof a10);

let a11=98 + 2;
console.log(a11, typeof a11);

let a12=5 - 98;
console.log(a12, typeof a12);

let a13=(8 + 56 * 4) / 5;
console.log(a13, typeof a13);

let a14=(9 - 12) * 7 / (5 + 2);
console.log(a14, typeof a14);

let a15=+"123";
console.log(a15, typeof a15);

let a16=1 || 0;
console.log(a16, typeof a16);

let a17=false || true;
console.log(a17, typeof a17);

let a18=true > 0;
console.log(a18, typeof a18);
console.log("\n");

let height=23,
    width=10,
    SPryam=height * width;
console.log(SPryam, typeof SPryam);
console.log("\n");

let h=10,
    diameter=a7,
    VCilindra=diameter * h;
console.log(VCilindra, typeof VCilindra);
console.log("\n");

let r=5,
    SKruga=r * r * Math.PI;
console.log(SKruga, typeof SKruga);
console.log("\n");

let A=5,
    B=7,
    STrap=(A + B) / 2 * h;
console.log(STrap, typeof STrap);
console.log("\n");

let S=2,
    p=S * 10 / 100,
    years=5,
    Pereplata=p * years;
console.log(Pereplata, typeof Pereplata);
console.log("\n");

let a=8,
    b=3;
//a + 2(x - b) = 16;
//2(x - b) = 16 - a;
//2x - b2 = 16 - a;
//2x = 16 - a + b2;
//x = (16 - a + b2) / 2
{
let x = (16 - a + b * 2) / 2;
console.log(x);
console.log(a + 2 * (x - b));
console.log("\n");
}

//b(x+15)=a+6x;
//b * x + b * 15 = a + 6 * x;
//b * x + b * 15 - 6 * x = a;
//x * (b - 6) + b * 15 = a;
//x = (a - b * 15) / (b - 6);
{
let x = (a - b * 15) / (b - 6);
console.log(x);
console.log(b * (x + 15) === a + 6 * x);
console.log("\n");
}

//x + 2 * x + a * x + b * x = 23780;
//x * (1 + 2 + a + b) = 23780;
//x = 23780 / (1 + 2 + a + b);
{
    let x = 23780 / (1 + 2 + a + b);
    console.log(x);
    console.log(x + 2 * x + a * x + b * x);
    console.log("\n"); 
}
