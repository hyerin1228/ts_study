
// 인테페이스 정의
interface MyApiHandler<T> {
    fetchData(endpoint: string): Promise<T>
}

// 클래스 정의
class ApiHandler<T> implements MyApiHandler<T> {

    private baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }
    // base url (ex. https://api.somedomain.com)

    // endpoint (ex. /users, /ports, /profiles)

    async fetchData(endpoint: string): Promise<T> {

        try {
            const url = this.baseUrl + endpoint;
            const response = await fetch(url);
            
            if(!response.ok){
                throw new Error(`${response.status}`)
            }

            const data: T = await response.json();

            return data;
        } catch (error) {
            throw new Error(`에러 발생: ${error}`);
        }
        
    }
}

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
}


// 메인 함수
async function main(){
    // https://jsonplaceholder.typicode.com/posts
    const baseUrl = `https://jsonplaceholder.typicode.com`
    const apiHandler = new ApiHandler<Post[]>(baseUrl);
    
    try {
        const posts: Post[] = await apiHandler.fetchData("/posts");

        posts.forEach((post) => console.log(post));
    } catch (error) {
        console.error(error);
    }
}


main();