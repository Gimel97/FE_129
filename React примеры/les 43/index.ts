let num: number = 46;

type TestType = {
    name: string,
    age: number,
}

type MyType = number | null | undefined | TestType;

let arr: (string | number)[] = ['ffsf', 'sfdsf', 'gsdg', 5354];
let arr_2: Array<MyType | Array<string>> = [1, 2, 3, 4, null, ['']];

interface User {
    name: string,
    age: number,
    course?: number,
    checkUser(): string,
}

// const user: User = {
//     name: 'Alex',
//     age: 28,
//     course: '23'
// }

class Student implements User{
    name: string;
    age: number;
    readonly group: string;
    course: number;

    constructor(name, age, group, course){
        this.name = name;
        this.age = age;
        this.group = group;
        this.course = course;
    }

    checkUser(): string {
        return `${this.name}, ${this.age}`;
    }
}

function f1(a: number, b: number | string): number{
    return a + +b;
}

console.log(f1(1, 2));

type T = {
    name: string
}

// interface UserType<T> = {
//     user: T,
//     age: number,
// }

// let user: UserType = {
//     user: {
//         name: 'Alex'
//     },
//     age: 22
// }

let text: HTMLParagraphElement = document.querySelector('.text');
let color: null | HTMLInputElement = document.querySelector('#color');

function changeColor (elem: HTMLParagraphElement){
    let c = color?.value;
    elem.style.color = c;
}

color.addEventListener('change', () => changeColor(text));

// enum Season {
//     Winter,
//     Spring,
//     Summer,
//     Autum
// }

// let current = Season.Spring;
// let current = Season[2]
// console.log(current);
enum Season {
    Winter = 'Зима',
    Spring = 'Весна', 
    Summer = 'Лето',
    Autum = 'Осень'
}

// let season = {
//     winter: 'Зима'
// }

let current = Season.Summer;
console.log(current);



