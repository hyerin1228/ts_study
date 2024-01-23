/*

챕터 5-2 타입스크립트와 비동기

*/


// 비동기 프로그래밍

// Promise - 비동기 작업을 위한 JS 객체
const sync = () => {
    console.log("동기 작업 완료")
}


const asyncFn = () => {
    return new Promise((resolve) => {
        if(resolve){
            resolve("비동기 작업 완료")
        }
    })
}

function main(){
    sync();
    asyncFn().then(value=>console.log(value));
    sync();
    sync();
}


main();


// TS => 제네릭 프로미스
// Promise<T>

interface MyDataType {
    id: number;
    name: string;
}

type Config = Record<string, string>;

/*
{
    "server": "https://api.somedomain.com",
    "env": "production"

}
*/

async function loadConfig(): Promise<Config>{
    const response = await fetch("/api/config");
    const configData: Config = await response.json();

    return configData;
}


async function fetchData2<T>(url: string): Promise<T>{
    const response = await fetch(url);
    const data = await response.json();

    return data as Promise<T>;
}


const fetchData = (): Promise<MyDataType> => {
    return new Promise((resolve, reject)=>{
        // 로직 수행(비동기)
        const success = true;
        if(success){
            const data = {
                id: 1,
                name: "test"
            }
            resolve(data);
        } else {
            reject("something went wrong...");
        }
    })
}


fetchData()
    .then((data)=> console.log(data))
    .catch( (error)=> console.log(error));


// async function 함수_이름(){} // 이 함수는 비동기적으로 동작한다. 항상 Promise를 반환한다.
async function doFetch() {

    try{
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


doFetch();