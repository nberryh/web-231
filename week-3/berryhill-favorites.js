/*
===========================================
; Title:  berryhill-favorites.js
; Author: Nolan Berryhill
; Date:   01 April 2023
; Description: Applying strings to list in html
;==========================================
*/

//Onclick display for my favorite team
document.getElementById("btnFavSportTeam").onclick = function() {
        let btnFavSportTeam = document.getElementById("btnFavSportTeam").Value;
        alert('My favorite sport team is the Las Vegas Raiders')
}

//Onclick display for my favorite book
document.getElementById("btnFavBook").onclick = function() {
    let btnFavBook = document.getElementById("btnFavBook").Value;
    alert('My favorite book is Battlegrounds')
}

//Onclick display for my favorite author
document.getElementById("btnFavAuthor").onclick = function() {
    let btnFavAuthor = document.getElementById("btnFavAuthor").Value;
    alert('My favorite author is Jim Butcher')
}

//Onclick display for my favorite programming language
document.getElementById("btnFavProgramming").onclick = function() {
    let btnFavProgramming = document.getElementById("btnFavProgramming").Value;
    alert('My favorite programming language is Java')
}


