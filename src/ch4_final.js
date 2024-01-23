"use strict";
/*

문제: HTML 문서에 "button1", "button2", "button3" 등의 id를 가진 여러 개의 버튼이 있습니다.
document.querySelectorAll 메서드와 NodeListOf<HTMLButtonElement>를 사용하여 이들 버튼에 클릭 이벤트 리스너를 추가하고,
클릭 시 해당 버튼의 id를 콘솔에 출력하는 타입스크립트 코드를 작성하세요.



const btnArr = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;

btnArr.forEach((item)=>{
    item.addEventListener('click', (e) =>{
        const btn = e.currentTarget as HTMLButtonElement
        console.log(btn.id);
    });
});



2. 문제: 함수 processData는 string | string[] | number | number[] 타입의 매개변수를 받습니다.
typeof 연산자와 Array.isArray() 함수를 사용하여 매개변수의 타입을 좁혀, 문자열이나 숫자일 경우 그 값을 콘솔에 출력하고,
배열일 경우 각 요소를 콘솔에 출력하는 타입스크립트 코드를 작성하세요.


function processData(data: string | string[] | number | number[]): void {
    if(Array.isArray(data)){
        // 배열인 경우
        console.log("배열인 경우 = " + data);
    }else{
        // 배열이 아닌 경우
        console.log("배열이 아닌 경우 =" + data);
    }
}



processData("string");
processData(["1","2","3","4"]);
processData(1);
processData([1,2,3,4,5]);

3.문제 : Product 인터페이스가 주어졌을 때, 해당 인터페이스를 변형하는 세 가지 다른 유틸리티 타입을 적용하여 새로운 타입을 만드세요.
첫 번째 타입은 모든 속성을 선택적으로 만들어야 하고,
두 번째 타입은 모든 속성을 읽기 전용으로 만들어야 하며,
세 번째 타입은 id 속성만을 포함해야 합니다.
각 타입에 대한 변수를 선언하고 초기화하세요.
*/
// 여기에 세 가지 새로운 타입을 만드세요.
// 각 타입에 대한 변수를 선언하고 초기화하세요.
const partialProduct = {
    id: 1,
    name: "황혜린1",
    price: 1000,
};
const readonlyProduct = {
    id: 1,
    name: "황혜린1",
    price: 1000,
};
const pickIdWithProduct = {
    id: 1
};
