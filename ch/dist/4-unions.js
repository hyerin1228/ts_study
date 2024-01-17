"use strict";
/*
챕터 2-4 유니언 타입
*/
// 유니언 기초
let userId;
userId = 1;
userId = "100";
// userId = true
// userId = {}
function printUserId(id) {
    console.log(id);
}
// printUserId("1")
// printUserId(1)
// printUserId({})
// type narrowing
function processValue(value) {
    // 문자열 경우
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    // 숫자의 경우
    return value.toString().toUpperCase();
}
// 배열 사용 예시
let mixedValues = [];
mixedValues.push("100");
mixedValues.push(100);
// mixedValues.push([])
// 리터럴과 유니언 타입
// let id: "1" ;
// id = "1";
const toggle = (option) => {
    console.log(option);
};
let tShirtSize;
tShirtSize = "m";
function setSize(size) {
    switch (size) {
        case "xs":
            // xs 처리
            break;
        case "s":
        // s 처리
        //....
    }
}
let responseCode;
responseCode = 200;
responseCode = 503;
// responseCode = 403
