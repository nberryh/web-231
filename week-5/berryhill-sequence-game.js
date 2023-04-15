/*
===========================================
; Title:  berryhill-number-game.js
; Author: Nolan Berryhill
; Date:   09 April 2023
; Description: Applying strings to list in html
;==========================================
*/

function displaySequence(){

    const choice = document.getElementById('selection').value;

    switch(choice){

        case "numbers":
            let index = 0;
            let txtNumSequence = "";

            while(index<11){
                txtNumSequence += index;
                index++;

                if (index<11){
                    txtNumSequence += ",";
                }
            }
        
            document.getElementById("numberResults").innerHTML = txtNumSequence;
            break;

        case "even":
            
            let evenNumber = 0;
            let txtEvenSequence = "";

            do {
                txtEvenSequence += evenNumber + ",";
                evenNumber = evenNumber + 2;

            }       
            
            while (evenNumber<21);

            document.getElementById("numberResults").innerHTML = txtEvenSequence;
            break;
        
        case "odd":
            
            let oddNumber = 0;
            let txtOddSequence = "";

            for (let i = 1; i < 20; i += 2) {
                    txtOddSequence += i + ",";
                }

            document.getElementById("numberResults").innerHTML = txtOddSequence;
            break;

        default:
            alert("Invalid Selection, please try again.");

    }

}