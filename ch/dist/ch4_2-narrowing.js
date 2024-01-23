"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
let id = 1;
if (typeof id === 'string') {
    // 문자열 ID 경우 로직 처리
}
function getId(id) {
    if (typeof id === 'number') {
        return id;
    }
    return Number(id);
}
getId(1);
getId("1");
function power(option) {
    if (option === "off") {
        console.log("power off");
    }
    else {
        console.log("power on");
    }
}
function sendMessage(os) {
    if ("iMessage" in os) {
        os.iMessage(); // iOS로 좁혀진다
    }
    else {
        os.message(); // android 케이스
    }
}
sendMessage({ iMessage: () => { console.log("sending iMessage"); } }); //
sendMessage({ message: () => { console.log("sending message"); } }); //
// instanceof narrowing
// let myObject = new myObject();
// if
class ApiResponse {
}
class ErrorResponse {
}
function handleApiResponse(response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (response instanceof ApiResponse) {
            // 데이터 처리
        }
        else if (response instanceof ErrorResponse) {
            // 에러 처리
        }
    });
}
const apiResponse = new ApiResponse();
const errorResponse = new ErrorResponse();
handleApiResponse(apiResponse);
handleApiResponse(errorResponse);
// 타입 가드(type predicates) - 사용자 정의
// function 이름 : something is SomeType
function isErrorResponse(response) {
    return response.message !== undefined;
}
const response = { message: "error.." };
if (isErrorResponse(response)) {
    // 에러 케이스
    console.log(response.message);
}
function handleResponse(response) {
    if (response.type === "success") {
        console.log('data:', response.data);
    }
    else {
        console.log(response.message);
    }
}
// test
const user = {
    name: "Bob",
    age: 28,
    isAdmin: true
};
const keys = Object.keys(user);
const stringKeys = keys.filter(key => typeof user[key] === "string");
console.log(stringKeys); // ["name"]
