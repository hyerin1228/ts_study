"use strict";
/*
챕터 2-5 인터페이스
*/
const testUser = {
    id: 100,
    name: "Nathan",
    isPremium: false,
    greet() {
        console.log("Hello");
    }
};
testUser.greet();
const personA = {
    name: "Eli",
    age: 30
};
const studentA = {
    name: "John",
    age: 29,
    studentId: 12345,
    employeeId: 11111
};
/*
let obj: Student = {
    name: "hhr",
    age: 32,
    studentId: 2,
}


console.log(obj)
*/
