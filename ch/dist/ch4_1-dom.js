"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
챕터 4-1 DOM
*/
// 타입스크립트는 자바스크립트의 상위 집합
// JS 에서 제공되는 모든 DOM API 를 그대로 사용
// 타입 정의 파일 제공 `lib.dom.d.ts`
// HTMLElement div, a, p, head,
// HTMLElement // 커맨드 + 클릭
// <a id="myLink" href="https://google.com"> google </a>
const link1 = document.getElementById('myLink');
const link2 = document.querySelector('#myLink');
// instanceof 으로 확인 ,  as 타입 단언 키워드 사용
if (link1 instanceof HTMLAnchorElement) {
    link1.href = "https://google.com";
}
link2.href = '';
// if(link2){
//     link2.href = ''
// }
// 요소를 다룰 때마다 타입단언이나 타입 확인을 해 주어야하나? -> 아니다.
const img = document.createElement('img'); // 일치하는게 있냐~
img.src = "";
const anchor = document.createElement("a");
anchor.href = "";
const div = document.querySelector('div');
const butttons = document.querySelectorAll("button");
butttons.forEach(button => {
    button.click();
});
// event
const myDiv = document.getElementById("myDiv");
myDiv.addEventListener('click', (e) => {
    // e -> 마우스 이벤트로 한정되어있는데, 왜 인지 모름.
    const x = e.clientX;
    const y = e.clientY;
});
