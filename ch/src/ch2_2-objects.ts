export {}

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
}


// Optional 프로퍼티 - 객체내에서 필수가 아닌 프로퍼티
// let user: { id: string; name: string; age?: number };

// user = {
//     id: "1234",
//     name: "John"
// }


// Readonly 프로퍼티 - 읽기전용 프로퍼티 , 대체로 환경설정 객체에 사용됨.

// 리드온리나 옵셔널(?) 을 많이 쓰면 가독성이 떨어져서 타입별칭을 쓴다고 하는데... 무슨 말인지 잘 모르겠다
// 타입 별칭 ( Type Alias )
// 프로퍼티나 옵셔널 리드온리 등을 사용할때 한 곳에서만 관리를 해주기때문에 편리함이 있다. -> 이 타입별칭을 사용하는 모든 객체에 적용
type UserType = {
    id: string;
    name: string;
    age: number; // age?: number;
}

let user1: UserType = {
    id: "1",
    name: "John",
    age: 20
}

let user2: UserType = {
    id: "2",
    name: "Sarah",
    age: 30
}

// 배열을 타입할때 간결하게 사용이 가능하다.
// 이 유저스라는 배열은 유저타입으로 구성된 배열이다.
let users: UserType[];


users.push(user1)
users.push(user2)


/*
// 유저타입에 맞지 않는 데이터는 넣을 수 없다.
users.push({});
users.push({
    id: "1"
})
*/

// Nested 객체 (중첩 객체) - 객체안에 객체가 있다., API 요청/응답 JSON 많이 사용됨, 
// 해당 객체의 형태와 구조를 바탕으로 타입 명시


// 단일레벨 -> 1레벨이 중첩되었다.- user: (아래 type별칭(?))
type Payload = {
    timestamp: number;
    type: string;
    user: {
        id: string;
        isActive: boolean;
        email: string[]
    }
}



const payLoad: Payload = {
    timestamp: 12345678,
    type: 'event',
    user: { 
        id: "123",
        isActive: true,
        email: [ "test@gmail.com", "test2@gmail.com" ]
    }
}
