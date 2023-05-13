/*
===========================================
; Title:  berryhill-dino-app.js
; Author: Nolan Berryhill
; Date:   14 May 2023
; Description: Applying strings to list in html
;==========================================
*/

class Gigantosaurus {
    constructor(name) {
        this.name = name;
    }

    roar() {
        return `${this.name} says: rooooooar`;
    }
}

class Tyrannosaurus extends Gigantosaurus {
    constructor(name) {
        super(name);
    }

    growl() {
        return `${this.name} says: groooooowl`;
    }
}

class Velociraptor extends Tyrannosaurus {
    constructor(name) {
        super(name);
    }

    awk() {
        return `${this.name} says: awk awk awwwwwwk`;
    }
}

const dinoRaptor = new Velociraptor("Blue");

function display() {
    const giga = document.getElementById('giga');
    const rex = document.getElementById('rex');
    const raptor = document.getElementById('raptor');
    let result = "";
    let choice;

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

    document.getElementById('dinoResults').innerHTML = result;

}