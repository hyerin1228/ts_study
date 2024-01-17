"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("Hello TS")
// const nums: number[] = [];
// const a = 10 + nums[0]
// const someString = "typescript!";
// someString.endsWith("!")
// import{ printName } from "./util";
// printName("typescript");
const colors = ["red", "green", "blue"];
// const colors = ["red", "green", "blue"];
let mixedArray = [1, 'two', 3];
const person = {
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
function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
;
function logMessage(x) {
    if (typeof x === typeof String) {
        throw new Error(x);
    }
}
function errorThrower(x) {
    throw new Error(x);
}
// 유니언
let value = "hello";
const car1 = {
    drive() {
    },
};
const product1 = {
    serialNumber: "1111",
    color: "red"
};
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
