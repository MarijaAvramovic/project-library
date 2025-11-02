# project-library
 
 
The book objects are stored in an array, so you’ll need a constructor for books. Each book has a unique identifier. 


I have a function that loops through the array and displays each book on the page. Instead of a table books are displayed on their own “card”. I
added a few books manually. 

I wanted to practice the flexibility to recreate elements (like our library and its books) in various ways using the same underlying data. With the logic for displaying books to the user and the book structures that hold all information as distinct entities. This separation helped enhance the maintainability and scalability of the code.

Feat a “New Book” button will bring up a form allowing users to input the details for the new book and add it to the library: author, title, number of pages. Used event.preventDefault()

Add a button on each book’s display to remove the book from the library.
You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the unique id of the respective book object.
Add a button on each book’s display to change its read status.
To facilitate this you will want to create Book prototype function that toggles a book instance’s read status.
You’re not required to add any type of storage to save the information between page reloads.