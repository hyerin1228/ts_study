"use strict";
// 문자열 (string
const a = '';
const b = "";
const c = ``; // 템플릿 리터럴
let myName = "Steve";
let message = `Hello, ${myName}`;
myName.toLocaleUpperCase();
//message = 123
// 숫자 타입 (number)
let n = 100;
// n = "100"
// n.toUpperCase();
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
// 특수 값(?)
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotNumber = NaN; // NaN Not a Number
// 불리언 (boolean)
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("hello we are open!");
}
if (isCompleted) {
    console.log("job not complete");
}
// && || !
let isAvailable = isOpen && !isCompleted;
// null 널 타입
let user = null; // 유니온타입(?)
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("Joey");
logout();
// any 타입 - 되도록이면 사용하지 말아라...(최소화)
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
