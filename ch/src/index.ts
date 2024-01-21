export {}

// console.log("Hello TS")

// const nums: number[] = [];

// const a = 10 + nums[0]


// const someString = "typescript!";

// someString.endsWith("!")

// import{ printName } from "./util";
// printName("typescript");


const colors: string[] = ["red", "green", "blue"];

// const colors = ["red", "green", "blue"];


// let mixedArray: (number |string)[] = [1, 'two', 3];

// const person = {
//     name: "Byul",
//     age: 30
//   };

type Person = { 
    name: string;
    age: number;
};

const person: Person = {
    name: "Byul",
    age: 30
};


// type Book = {
//     title: string;
//     author: string;
//     yearPublished: number;
//     enum: [string, string, number];
// };

// type Book = {
//     title: string;
//     author: string;
//     yearPublished: number;
//     enum: enum;
// };

// type Number = {
//     firstNumber: 1;
//     secondNumber: 2;
// };





function add(x: number, y: number): number {
    return x + y;
  }

  function multiply(x: number, y: number): number {
    return x * y;
  };


function logMessage(x: string) {
    if(typeof x === typeof String){
        throw new Error(x);
    }
}

function errorThrower(x: string): never {
    throw new Error(x);
  }

  // 유니언

  let value: number|string|boolean = "hello";
// 가능한 타입: number, string, boolean



// 문제: 인터페이스 Car를 만들고 drive 메서드를 포함하세요. drive 메서드는 반환 타입이 없습니다(void). 또한, Car 인터페이스를 만족하는 객체를 생성하세요.

interface Car{
  drive(): void;
}

const car1: Car = {
  drive() {
 },
}


// interface Product{
//   name: string;
//   price?: number;
// }


interface Product{
  readonly serialNumber: string;
  color: string;
}

const product1: Product = {
  serialNumber: "1111",
  color: "red"
}



enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}



/*
class Country {
  private code: number;
  public name: string;
  protected capital: string;

  constructor(code: number, name: string, capital: string) {
      this.code = code;
      this.name = name;
      this.capital = capital;
  }

  displayInfo(): string {
      return `${this.name} (Code: ${this.code}). Capital: ${this.capital}`;
  }
}


class City extends Country {
  displayCapital(): string{
    return this.capital;
  }
}

const city = new City(1,"독일","베를린");
console.log(city.displayCapital())

*/


// Continent 클래스를 확장하고 CountryInterface 인터페이스를 구현하는 Country 클래스를 만듭니다. 
// Country 클래스에는 countryName이라는 public 속성을 포함하고, CountryInterface에 정의된 메서드를 구현하세요. 
// 이를 통해 클래스의 확장과 인터페이스 구현 순서의 중요성을 이해해보세요.

// 대륙
class Continent {
  protected continentName: string;

  constructor(name: string) {
      this.continentName = name;
  }
}

interface CountryInterface {
  getCountryInfo(): string;
}

// 여기에 Country 클래스를 Continent 클래스로부터 확장하고 
// CountryInterface 인터페이스를 구현하세요.
// 나라
/*
class Country extends Continent implements CountryInterface{
  countryName: string;

  constructor(continentName: string, countryName: string){
    super(continentName);
    this.countryName = countryName;
  }

  getCountryInfo() : string {
    return this.countryName;
  }
}

const country = new Country("Asia", "Korea");
console.log(country.getCountryInfo())


/*

추상 클래스 AbstractCountry를 정의하고, 이 클래스 내에 displayInfo라는 추상 메서드를 포함시킵니다. 
그 후, AbstractCountry를 상속받는 구체적인 클래스 SpecificCountry를 만들고, displayInfo 메서드를 구현하세요. 
SpecificCountry 클래스의 인스턴스를 생성하고, displayInfo 메서드를 호출하는 코드를 작성하세요.

*/

/*
abstract class AbstractCountry {
  protected name: string;
  protected capital: string;

  constructor(name: string, capital: string) {
      this.name = name;
      this.capital = capital;
  }

  abstract displayInfo(): string;
}

// 여기에 SpecificCountry 클래스를 AbstractCountry로부터 상속받아 정의하고, displayInfo 메서드를 구현하세요.
class SpecificCountry extends AbstractCountry{
  displayInfo() : string {
    return `${this.name}, ${this.capital}`
  }
}

const sCountry = new SpecificCountry("Asia", "Seoul");
console.log(sCountry.displayInfo())
console.log("------")



function getFirstElement<T>(arr: T[]): T | undefined {
  // 여기에 함수 구현을 작성하세요.
  // 입력된 T가 값이 없을 수도 있을 경우에는 undefined를 반환하는 것 같은데..
  if(arr.length === 0) { // 근데 배열이 없는 경우에는 undefined가 나오나 null이 나오나 모르겟네 값이 없다는 경우는 뭘로 표현하는지? // arr.length의 반환타입이 확인해보니 number 다.. 비어있으면 0이 나온다고...
    console.log("빈배열")
    return undefined;
  }
  return arr[0];
}

let strArray: Array<string> = ["apple", "banana", "cherry"];
let emptyArray: Array<string> = [];
// 여기에 getFirstElement 함수를 사용하여 첫 번째 요소를 반환하는 코드를 작성하세요.

console.log(getFirstElement(strArray))    // 예상 "apple"
console.log(getFirstElement(emptyArray))  // 예상 null ? undefined ?? = null X / nudefined O


*/

