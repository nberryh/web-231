/*
===========================================
; Title:  berryhill-calculator.js
; Author: Nolan Berryhill
; Date:   30 April 2023
; Description: Applying strings to list in html
;==========================================
*/

//Creating the function and error alerts
function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !=='number') {
        throw new Error('Inputs must be numbers');
    }
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Inputs must be numbers')
    }
    return a * b;
}

//Creating the function and error alerts
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !=='number') {
        throw new Error('Inputs must be numbers');
    }
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Inputs must be numbers')
    }
    if (b=== 0) {
        throw new Error("cannot divide by zero");
    }
    return a / b;
}

//Creating the equation for multiply results
function displayMultiplyResults() {

    //Set value for const
    const numOne = parseFloat(document.getElementById('firstNumber').value);
    const numTwo = parseFloat(document.getElementById('secondNumber').value);

    //Creating the function and error alerts
    try {
        const product = multiply (numOne, numTwo);
        document.getElementById('multiplyResults').textContent = `${numOne} * ${numTwo} = ${product}`;
    } catch (error) {
        alert(error.message); 
    } 
}

//Creating the equation for divide results
function displayDivideResults() {

    //Set value for const
    const numThree = parseFloat(document.getElementById('threeNumber').value);
    const numFour = parseFloat(document.getElementById('fourNumber').value);

    //Creating the function and error alerts
    try {
        const product = divide (numThree, numFour);
        document.getElementById('divideResults').textContent = `${numThree} / ${numFour} = ${product}`;
    } catch (error) {
        alert(error.message); 
    } 
}