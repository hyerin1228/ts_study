export {}

/*
챕터 3-3 클래스 (classes)
*/

// 구조를 정의 , 인터페이스는 기본적으로 public
interface ContinentInterface{
    getContinentName() : string;
}

interface CountryInterface {
    capital: string;
    getInfo(): string;
}

class Continent implements ContinentInterface {
    protected continentName: string;

    constructor(name: string){
        this.continentName = name;
    }

    getContinentName(){
        return this.continentName;
    }
}


class Country extends Continent implements CountryInterface {
    #name: string;
    capital: string;

    constructor(continentName: string, name:string, capital:string){
        super(continentName)
        this.#name = name;
        this.capital = capital;
    }

    getInfo(){
        return `${this.#name}, ${this.capital}, ${this.getContinentName()}`;
    }
}



let country = new Country("Asia","South Korea", "Seoul");
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
abstract class AbstractCountry{
    name: string;
    capital: string;

    constructor(name: string, capital: string){
        this.name = name;
        this.capital = capital;
    }

    setup(): void{
        console.log("setup complete");
    }

    abstract displayInfo(): void;
}


// const myContry = new Country("1","2","3");

// const myCountry = new AbstractCountry(); // 추상클래스는 인스턴스화 할 수 없다.
// 쓸려면 추상클래스를 상속받아와야한다.
// abstract 로 선언된 멤버는 무조건 구현을 해 주어야한다.
// 자세한 구현은 실제로 상속받는 클래스에서 구현을 하는 것이다.
class MyCountry extends AbstractCountry {
    displayInfo(): void {
        console.log("display info called");
    }
}

const myCountry = new MyCountry("독일", "베를린")
myCountry.setup();
myCountry.displayInfo();