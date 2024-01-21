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
var _Item_content, _UserRepository_users, _ProductRepository_products;
Object.defineProperty(exports, "__esModule", { value: true });
/*
챕터 3-4 Generics 제네릭 파트 2
*/
// <타입> / <T>
/*
1) 예제 코드에서 이해가 안 되는 것이 타입 명시를 하는데 #content: T | null; 이 부분입니다.
T 만 쓰면 안 되나요? 어떤 타입이든 될 수 있는데 왜 null 을 유니온으로 넣어주어야 하나요?

2) 같은 맥락에서 constructor(생성자)도 null을 원시값으로 할당했는지 모르겠습니다. T 가 되는 것은 안되나요?
---------
1) T | null 사용 이유
타입 안전성: #content 프로퍼티의 타입을 T | null로 정의하는 것은, 이 프로퍼티가 T 타입의 값 또는 null 값을 가질 수 있음을 나타냅니다. 이는 #content가 항상 T 타입의 값으로 초기화되지 않을 수 있음을 고려한 것입니다.
널 가능성 처리: 제네릭 타입 T 자체는 어떤 타입이든 될 수 있지만, 초기에는 어떤 값도 할당되지 않은 상태를 나타내기 위해 null을 사용합니다. 이는 클래스 인스턴스가 생성되었을 때 해당 프로퍼티가 아직 유효한 T 타입의 값을 가지고 있지 않을 수 있음을 명시적으로 표현합니다.

2) 생성자에서 null 할당 이유
초기화: 생성자에서 this.#content = null;로 초기화하는 것은 #content 프로퍼티가 T 타입의 값으로 즉시 초기화되지 않을 경우를 처리하기 위함입니다. 이렇게 함으로써, Item 클래스의 인스턴스가 생성될 때 #content는 유효한 값으로 채워지지 않은 상태, 즉 '빈' 상태를 안전하게 표현합니다.
유효한 값 할당 전 상태 표현: null을 사용하는 이유는 #content가 아직 유효한 값으로 설정되지 않았음을 명시적으로 나타내기 위함입니다. null은 "값이 없음"을 나타내는 JavaScript의 원시값입니다.

요약
T | null은 #content가 T 타입의 값 또는 '값이 없는' 상태(null)를 가질 수 있음을 나타냅니다.
생성자에서 null로 초기화하는 것은 #content가 인스턴스 생성 시점에 유효한 값으로 채워지지 않았음을 표현합니다. 이후 setItem 메서드를 통해 유효한 값으로 설정할 수 있습니다.
이러한 방식은 제네릭과 클래스의 프로퍼티를 사용할 때 타입 안전성을 유지하고, 프로퍼티의 초기 상태를 명확히 표현하는 데 도움이 됩니다.


*/
class Item {
    constructor() {
        _Item_content.set(this, void 0);
        __classPrivateFieldSet(this, _Item_content, null, "f");
    }
    setItem(value) {
        __classPrivateFieldSet(this, _Item_content, value, "f");
    }
    getItem() {
        return __classPrivateFieldGet(this, _Item_content, "f");
    }
}
_Item_content = new WeakMap();
const numberItem = new Item();
numberItem.setItem(100);
numberItem.getItem();
const stringItem = new Item();
stringItem.setItem("Hello");
stringItem.getItem();
// 유저 저장소
class UserRepository {
    constructor() {
        _UserRepository_users.set(this, []);
    }
    findById(id) {
        return __classPrivateFieldGet(this, _UserRepository_users, "f").find(user => user.id === id);
    }
    save(user) {
        __classPrivateFieldGet(this, _UserRepository_users, "f").push(user);
    }
}
_UserRepository_users = new WeakMap();
const userRepo = new UserRepository();
userRepo.save({
    id: 1,
    name: "Josh"
});
userRepo.save({
    id: 2,
    name: "Amy"
});
console.log(userRepo.findById(1));
console.log(userRepo.findById(2));
class ProductRepository {
    constructor() {
        _ProductRepository_products.set(this, []);
    }
    findById(id) {
        return __classPrivateFieldGet(this, _ProductRepository_products, "f").find(product => product.id === id);
    }
    save(product) {
        __classPrivateFieldGet(this, _ProductRepository_products, "f").push(product);
    }
}
_ProductRepository_products = new WeakMap();
const productRepo = new ProductRepository();
productRepo.save({
    id: 10,
    price: 100,
    name: "Keyboard"
});
productRepo.save({
    id: 20,
    price: 200,
    name: "Mouse"
});
console.log(productRepo.findById(20));
console.log(productRepo.findById(10));
// 제약조건
/*

interface WithId {
    id: number;
}

모든 저장 객체들이 id 라는 속성을 가지고 있어야 한다.
interface Store<T extends WithId(제약)>{

}
*/
