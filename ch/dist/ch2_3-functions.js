"use strict";
/*
챕터 2-3 함수 타입
*/
// Parameter
// Q. 어디까지 유추(???) 알아서 자동으로 유추해줄까?
// 명시를 반드시 해야되고 안 해도 되고 뭐 그런 구분이 정리되어있는 게 있나?
function add(x, y) {
    return x + y;
}
const result = add(10, 5);
// Parameter II
// function addToCart(name: string, price: number, quantity: number) {
//     return `${name}, ${price}, ${quantity}`;
// }
// addToCart("orange", 100, 5)
// addToCart("pineapple", 150, 5)
// addToCart("grape", 110, 5)
// ----- 여기까지는 컴파일러가 정적 체킹을 해줌으로써 뭐... 안정적이다.
// 함수랑 파라미터 상황에 따라서 기본값을 뭐.. 주고 생략하고?????? 음 모르겠다..
// Default Parameter
// function addToCart(name: string, price: number, quantity: number = 1) {
//     return `${name}, ${price}, ${quantity}`;
// }
//addToCart("orange", 100) // 오렌지, 10, 1 반환
// * optional parameter .. 뭐 옵셔널하고 디폴트를 같이 쓸 수는 없겠지?
function addToCart(name, price, quantity) {
    /*
    if(quantity){
        // logic 처리
    }
    */
    // 옵셔널인데 값 없을때 무조건 1이 들어가게 되어있으면 아예 안 쓰는 경우는 없는건가(?)
    return `${name}, ${price}, ${quantity || 1}`; // 옵셔널을 쓰면 그 함수내부에 전달이 안된다고 한다.. 그래서 내부에 옵셔널 매개변수가 전달되지 않을 때의 상황을 명시해주어야한다고 함!~
}
addToCart("orange", 150); // 오렌지, 10, 1 반환
addToCart("grape", 100, 2); // 오렌지, 10, 1 반환
// Contextual Typing - 문맥상 타이핑
// map(), reduce(), filter(), forEach() // 이 함수들은 콜백함수를 사용함
// map((Element) => { element })
// 배열의 요소타입을 바탕으로 자동으로 타입스크립트가 추론해줌(자동감지(?))
/*

const numbers: number[] = [ 1,2,3,4,5 ];
const letters: string[] = [ "a","b","c","d"];

numbers.map(element=>{
    element.valueOf // 타입에 맞는 메서드들만 제공이 되기 때문에 예기치않은 메서드 사용 방지 뭐.. 안정적이다
})

// 요소의 타입을 직접 명시하는 방법도 있기는 하다고...
// 타입 정의해도 되지만 콜백함수 사용할 때는 자동유추 시스템을 사용하는 걸 추천한다
letters.forEach((letter: string)=>{

})


*/
// ---* Return type annotation
function addTwoValues(x, y) {
    return `${x}${y}`;
}
function addTwoNumbers(x, y) {
    return x + y;
}
function isTen(x, y) {
    return x + y === 10;
}
// void(해당 함수가 반환값이 없다.), never(해당함수는 절대로 반환값을 반환하지 않을 것이다-흔하지 않지만)
function logMessage(message) {
    console.log(message);
}
function throwError(message) {
    throw new Error(message);
}
