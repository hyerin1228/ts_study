export {}

let preValue = 0;
let isOperatorActive = false;

// const alwaysFalse = false;

function handleClickNumber(value: number){

    const displayEl = document.getElementById("display") as HTMLElement;
    
    if(isOperatorActive){
        displayEl.innerText = String(value);
    }else{
        displayEl.innerText += String(value);
    }

}

function handleClickPlus(){
    // 현재 입력된 값을 어딘가에 저장해 두어야 한다.

    const displayEl = document.getElementById("display") as HTMLElement;
    
    preValue = Number(displayEl.innerText);

    isOperatorActive = true;
}


function handleClickEquls(){
    // 현재 입력된 값을 어딘가에 저장해 두어야 한다.

    const displayEl = document.getElementById("display") as HTMLElement;
    
    const currentValue = Number(displayEl.innerText);
    const result = preValue + currentValue;

    displayEl.innerText = String(result);

}

interface Calculator {
    prevValue: number;
    isOperatorActive: boolean;

    handleClickNumber: () => void;
    handleClickPlus: () => void;
    handleClickEquls: () => void;

}

const calculator: Calculator = {
    prevValue: 0,
    isOperatorActive: false,
    handleClickNumber() {
       const displayEl = document.getElementById("display") as HTMLElement;
       const currentValue = Number(displayEl.innerText);
        const result = preValue + currentValue;
        displayEl.innerText = String(result);
    },
    handleClickPlus(){

    },
    handleClickEquls(){
        
    }
}