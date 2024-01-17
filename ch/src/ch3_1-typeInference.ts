export {}

/*
챕터 3-1 Type Inference - 타입 추론
*/

// Q. 타입 추론으로 인해서 타입을 명시하지 않아도 되지만 생략하면 안 되는 걸까? 그래도? 안정성을 위해서..?

// 변수
let myNumber = 5;
let myString = "Hello";
let myBool = true;

/* 초기값 일단 지정되고 난 이후에는 초기값의 타입이 아닌 데이터는 들어갈 수 없다는 걸 뜻하는 것 같다.  */
myNumber = 23
myNumber = 10
//myNumber = "15"



// 함수 반환 타입
function add(x: number, y: number){
    return x + y;
    //  return `&{x} + &{y}`;
}

const n = add(10, 5);

// 배열 & 객체

let nums = [1,2,3,4]
let user = { name: "Eli", age: 30}

// nums.push("hello")
// user.age = "30"

let mixedValues = [1,2,3,"red", "green", "blue"]