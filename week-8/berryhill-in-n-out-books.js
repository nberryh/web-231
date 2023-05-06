/*
===========================================
; Title:  berryhill-in-n-out-books.js
; Author: Nolan Berryhill
; Date:   07 May 2023
; Description: Applying strings to list in html
;==========================================
*/

const book1 = {
    isbn: "978-0-45-14578-1",
    title: "Storm Front",
    pages: 355
}

const book2 = {
    isbn: "978-0-06-112008-4",
    title: "1984",
    pages: 336
}

const book3 = {
    isbn: "978-1-03-106298-7",
    title: "The Hobbit",
    pages: 366
};

const author1 = {
    name: "Jim Butcher",
    genre: "Fiction"
}

const author2 = {
    name: "George Orwell",
    genre: "Fiction"
}

const author3 = {
    name: "J. R. R. Tolkien",
    genre: "Fiction"
};

function display() {
    const choice = document.getElementById("selection").value;

    switch (choice) {
        case "books":
            let tblBooks = `<h3>Top 3 Favorite Books</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ISBN</th>
                                        <th>Title</th>
                                        <th>Pages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${book1.isbn}</td>
                                        <td>${book1.title}</td>
                                        <td>${book1.pages}</td>
                                    </tr>
                                    <tr>
                                        <td>${book2.isbn}</td>
                                        <td>${book2.title}</td>
                                        <td>${book2.pages}</td>
                                    </tr>
                                    <tr>
                                        <td>${book3.isbn}</td>
                                        <td>${book3.title}</td>
                                        <td>${book3.pages}</td>
                                    </tr>
                                </tbody>
                            </table>`;
            document.getElementById("bookResults").innerHTML = tblBooks;
            break;

        case "authors":
            let tblAuthors = `<h3>Top 3 Favorite Authors</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Genre</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>${author1.name}</td>
                                            <td>${author1.genre}</td>
                                        </tr>
                                        <tr>
                                            <td>${author2.name}</td>
                                            <td>${author2.genre}</td>
                                        </tr>
                                        <tr>
                                            <td>${author3.name}</td>
                                            <td>${author3.name}</td>
                                        </tr>
                                    </tbody>
                                </table>`;
                document.getElementById("bookResults").innerHTML = tblAuthors;
                break;  
        
        default:
            alert("Invalid selection, please try again!");
            break;
    }
}