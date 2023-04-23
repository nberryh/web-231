/*
===========================================
; Title:  berryhill-bookstore.js
; Author: Nolan Berryhill
; Date:   23 April 2023
; Description: Applying strings to list in html
;==========================================
*/

//Set value for const
const books = ["Storm Front", "Dune", "The Hobbit"];
const authors = ["Jim Butcher", "Frank Herbert", "J. R. R. Tolkien"];
const publishers = ["Penguin ROC", "Ace Books", "Houghton Mifflin Harcourt"];

//Set direction of array
authors.sort();
publishers.sort().reverse();

//Selecting for function output
function display() {

    //Set value for const and let
    const choice = document.getElementById('selection').value;
    let row = "";

    //Selecting for function output
    switch (choice){
        
        //Equation for function output
        case "books":

            //Making table and generate rows
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

        //Equation for function output
        case "authors":

            //Making table and generate rows
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
                
                //How the code will send out message
                document.getElementById('bookResults').innerHTML = tblAuthors;
                break;

        //Equation for function output
        case "publishers":

            //Making table and generate rowsv
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

                //How the code will send out message
                document.getElementById('bookResults').innerHTML = tblPublishers;
                break;
        
        //Alert statement for mistakes
        default:
            
            //How the code will send out message
            alert("Invalid selection, please try again!");
    }
}