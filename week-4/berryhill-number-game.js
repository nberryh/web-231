/*
===========================================
; Title:  berryhill-number-game.js
; Author: Nolan Berryhill
; Date:   09 April 2023
; Description: Applying strings to list in html
;==========================================
*/

//Generate value to guess and rnd


const rnd = Math.floor(Math.random() * 10 + 1);

//Function for chkGuess

function chkGuess() {

    const guess = document.getElementById('guessingNumber').value;
    
    //Set value for const
    const msgLessThan = "Your number is less than ";
    const msgMoreThan = "Your number is greater than ";
    const msgCongrats = "Congratulations! you picked the correct number!";

    //How the code will send out message
    
    if (rnd<guess) {
         document.getElementById("numberResults").innerHTML = msgLessThan + " " + guess;
    }
    else if (rnd>guess) {
        document.getElementById("numberResults").innerHTML = msgMoreThan + " " + guess;
    }
    else {
        document.getElementById("numberResults").innerHTML = msgCongrats;
    }
    
}