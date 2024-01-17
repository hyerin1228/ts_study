
/*
챕터 2-6 튜플

*/




// 1. 기본 문법
let myTuple: [string, number, boolean] // 선언된 타입과 순서에 맞게 할당이 되어야 한다.

myTuple = ["Hello", 15, false];
// myTuple = ["Hello", true, 1];

myTuple[0] = "ook"
myTuple[1] = 55
myTuple[2]


console.log(myTuple[0])
console.log(myTuple[1])
console.log(myTuple[2])


//1-1. 사용예시
function getUserInfo(): [number, string]{
    return [1, "Sam"]
}

// 자바스크립트의 구조분해할당?
const [userid, username] = getUserInfo()


//1-2. 사용예시
type Flavor = string;
type Price = number;

type IceCream = [Flavor, Price]

type IceCream2 = {
    Flavor: string,
    Price: number
}




let vanila: IceCream = ["Vanila", 500]
console.log("1. vanila = " + vanila)
//vanila[0]
//vanila[1]

vanila = ["Canila", 400];
console.log("2. vanila = " + vanila)

let vanila2: IceCream2 = {Flavor: "Vanila2", Price: 222};
console.log("3. vanila2 = " + vanila2.Flavor + ", " + vanila2.Price)
//1-3. 사용예시 , 튜플을 배열의 내부요소에 사용하는 예

type lat = number;  // 위도
type lng = number;  // 경도

type coord = [lat, lng];

let coords: coord[] = [];

coords.push([36, -96])
coords.push([38, -76])


// 반복문을 사용할 때, 구조할당을 통해서 요소를 쉽게 접근할 수 있게 도와준다.
// 위도랑 경도를 받아와주고, 튜플타입 내부에 있는 요소를 사용할때 타입 안정성을 보장을 해준다.
for(const [lat, lng] of coords){

}



