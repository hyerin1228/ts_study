"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preValue = 0;
var isOperatorActive = false;
// const alwaysFalse = false;
function handleClickNumber(value) {
    var displayEl = document.getElementById("display");
    if (isOperatorActive) {
        displayEl.innerText = String(value);
    }
    else {
        displayEl.innerText += String(value);
    }
}
function handleClickPlus() {
    // 현재 입력된 값을 어딘가에 저장해 두어야 한다.
    var displayEl = document.getElementById("display");
    preValue = Number(displayEl.innerText);
    isOperatorActive = true;
}
function handleClickEquls() {
    // 현재 입력된 값을 어딘가에 저장해 두어야 한다.
    var displayEl = document.getElementById("display");
    var currentValue = Number(displayEl.innerText);
    var result = preValue + currentValue;
    displayEl.innerText = String(result);
}
var calculator = {
    prevValue: 0,
    isOperatorActive: false,
    handleClickNumber: function () {
        var displayEl = document.getElementById("display");
        var currentValue = Number(displayEl.innerText);
        var result = preValue + currentValue;
        displayEl.innerText = String(result);
    },
    handleClickPlus: function () {
    },
    handleClickEquls: function () {
    }
};
