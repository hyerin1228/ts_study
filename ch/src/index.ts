export {}

// console.log("Hello TS")

// const nums: number[] = [];

// const a = 10 + nums[0]


// const someString = "typescript!";

// someString.endsWith("!")

// import{ printName } from "./util";
// printName("typescript");


const colors: string[] = ["red", "green", "blue"];

// const colors = ["red", "green", "blue"];


let mixedArray: (number |string)[] = [1, 'two', 3];

// const person = {
//     name: "Byul",
//     age: 30
//   };

type Person = { 
    name: string;
    age: number;
};

const person: Person = {
    name: "Byul",
    age: 30
};


// type Book = {
//     title: string;
//     author: string;
//     yearPublished: number;
//     enum: [string, string, number];
// };

// type Book = {
//     title: string;
//     author: string;
//     yearPublished: number;
//     enum: enum;
// };

// type Number = {
//     firstNumber: 1;
//     secondNumber: 2;
// };





function add(x: number, y: number): number {
    return x + y;
  }

  function multiply(x: number, y: number): number {
    return x * y;
  };


function logMessage(x: string) {
    if(typeof x === typeof String){
        throw new Error(x);
    }
}

function errorThrower(x: string): never {
    throw new Error(x);
  }

  // 유니언

  let value: number|string|boolean = "hello";
// 가능한 타입: number, string, boolean



// 문제: 인터페이스 Car를 만들고 drive 메서드를 포함하세요. drive 메서드는 반환 타입이 없습니다(void). 또한, Car 인터페이스를 만족하는 객체를 생성하세요.

interface Car{
  drive(): void;
}

const car1: Car = {
  drive() {
 },
}


// interface Product{
//   name: string;
//   price?: number;
// }


interface Product{
  readonly serialNumber: string;
  color: string;
}

const product1: Product = {
  serialNumber: "1111",
  color: "red"
}



enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

