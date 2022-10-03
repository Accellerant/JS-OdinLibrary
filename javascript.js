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

    const pageDimmer = createDimmer(body);
    const form = createForm(body);

    pageDimmer.addEventListener('click', removeFormSet);

}

/*
Create the form for the user to fill out for a new
book entry.
*/
function createForm(body){
    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'get');


    const formManifest = document.createElement('fieldset');
    formManifest.classList.add('bookEntry');
    formManifest.appendChild(createEntryField("Author", "text"));
    formManifest.appendChild(createEntryField("Title", "text"));
    formManifest.appendChild(createEntryField("Pages", "number"));
    formManifest.appendChild(createEntryField("Read", "checkbox"));
    formManifest.appendChild(createEntryField("Favorite", "checkbox"));
    formManifest.appendChild(createFormButton("Add New Book"));

    //Disables the form from refreshing the page upon submission.
    form.addEventListener('submit', (event) => { event.preventDefault();});
    form.addEventListener('submit', removeFormSet);

    form.appendChild(formManifest);
    body.appendChild(form);
}

/*
Removes both the form and its supporting dimmer.
*/
function removeFormSet(){
    removeDimmer();
    removeForm();
}

/*
Create each entry for the form based on the labelName
and type. Based on what type is, the input field
will be changed to their respective type.
*/
function createEntryField(labelName, type){
    let lowCaseLabel = labelName.toLowerCase();
    const entryPair = document.createElement('div');
    entryPair.classList.add('entryPair');

    const label = document.createElement('label');
    label.setAttribute('for', lowCaseLabel);
    label.textContent = labelName;

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', lowCaseLabel);
    input.setAttribute('name', lowCaseLabel)

    if(type !== "checkbox")
        input.setAttribute('required', '');

    entryPair.appendChild(label);
    entryPair.appendChild(input);

    return entryPair;
}

/*
Creates the button for the form which allows the user to
submit their entry. Currently, this just closes out the form
and its dimmer.
*/
function createFormButton(label){
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.classList.add('btnBookEntry');
    button.textContent = label;

    //button.addEventListener('click', removeFormSet);

    return button;
}

/*
Create the dimmer div which resides behind the form.
*/
function createDimmer(body){
    const pageDimmer = document.createElement('div');
    pageDimmer.classList.add('pageDimmer');
    body.appendChild(pageDimmer);

    return pageDimmer;
}

/*
Prune the pageDimmer div from the page.
*/
function removeDimmer(){
    const dimmer = document.querySelector('.pageDimmer');
    dimmer.remove();
}

/*
Prune the form when called upon.
*/
function removeForm(){
    const form = document.querySelector('form');
    form.remove();

}

const btnNewBook = document.querySelector('.btnAddBook');
btnNewBook.addEventListener('click', bookForm);

addBook(book01);
addBook(book02);
addBook(book03);