export {}

/*
챕터 3-2 Type Assertion - 타입 단언
*/

// 표현식 as 지정할 타입

const someVlaue: unknown = "Hey there";

const len = (someValue as string).length // ? 컴파일 단계에서는 데이터 타입을 추론할 수 없지만 개발자 자신이 확정적인 타입을 알고있다면 사용한다고..(?)


// 다음 사용 사례
// html 요소 등의..

const button = document.getElementById("button") as HTMLButtonElement;

// 타입체킹시 타입시스템에서 기본적으로 제공하는 타입에 존재하지 않는다.
// 실제 존재하는 타입에는 존재함. 이런 경우에 사용한다고 한다.
button.disabled = true;

// 주의할점은 button 요소가 없을 수 있기 때문에 이에 대한 처리가 필요하다.
/*
if(button instanceof HTMLButtonElement){
    button.disabled = false;
}

if(button){
    button.disabled = false
}
 */

