/*

챕터 5-1 에러 처리 (error handling)




try{
    // 에러가 발생할 수 있는 코드
    //fn() // -> throw Error("something went wrong..")
} catch (error) {
    console.error(error.message);
} finally {
    // 에러의 여부와 상관없이 항상 실행된다.
}


*/


function checkPositiveNumber(num: number){
    if(num < 0){
        // 예외 발생
        throw new Error("number should be positive")
    }

    console.log(`${num} is a positive number`);
}


try {
    checkPositiveNumber(10);
    checkPositiveNumber(-10);
} catch (error) {
    if(error instanceof Error){
        console.error(error.message);
    }
}

class CustomError extends Error {
    constructor(message: string){
        super(message);
        this.name = "CustomError"
    }
}

try {
    throw new CustomError("custom error...")
} catch (error) {
    if(error instanceof CustomError){
        console.error(error.message);
    }
}