/*

interface Dict<T> {
  // 여기에 인터페이스 구현을 작성하세요.
  key: T;
}


let strObj: Dict<string> = {
  key: "제네릭 헷갈리는구만"
}
// 여기에 Dict<string> 타입의 객체를 생성하는 코드를 작성하세요.

console.log(strObj)


*/



// 문제: 제네릭 타입 T를 사용하여 배열의 모든 요소를 출력하는 printArray 함수를 작성하세요.
function printArray<T>(arr: T[]): void {
  // 여기에 함수 구현을 작성하세요.
  arr.forEach(element => {
    console.log(element)
  });
}

let mixedArray: Array<number | string> = [1, "two", 3, "four"];
// 여기에 printArray 함수를 사용하여 mixedArray의 요소를 출력하는 코드를 작성하세요.
printArray(mixedArray)





// 문제: 제네릭 클래스 Item<T>를 구현하고, 문자열 타입의 값을 저장 및 반환하는 코드를 작성하세요.
class Item<T> {
  content: T | null = null;

  setItem(value: T){
    this.content = value;
  }
  getItem(): T | null {
    return this.content;
  }
}

// 여기에 Item<string> 클래스의 인스턴스를 생성하고 사용하는 코드를 작성하세요.
const strObj = new Item<string>();
strObj.setItem("홀리..")
console.log(strObj.getItem())




// 제네릭 인터페이스 Store<T extends WithId>를 구현하고, UserRepository 클래스에서 이를 사용하여 사용자를 관리하는 코드를 작성하세요.

interface WithId {
 
}

interface User {
 

}

interface Store<T extends WithId> {
  // 여기에 인터페이스 구현을 작성하세요.
}

class UserRepository implements Store<User> {
  // 여기에 클래스 구현을 작성하세요.
}

// 여기에 UserRepository 인스턴스를 생성하고, 사용자를 추가 및 검색하는 코드를 작성하세요.




class Country {
  protected name: string;
  protected capital: string;

  constructor(name: string, capital: string) {
    this.name = name;
    this.capital = capital;
  }

  displayInfo(): string {
    return `${this.name}, Capital: ${this.capital}`;
  }
}


// 여기에 Employee 클래스를 Country 클래스로부터 상속받아 정의하고, 필요한 메서드를 추가하세요.
class Employee extends Country {
	id: number;
	department: string;

  constructor(name: string, capital: string, id: number, department: string){
    super(name, capital)
    this.id = id;
    this.department = department
  }
}


// 출력 예시
// const employee = new Employee("South Korea", "Seoul", 123, "Engineering");
// console.log(employee.displayEmployeeInfo());


//제네릭을 사용하여 Pair<K, V> 클래스를 만드세요. 이 클래스는 두 개의 제네릭 타입 K와 V를 갖으며, 각각 키와 값으로 사용됩니다. 클래스에는 키와 값을 설정하고 가져오는 메서드를 포함해야 합니다. Pair 클래스를 사용하여 문자열 키와 숫자 값의 쌍을 만들고 출력하는 코드를 작성하세요.
// 여기에 Pair<K, V> 클래스를 구현하세요.
class Pair<K, V>{
  key : K
  value : V;

  constructor(key: K, value: V){
    this.key = key;
    this.value = value;
  }

  getKey(): K {
    return this.key;
  }
  getValue(): V {
    return this.value;
  }
}

// 출력 예시
const pair = new Pair<string, number>("age", 30);
console.log(`Key: ${pair.getKey()}, Value: ${pair.getValue()}`);


// 문제: 제네릭을 사용하여 Queue<T> 클래스를 만드세요. 이 클래스는 FIFO(First-In-First-Out) 방식의 큐를 구현해야 합니다. enqueue, dequeue, 그리고 큐의 현재 크기를 반환하는 size 메서드를 포함하세요. Queue 클래스를 사용하여 문자열 요소를 큐에 추가하고 제거하는 코드를 작성하세요.
// FIFO(First-In-First-Out) 큐는 먼저 들어온 요소가 먼저 나가는 방식으로 작동하는 자료구조입니다. 생각해보면, 일상 생활에서 줄을 서서 기다리는 것과 유사합니다. 먼저 온 사람이 먼저 서비스를 받고 떠납니다. → 쉽게 말해 선입선출
class Queue<T> {
	item: T[] = [];

	enqueue(addItem: T){
    this.item.push(addItem)
  }

  dequeue(): T | undefined {
    return this.item.shift();
  }

  size() :number {
    return this.item.length;
  }
}


const queue = new Queue<string>();
queue.enqueue("Apple");
queue.enqueue("Banana");
console.log(queue.dequeue()); // Apple
console.log(`Queue size: ${queue.size()}`); // Queue size: 1



interface User {
  name: string;
  age: number;
}



type UserWithID = User & { id: number };

const user: UserWithID = {
  name: "Alice",
  age: 30,
  id: 1
};