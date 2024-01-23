"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: 'John',
    age: 33
};
const guest = {
    id: 100,
    name: "Paul"
};
const user = {
    id: 123,
    name: "Lee",
    age: 30,
    email: "test@email.com"
};
function getProp(obj, key) {
    return obj[key];
}
const obj = { x: 10, y: 20, z: 15 };
const value = getProp(obj, "y"); // 20 반환
const user2 = { name: "Alice", age: 30 };
const keys = Object.keys(user);
/*

개발자는 const keys를 사용할 때 실제 런타임 값(문자열 배열)과 타입스크립트의 타입 정보(Array<keyof T>) 두 가지를 모두 고려합니다.
런타임에서는 keys를 사용하여 객체의 속성을 다루는 실제 작업을 수행합니다.
타입스크립트의 타입 체크 과정에서는 keys의 타입 정보를 활용하여 코드의 안전성과 효율성을 높입니다.

*/ 
