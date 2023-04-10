/*
===========================================
; Title:  berryhill-number-game.js
; Author: Nolan Berryhill
; Date:   09 April 2023
; Description: Applying strings to list in html
;==========================================
*/

//Generate value to guess and rnd

const guess = document.getElementById('guessing-number').value;
const rnd = Math.floor((Math.random() * 10) + 1);

//Function for chkGuess

function chkGuess() {
    
    //Set value for const
    const msgLessThan = "Your number is less than ";
    const msgMoreThan = "Your number is greater than ";
    const msgCongrats = "Congratulations; you picked the correct number!";

    //How the code will send out message
    
    if (rnd < guess) {
         document.getElementById("number-results").innerHTML = msgLessThan + " " + document.getElementById('guessing-number').value;
    }
    else if (rnd > guess) {
        document.getElementById("number-results").innerHTML = msgMoreThan + " " + document.getElementById('guessing-number').value;
    }
    else if (rnd = guess) {
        document.getElementById("number-results").innerHTML = msgCongrats;
    }
    
}