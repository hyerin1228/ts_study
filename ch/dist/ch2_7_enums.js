"use strict";
/*
챕터 2-5 열거형(Enum) ㄷㄷ

*/
// 1. 기본 문법
// 뭐 .. 인덱스를 정해주는 느낌인가?
// 할당값이 사용되면 다음 숫자는 +1 순차적으로..
/*
enum 이름 {
    상수값1 = 1,
    상수값2 = 15,
    상수값3 = 20
}
*/
// 2. 숫자형 Enum 
var PlayerState;
(function (PlayerState) {
    PlayerState[PlayerState["Buffering"] = 0] = "Buffering";
    PlayerState[PlayerState["Playing"] = 1] = "Playing";
    PlayerState[PlayerState["Paused"] = 2] = "Paused";
    PlayerState[PlayerState["Seeking"] = 3] = "Seeking";
})(PlayerState || (PlayerState = {}));
let currentState;
currentState = PlayerState.Buffering;
currentState = PlayerState.Playing;
const isPlaying = (state) => {
    /*
    console.log(state)
    console.log("1, " + PlayerState.Buffering)
    console.log("2, " + PlayerState.Playing)
    console.log("3, " + PlayerState.Paused)
    console.log("4, " + PlayerState.Seeking)
    console.log("test, " + PlayerState[PlayerState.Seeking)
    */
    // console.log("test, " + PlayerState[PlayerState.Seeking]);
    console.log("4, " + PlayerState);
    return state === PlayerState.Playing;
};
// 플레이어 재생중?
isPlaying(currentState); // true
console.log(isPlaying(currentState));
// 3. 문자형 Enum
// 명시적 할당.. 숫자형과 비교했을 때는, 숫자로는 식별하기가 어렵다. 디버깅, 로깅을 할 때 유리하다. 숫자형과 비교할 때?
var Direction;
(function (Direction) {
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
})(Direction || (Direction = {}));
function move(dir) {
    switch (dir) {
        case Direction.Left:
            // 왼쪽 로직
            break;
        case Direction.Right:
            // 오른쪽 로직
            break;
        // ...
    }
}
move(Direction.Left);
move(Direction.Right);
// 똑같은 코드 아닌교..?
//------------------
let allNumberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// true를 반환하면 개체가 추가되고 아니면 무시된다. 짝수만 남기고 싶다.
function removeOdds(numbers) {
    return numbers.filter((number) => {
        if (number % 2 == 0)
            return true;
        else
            return false;
    });
}
const evenArr = removeOdds(allNumberArr);
console.log(evenArr);
function formatBook(book) {
    return `${book.title} , 저자: ${book.author}`;
}
function concatenate(str1, str2, separator = " ") {
    return `${str1}${separator}${str2}`;
}
console.log(concatenate("황혜린", "바보"));
console.log(concatenate("황혜린", "바보", "="));
function getSize(value) {
    if (typeof value === 'string')
        return value.toString.length;
    else
        return value;
}
function getNumberOfDoors(car) {
    return car.numberOfDoors;
}
// 문제: enum Day { Monday, Tuesday, Wednesday, Thursday, Friday }를 사용하여, 주어진 요일에 따라 다른 활동을 반환하는 함수를 작성하세요. 예를 들어, Monday는 'Study', Friday는 'Relax' 등을 반환할 수 있습니다.
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
})(Day || (Day = {}));
function getActivityForDay(day) {
    switch (day) {
        case Day.Monday:
            return "Study";
        case Day.Tuesday:
            return "Keep Going !";
        case Day.Wednesday:
            return "holy...moly..";
        case Day.Thursday:
            return "robocapoly...";
        case Day.Friday:
            return "Relax";
        default:
            return "주말인감..?";
    }
}
let today = getActivityForDay(Day.Wednesday);
console.log("today = " + today);
