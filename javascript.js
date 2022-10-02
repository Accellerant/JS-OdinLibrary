/*
Project: Odin Project - Library

Author: Matthew Davis
Date Created: 29/9/2022
Date Last Updated:
*/

/*
Constructor to store our book information
*/
function Book(author, title, pages, read, favorite) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.favorite = favorite;
}

// Contain all the Book objects
let library = [];

// Test Books: Will remove later!
const book01 = new Book("R.L. Stine", 'Stay Out of the Basement', 122, true, true);
const book02 = new Book('Dr. Seuss', 'Oh, the Places You\'ll Go!', 56, false, false);
const book03 = new Book('Dav Pilkey', 'The Adventures of Captain Underpants', 125, true, false);

library.push(book01, book02, book03);


/*
Target the book container and create a book object to append to the div.
Loop through the passed object and assign both the key/value to 
their own Div, and then have the pair of Divs placed into another
container. 
*/
function addBook(book) {
    const body = document.querySelector('.containerBooks');
    const entry = document.createElement('div');
    entry.classList.add('dummyBook');

    for(a in book) {
        let entryDiv = document.createElement('div');
        let catagory = document.createElement('div');
        let content = document.createElement('div');
        entryDiv.classList.add('entry');
        catagory.classList.add('catagory');
        content.classList.add('content');


        catagory.textContent = a;
        content.textContent = book[a];
        entryDiv.appendChild(catagory);
        entryDiv.appendChild(content);

        entry.appendChild(entryDiv);
    }
    body.appendChild(entry);
}

addBook(book01);
addBook(book02);
addBook(book03);