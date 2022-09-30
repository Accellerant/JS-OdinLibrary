# JS-OdinLibrary
Project: Odin Project - Library
Associated Files: index.html, style.css, javascript.js

Author: Matthew Davis
Date Created: 29/9/2022
Date Last Updated: 29/9/2022

Goal: 
Create a page which utilizes JavaScript to
manage a collection of books. Each book
entry will be entered in manually and
can be removed from the user at will. Every single
book will be displayed as a card on the page.

Requirements: 
    * Store the Book objects in an Array.
    * Add a function which takes in the users input which 
        stores the content into the array.
    * Utilize a constructor for the object: Book.
    * Each Array Entry will be displayed on the page.
    * Each Entry will have a REMOVE button.
    * Add a toggle to change if the book has been read or not.

Pseudo~Code:
    1. Create an empty array [will have content at first for testing]

    2. Display contents of array on page

    3. If a book exists within the array, display it as a card .
            showing all the information and include  a "REMOVE" button.
        3.a Upon having the "REMOVE" button triggered....
            3.a.1 Pop the item From the Array & Loop back to Step #2.

    4. Have a "NEW BOOK" button available.
        4.a Upon button being triggered...
            4.a.1 Create a form which takes in the following:
                  * Author
                  * Title
                  * Number of Pages
                  * Whether it's been read
                  * Any other misc info we want to add

            4.a.2 When the user hits the submit button for the form...
                  * See if all fields besides the "read" field has 
                        been properly inputted.
                  * Add the entry to the array and loop back to Step #2.