"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Country_name;
Object.defineProperty(exports, "__esModule", { value: true });
class Continent {
    constructor(name) {
        this.continentName = name;
    }
    getContinentName() {
        return this.continentName;
    }
}
class Country extends Continent {
    constructor(continentName, name, capital) {
        super(continentName);
        _Country_name.set(this, void 0);
        __classPrivateFieldSet(this, _Country_name, name, "f");
        this.capital = capital;
    }
    getInfo() {
        return `${__classPrivateFieldGet(this, _Country_name, "f")}, ${this.capital}, ${this.getContinentName()}`;
    }
}
_Country_name = new WeakMap();
let country = new Country("Asia", "South Korea", "Seoul");
console.log(country);
console.log(country.getInfo());
// 접근제어자
// 쓰는 용도 잘 모르겠네... 감이 안오는구만..
// 1. public(클래스의 어느곳에서나 접근할 수 있다.) 
// 2. private(해당 클래스 내부에서만 접근할 수 있다) 
// 3. protected
// 멤버나 메소드에 따로 명시하지 않는다면 public 제어자가 기본으로 할당됨
/*
    public: 어디서나 접근 가능합니다. 타입스크립트에서 멤버는 기본적으로 public입니다.
    private: 해당 클래스 내부에서만 접근 가능합니다. 클래스 외부에서는 접근할 수 없습니다.
    protected: 해당 클래스와 상속받은 하위 클래스에서 접근 가능합니다.

*/
// 추상클래스
class AbstractCountry {
    constructor(name, capital) {
        this.name = name;
        this.capital = capital;
    }
    setup() {
        console.log("setup complete");
    }
}
// const myContry = new Country("1","2","3");
// const myCountry = new AbstractCountry(); // 추상클래스는 인스턴스화 할 수 없다.
// 쓸려면 추상클래스를 상속받아와야한다.
// abstract 로 선언된 멤버는 무조건 구현을 해 주어야한다.
// 자세한 구현은 실제로 상속받는 클래스에서 구현을 하는 것이다.
class MyCountry extends AbstractCountry {
    displayInfo() {
        console.log("display info called");
    }
}
const myCountry = new MyCountry("독일", "베를린");
myCountry.setup();
myCountry.displayInfo();
