/*
Project: Odin Project - Library

Author: Matthew Davis
Date Created: 29/9/2022
Date Last Updated:
*/

/*
Constructor to store our book information
*/
function Book(author, title, pages, read, favorite, position) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.favorite = favorite;
    this.position = position;
}

/*
Target the book container and create a book object to append to the div.
Loop through the passed object and assign both the key/value to 
their own Div, and then have the pair of Divs placed into another
container. 
*/
function displayBook(book) {
    const containerLibrary = document.querySelector('.containerLibrary');
    const bookEntry = document.createElement('div');
    bookEntry.classList.add('bookEntry');
    let bookPos = -1;

    for(a in book) {
        // Skip the loop so that position isn't displayed.
        if(a === "position") {
            // To be utilized by deleteBook()
            bookPos = book[a];
            continue;
        }

        // container for catagory and content
        const containerField = document.createElement('div');
        const catagory = document.createElement('div');
        const content = document.createElement('div');

        containerField.classList.add('containerField');
        catagory.classList.add('catagory');
        content.classList.add('content');

        //key
        catagory.textContent = a;
        //value
        content.textContent = book[a];
            

        containerField.appendChild(catagory);
        containerField.appendChild(content);

        bookEntry.appendChild(containerField);
    }
    
    bookEntry.appendChild(createBtnDelete(bookPos));
    containerLibrary.appendChild(bookEntry);
}

/*
Loop through the library array and plug in each
object into the displayBook function.
*/
function displayLibrary(singleEntry) {

    checkForEntries();

    //a will come up as digits
    for(a in library) {
        displayBook(library[a]);
    }
}

/*
If any book entries are already on the page, remove them so
that the list isn't duped with the same previous entries.
*/
function checkForEntries() {
    const checkForEntries = document.querySelectorAll('.bookEntry');

    if(checkForEntries.length !== 0){
        for(let a = 0; a < checkForEntries.length; a++)
            checkForEntries[a].remove();
            
    }
}

/*
Update a book's position to the currrenth library
length. Then add it to the library.
*/
function addBookToLibrary(book) {
    book["position"] = library.length;
    library.push(book);
}

/*
Create a button for each book entry.
*/
function createBtnDelete(bookPos) {
    const button = document.createElement('button');
    button.classList.add('btnDeleteEntry');
    button.setAttribute('type', 'button');

    //To be utilized by deleteBook()
    button.setAttribute('id', bookPos);
    button.textContent = "Delete";

    button.addEventListener('click', deleteBook);

    return button;
}

/*
Remove the book entry via the position
assigned to the button id. Repopulate
the page with what remains in the array.
*/
function deleteBook() {
    library.splice(parseInt(this.id), 1);

    for(let a = 0; a < library.length; a++) {
        // Update the position for each 
        library[a]["position"] = a;
    }

    displayLibrary(library);
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
function bookForm() {
    const body = document.querySelector('body');

    const pageDimmer = createDimmer(body);
    const form = createForm(body);

    pageDimmer.addEventListener('click', removeFormSet);

}

/*
Create the form for the user to fill out for a new
book entry.
*/
function createForm(body) {
    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'get');


    const formManifest = document.createElement('fieldset');
    formManifest.appendChild(createEntryField("Author", "text"));
    formManifest.appendChild(createEntryField("Title", "text"));
    formManifest.appendChild(createEntryField("Pages", "number"));
    formManifest.appendChild(createEntryField("Read", "checkbox"));
    formManifest.appendChild(createEntryField("Favorite", "checkbox"));
    formManifest.appendChild(createFormButton("Add New Book"));

    //Disables the form from refreshing the page upon submission.
    form.addEventListener('submit', (event) => { event.preventDefault();});
    form.addEventListener('submit', formToObj);
    form.addEventListener('submit', removeFormSet);

    form.appendChild(formManifest);
    body.appendChild(form);
}

/*
Take the form data and convert it to an object
so it can be utilized by displayLibrary().
*/
function formToObj() {
    const formInputs = document.querySelectorAll('input');
    const newBookEntry = new Book();

    for(let a = 0; a < formInputs.length; a++){
        // If it's a checkmark, assign the checked value
        if(formInputs[a].value === "on")
            newBookEntry[formInputs[a].name] = formInputs[a].checked;
        else   
            newBookEntry[formInputs[a].name] = formInputs[a].value;
    }

    addBookToLibrary(newBookEntry);
    displayLibrary(newBookEntry);
}

/*
Removes both the form and its supporting dimmer.
*/
function removeFormSet() {
    removeDimmer();
    removeForm();
}

/*
Create each entry for the form based on the labelName
and type. Based on what type is, the input field
will be changed to their respective type.
*/
function createEntryField(labelName, type) {
    let lowCaseLabel = labelName.toLowerCase();
    const entryPair = document.createElement('div');
    entryPair.classList.add('entryPair');

    const label = document.createElement('label');
    label.setAttribute('for', lowCaseLabel);
    label.textContent = labelName;

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', lowCaseLabel);
    input.setAttribute('name', lowCaseLabel);

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
function createFormButton(label) {
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
function createDimmer(body) {
    const pageDimmer = document.createElement('div');
    pageDimmer.classList.add('pageDimmer');
    body.appendChild(pageDimmer);

    return pageDimmer;
}

/*
Prune the pageDimmer div from the page.
*/
function removeDimmer() {
    const dimmer = document.querySelector('.pageDimmer');
    dimmer.remove();
}

/*
Prune the form when called upon.
*/
function removeForm() {
    const form = document.querySelector('form');
    form.remove();

}

// Contain all the Book objects
let library = [];

// Test Books: Will remove later!
const book01 = new Book("R.L. Stine", 'Stay Out of the Basement', 122, true, true, 0);
const book02 = new Book('Dr. Seuss', 'Oh, the Places You\'ll Go!', 56, false, false, 1);
const book03 = new Book('Dav Pilkey', 'The Adventures of Captain Underpants', 125, true, false, 2);

library.push(book01, book02, book03);

const btnNewBook = document.querySelector('.btnAddBook');
btnNewBook.addEventListener('click', bookForm);

displayLibrary();