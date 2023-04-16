/*
===========================================
; Title:  berryhill-sequence-game.js
; Author: Nolan Berryhill
; Date:   15 April 2023
; Description: Applying strings to list in html
;==========================================
*/

// Function for number sequence
function displaySequence(){

    //Set value for const
    const choice = document.getElementById('selection').value;

    //Selecting for function output
    switch(choice){

        case "numbers":

            //Set value for let
            let index = 0;
            let txtNumSequence = "";

            //Equation for function output
            while(index<11){
                txtNumSequence += index;
                index++;
                
                //Equation for function output
                if (index<11){
                    txtNumSequence += ",";
                }
            }
            
            //How the code will send out message
            document.getElementById("numberResults").innerHTML = txtNumSequence;
            break;

        case "even":
            
            //Set value for let
            let evenNumber = 0;
            let txtEvenSequence = "";

            //Equation for function output
            do {
                txtEvenSequence += evenNumber + ",";
                evenNumber = evenNumber + 2;

            }       
            
            //Equation for function output
            while (evenNumber<21);

            //How the code will send out message
            document.getElementById("numberResults").innerHTML = txtEvenSequence;
            break;
        
        case "odd":
            
            //Set value for let
            let oddNumber = 0;
            let txtOddSequence = "";

            //Equation for function output
            for (let i = 1; i < 20; i += 2) {
                    txtOddSequence += i + ",";
                }
            
            //How the code will send out message
            document.getElementById("numberResults").innerHTML = txtOddSequence;
            break;

        default:
            
            //How the code will send out message
            alert("Invalid Selection, please try again!");

    }

}