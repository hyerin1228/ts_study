"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
챕터 3-4 Generics 제네릭
*/
// <타입> / <T>
// 기초 문법
// function genericFunction<T>(arg: T): T {
//     return arg;
// }
// interface GenericInterface<T> {}
// class GenericClass<T>{}
// Array<number>
let numbers = [1, 2, 3, 4, 5];
let numbers2 = [];
let strings = ["1", "2", "3", "4", "5"];
// document.querySelector();
let div = document.querySelector("#myDiv1");
let button = document.querySelector("#myButton1");
// 뭐 타입 단언하고 비슷한 건가?
// 명시적으로 제네릭 타입을 지정해준 거라고 생각할 수 있나?
// 개발자가 컴파일러에게 타입에 대한 정보를 주는 거라고 생각이 드는데. 일단 그렇다고 가정하고 만드는 것인듯?
button === null || button === void 0 ? void 0 : button.click();
// 
/*
function getFirstElement(arr: number[]){
    if(!arr.length){
        return undefined;
    }
    return arr[0];
}

//
function getFirstStringElement(arr: string[]){
    if(!arr.length){
        return undefined;
    }
    return arr[0];
}
*/
// 코드의 중복을 최소화 하기 위해서인가?
// 제네릭 함수
function getFirstElement(arr) {
    if (!arr.length) {
        return undefined;
    }
    return arr[0];
}
// 제네릭 함수에서 반환 타입이 지정되지 않았으나.. 타입추론에 의해 number로 확인되는 것으 ㄹ볼 수 있음
const firstNumber = getFirstElement(numbers);
const firstNumber2 = getFirstElement(numbers2);
const firstString = getFirstElement(strings);
// interface strDict {
//     [key: string]: string
// }
let strObj = {
    name: "Elliot"
};
// interface numDict {
//     [key: string]: number
// }
let numObj = {
    age: 30
};
let entry = {
    key: "age",
    value: 30
};
let entry2 = {
    key: 1,
    value: ["red", "green", "blue"]
};
