

/*
챕터 2-4 유니언 타입
*/



// 유니언 기초
let userId: string | number;

userId = 1
userId = "100"

// userId = true
// userId = {}

function printUserId(id: string | number){
    console.log(id)
}

// printUserId("1")
// printUserId(1)

// printUserId({})



// type narrowing
function processValue(value: number | string){
    // 문자열 경우
    if(typeof value === 'string'){
        return value.toUpperCase();
    }
    
    // 숫자의 경우
    return value.toString().toUpperCase();
}


// 배열 사용 예시
let mixedValues: (string | number)[]= [];

mixedValues.push("100")
mixedValues.push(100)
// mixedValues.push([])


// 리터럴과 유니언 타입
// let id: "1" ;

// id = "1";

const toggle = (option: "on" | "off") => {
    console.log(option);
}

// toggle("on")
// toggle("off")

// toggle(true)
// toggle(0)


type Size = "xs" | "s" | "m" | "l" | "xl";

let tShirtSize: Size;

tShirtSize = "m"

function setSize(size: Size){
    switch(size){
        case "xs":
            // xs 처리
            break;
        case "s":
            // s 처리
        //....
    }
}



// type aliases 와 유니언

type SuccessCode = 200 | 201 | 202
type ErrorCode = 500 | 501 | 503

let responseCode: SuccessCode | ErrorCode

responseCode = 200
responseCode = 503

// responseCode = 403

