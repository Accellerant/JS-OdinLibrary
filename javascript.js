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
    const container = document.querySelector('.containerBooks');
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
    container.appendChild(entry);
}

/*
Create a form above the entire page which will take 
in the users input for a new book. The form will have
a supporting div behind it to dim the entire page so
that it can pop out more. 

One will be able to remove the form via three ways:
    * Clicking outside on the "dimmed" page
    * Clicking an X in the upper right corner
    * Submitting a valid form
*/
function bookForm(){
    const body = document.querySelector('body');
    const pageDimmer = document.createElement('div');
    
    // The form itself: will be added next.
    //const form = document.createElement('div');
    //form.classList.add('bookEntry');

    pageDimmer.classList.add('pageDimmer');
    body.appendChild(pageDimmer);
    pageDimmer.addEventListener('click', removeDimmer, true);
}

/*
Prune the pageDimmer div from the page.
*/
function removeDimmer() {
    const dimmer = document.querySelector('.pageDimmer');
    dimmer.remove();
}

const btnNewBook = document.querySelector('.btnAddBook');
btnNewBook.addEventListener('click', bookForm);

addBook(book01);
addBook(book02);
addBook(book03);