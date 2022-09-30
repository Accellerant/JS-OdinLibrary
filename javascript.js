/*
Project: Odin Project - Library

Author: Matthew Davis
Date Created: 29/9/2022
Date Last Updated:
*/

function Book(author, title, pages, read, favorite) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.favorite = favorite;
}

let library = [];

const book01 = new Book("R.L. Stine", 'Stay Out of the Basement', 122, true, true);
const book02 = new Book('Dr. Seuss', 'Oh, the Places You\'ll Go!', 56, false, false);
const book03 = new Book('Dav Pilkey', 'The Adventures of Captain Underpants', 125, true, false);

library.push(book01, book02, book03);