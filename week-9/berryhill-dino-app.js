/*
===========================================
; Title:  berryhill-dino-app.js
; Author: Nolan Berryhill
; Date:   14 May 2023
; Description: Applying strings to list in html
;==========================================
*/

//Set constructor within class
class Gigantosaurus {
    constructor(name) {
        this.name = name;
    }

    //Method returns a string variable
    roar() {
        return `${this.name} says: rooooooar`;
    }
}

//Set constructor within class
class Tyrannosaurus extends Gigantosaurus {
    constructor(name) {
        super(name);
    }

    //Method returns a string variable
    growl() {
        return `${this.name} says: groooooowl`;
    }
}

//Set constructor within class
class Velociraptor extends Tyrannosaurus {
    constructor(name) {
        super(name);
    }

    //Method returns a string variable
    awk() {
        return `${this.name} says: awk awk awwwwwwk`;
    }
}

//Set value for const
const dinoRaptor = new Velociraptor("Blue");

//Creating the equation for multiply results
function display() {

    //Set value for const
    const giga = document.getElementById('giga');
    const rex = document.getElementById('rex');
    const raptor = document.getElementById('raptor');
    let result = "";
    let choice;

    //Equation for different results to HTML
    if (giga.checked) {
        choice = "giga";
        result = dinoRaptor.roar();
    } else if (rex.checked) {
        choice = "rex";
        result = dinoRaptor.growl();
    } else if (raptor.checked) {
        choice = "raptor";
        result = dinoRaptor.awk();
    } else {
        alert("Invalid selection, please try again!");
    }

    //How the code will send out results
    document.getElementById('dinoResults').innerHTML = result;

}