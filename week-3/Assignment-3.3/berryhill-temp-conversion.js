/*
===========================================
; Title:  berryhill-temp-conversion.js
; Author: Nolan Berryhill
; Date:   01 April 2023
; Description: Applying strings to list in html
;==========================================
*/

//Assigning results to celsius
let celsius = document.getElementById("results");

//Assigning fahrenheit to number
let fahrenheit = document.getElementById("fahrenheit");


//Equation to calculate fahrenheit to celsius
function farToCel(){
    const fahrenheit = document.getElementById("fahrenheit").value;
    const celsius = (fahrenheit - 32) / 1.8;

    //Where I want the results to go
    document.getElementById("results").innerHTML = celsius.toFixed(2);
}

