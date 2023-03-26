/*
===========================================
; Title:  berryhill-payroll.js
; Author: Nolan Berryhill
; Date:   25 March 2023
; Description: Applying strings to list in html
;==========================================
*/

const li_oneOne = document.getElementById("oneOne").innerHTML = "Ludwig";
const li_oneTwo = document.getElementById("oneTwo").innerHTML = "Beethoven";
const li_oneThree = document.getElementById("oneThree").innerHTML = "505 main street";
const li_oneFour = document.getElementById("oneFour").innerHTML = new Date().toLocaleDateString('en-US');
const li_oneFive = document.getElementById("oneFive").innerHTML = 25.501.toFixed(1);

const li_twoOne = document.getElementById("twoOne").innerHTML = "Johann";
const li_twoTwo = document.getElementById("twoTwo").innerHTML = "Bach";
const li_twoThree = document.getElementById("twoThree").innerHTML = "512 main street";
const li_twoFour = document.getElementById("twoFour").innerHTML = new Date().toLocaleDateString('en-US');
const li_twoFive = document.getElementById("twoFive").innerHTML = 25.501.toFixed(1);

const li_threeOne = document.getElementById("threeOne").innerHTML = "Wolfgang";
const li_threeTwo = document.getElementById("threeTwo").innerHTML = "Mozart";
const li_threeThree = document.getElementById("threeThree").innerHTML = "600 main street";
const li_threeFour = document.getElementById("threeFour").innerHTML = new Date().toLocaleDateString('en-US');
const li_threeFive = document.getElementById("threeFive").innerHTML = 25.501.toFixed(1);
