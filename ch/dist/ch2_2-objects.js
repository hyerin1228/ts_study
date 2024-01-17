"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 기본 객체 타입
// {
//     property_name: property_type
// }
/*

• 객체의 형태/구조를 보장하고 예측
• 예상치 못한 값이 들어가는 것을 방지

- 객체의 Property 타입
    - optional
    - readonly

- 타입 별칭 (Type Alias)

*/
// let monitor: { brand: string; price: number }
// // monitor.brand = "LG"
// // monitor.price = 120
// monitor = {
//     brand: "LG", 
//     price: 120
// }
let monitor = {
    brand: "LG",
    price: 120
};
let user1 = {
    id: "1",
    name: "John",
    age: 20
};
let user2 = {
    id: "2",
    name: "Sarah",
    age: 30
};
// 배열을 타입할때 간결하게 사용이 가능하다.
// 이 유저스라는 배열은 유저타입으로 구성된 배열이다.
let users;
users.push(user1);
users.push(user2);
const payLoad = {
    timestamp: 12345678,
    type: 'event',
    user: {
        id: "123",
        isActive: true,
        email: ["test@gmail.com", "test2@gmail.com"]
    }
};
