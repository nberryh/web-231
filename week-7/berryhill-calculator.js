/*
===========================================
; Title:  berryhill-calculator.js
; Author: Nolan Berryhill
; Date:   29 April 2023
; Description: Applying strings to list in html
;==========================================
*/

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b=== 0) {
        throw new Error("cannot divide by zero");
    }
    return a / b;
}

function displayMultiplyResults() {

    const numOne = parseFloat(document.getElementById('firstNumber').value);
    const numTwo = parseFloat(document.getElementById('secondNumber').value);

    try {
        const product = multiply (numOne, numTwo);
        document.getElementById('multiplyResults').textContent = `${numOne} * ${numTwo} = ${product}`;
    } catch (error) {
        alert("input must be numbers"); 
    } 
}

function displayDivideResults() {

    const numThree = parseFloat(document.getElementById('threeNumber').value);
    const numFour = parseFloat(document.getElementById('fourNumber').value);

    try {
        const product = divide (numThree, numFour);
        document.getElementById('divideResults').textContent = `${numThree} / ${numFour} = ${product}`;
    } catch (error) {
        alert("input must be numbers"); 
    } 
}