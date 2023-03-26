/*
===========================================
; Title:  berryhill-payroll.js
; Author: Nolan Berryhill
; Date:   25 March 2023
; Description: Applying strings to list in html
;==========================================
*/

//Assigns variables for first names
const oneOne = "Ludwig"
const twoOne = "Johann"
const threeOne = "Wolfgang"

//Assign variables for last names
const oneTwo = "Beethoven"
const twoTwo = "Bach"
const threeTwo = "Mozart"

//Assign Variables for addresses
const oneThree = "505 main street"
const twoThree = "512 main street"
const threeThree = "600 main street"

//Assign Variables for dates
const oneFour = new Date().toLocaleDateString('en-US');
const twoFour = new Date().toLocaleDateString('en-US');
const threeFour = new Date().toLocaleDateString('en-US');

//Assign Variables for pay rates
const oneFive = 18.9.toFixed(1);
const twoFive = 25.5.toFixed(1);
const threeFive = 50.1.toFixed(1);


//Assigns list item 1 within the first unordered list of the HTML to a string value
document.getElementById("one-One").innerHTML = oneOne;

//Assigns list item 2 within the first unordered list of the HTML to a string value
document.getElementById("one-Two").innerHTML = oneTwo;

//Assigns list item 3 within the first unordered list of the HTML to a string value
document.getElementById("one-Three").innerHTML = oneThree;

//Assigns list item 4 within the first unordered list of the HTML to a string value
document.getElementById("one-Four").innerHTML = oneFour;

//Assigns list item 5 within the first unordered list of the HTML to a string value
document.getElementById("one-Five").innerHTML = oneFive;

//Assigns list item 1 within the second unordered list of the HTML to a string value
document.getElementById("two-One").innerHTML = twoOne;

//Assigns list item 2 within the second unordered list of the HTML to a string value
document.getElementById("two-Two").innerHTML = twoTwo;

//Assigns list item 3 within the second unordered list of the HTML to a string value
document.getElementById("two-Three").innerHTML = twoThree;

//Assigns list item 4 within the second unordered list of the HTML to a string value
document.getElementById("two-Four").innerHTML = twoFour;

//Assigns list item 5 within the second unordered list of the HTML to a string value
document.getElementById("two-Five").innerHTML = twoFive;

//Assigns list item 1 within the third unordered list of the HTML to a string value
document.getElementById("three-One").innerHTML = threeOne;

//Assigns list item 2 within the third unordered list of the HTML to a string value
document.getElementById("three-Two").innerHTML = threeTwo;

//Assigns list item 3 within the third unordered list of the HTML to a string value
document.getElementById("three-Three").innerHTML = threeThree;

//Assigns list item 4 within the third unordered list of the HTML to a string value
document.getElementById("three-Four").innerHTML = threeFour;

//Assigns list item 5 within the third unordered list of the HTML to a string value
document.getElementById("three-Five").innerHTML = threeFive;
