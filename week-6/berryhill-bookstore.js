/*
===========================================
; Title:  berryhill-bookstore.js
; Author: Nolan Berryhill
; Date:   23 April 2023
; Description: Applying strings to list in html
;==========================================
*/

const books = ["Storm Front", "Dune", "The Hobbit"];
const authors = ["Jim Butcher", "Frank Herbert", "J. R. R. Tolkien"];
const publishers = ["Penguin ROC", "Ace Books", "Houghton Mifflin Harcourt"];

authors.sort();
publishers.sort().reverse();

function display() {
    const choice = document.getElementById('selection').value;
    let row = "";

    switch (choice){
        
        case "books":

            let tblBooks = `
                    <h3>Books Listing</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Book Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${books.map((b) => `<tr><td>${b}</td></tr>`).join("")}
                        </tbody>
                    </table>
                `;
                document.getElementById('bookResults').innerHTML = tblBooks;
                break;

        case "authors":

            let tblAuthors = `
                <h3>Authors Listing</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Author Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${authors.map((a) => `<tr><td>${a}</td></tr>`).join("")}
                    </tbody>
                </table>
            `;
                
                document.getElementById('bookResults').innerHTML = tblAuthors;
                break;

        case "publishers":

            let tblPublishers = `
                <h3>Publisher Listing</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Publisher Name</th>
                        </tr>
                    </thead>
                    <tbody>                       
                        ${publishers.map((p) => `<tr><td>${p}</td></tr>`).join("")}
                    </tbody>
                </table>
            `;
                document.getElementById('bookResults').innerHTML = tblPublishers;
                break;
        
        default:
            alert("Invalid selection, please try again!");
    }
}