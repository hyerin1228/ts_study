export {}

/*
챕터 4-3 고급 타입 (advanced types)
*/

// 교차 타입 (intersection type)

type A = { name: string }
type B = { age: number }

type Person = A & B;

const person : Person = {
    name: 'John',
    age: 33
}

type UserBase = { id: number };
type WithName = { name: string };
type WithEmail = { email: string };
type WithAge = { age: number };

// 개별적인 타입을 결합해서 복잡한 타입을 만들 때,

type GuestUser = UserBase & WithName;
type User = UserBase & WithName & WithEmail & WithAge;

const guest: GuestUser = {
    id: 100,
    name: "Paul"
}

const user: User =  {
    id: 123,
    name: "Lee",
    age: 30,
    email: "test@email.com"
}


// 조건부 타입 (conditional type)

// condition ? true : false

// type ConditionalType = T extends U ? X : Y;

type IsNumber<T> = T extends number ? "Yes" : "No";

type Result1 = IsNumber<number> // "Yes"
type Result2 = IsNumber<string> // "No"

type JsonOrText<T extends "json" | "text"> = T extends "json" ? object : string;

type JsonResponse = JsonOrText<"json"> // object
type TextResponse = JsonOrText<"text"> // string


// keyof 타입 연산자

type MyObject = {
    a: number;
    b: string;
    c: boolean;
}

// MyObject 키를 union 타입으로 추출
type Keys = keyof MyObject; // "a" | "b" | "c"


function getProp<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

const obj = { x:10, y:20, z:15 };
const value = getProp(obj, "y"); // 20 반환




// mapped type (매핑 타입) -> 기존 타입을 새로운 타입으로 변환한다.

// type Mapped<T> = {
//     [P in keyof T]: T[P]
// }


type OptionalType<T> = {
    [P in keyof T]?: T[P]
}

type ReadonlyType<T> = {
    readonly [P in keyof T]: T[P]
}

type UserType = {
    id: number;
    name: string;
    age: number;
    email: string;
}

// UserType 의 모든 속성을 선택적으로 변환
type OptionalUserType = OptionalType<UserType>

// UserType 의 모든 속성을 읽기 전용으로 변환
type ReadonlyUserType = ReadonlyType<UserType>






// 예제 문제 풀이
/*
function getAllKeys<T extends object>(obj: T): Array<keyof T> {
    // 여기에 함수 구현을 작성하세요.
    // return Object.keys(obj);
    return Array<keyof obj>;
}

*/


interface User2 {
    name: string;
    age: number;
}

const user2: User2 = { name: "Alice", age: 30 };
const keys = Object.keys(user) as Array<keyof User>;


/*

개발자는 const keys를 사용할 때 실제 런타임 값(문자열 배열)과 타입스크립트의 타입 정보(Array<keyof T>) 두 가지를 모두 고려합니다.
런타임에서는 keys를 사용하여 객체의 속성을 다루는 실제 작업을 수행합니다.
타입스크립트의 타입 체크 과정에서는 keys의 타입 정보를 활용하여 코드의 안전성과 효율성을 높입니다.

*/