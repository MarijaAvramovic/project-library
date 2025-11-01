 
let myLibrary = [];  

function Book(author, title, numberOfPages, isRead) {
     if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
                 }
  this.id = crypto.randomUUID();
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
   
}

function addBookToLibrary(author, title, numberOfPages, isRead) {
     let book = new Book(author, title, numberOfPages, isRead);
     myLibrary.push(book);
}

 addBookToLibrary("didika", "didika", 54, true);
  addBookToLibrary("mimika", "didika", 54, true);
   addBookToLibrary("pipika", "didika", 483, false);
console.log(myLibrary);

myLibrary.forEach(booky => {
  console.log(booky);
});

console.log(myLibrary[1]["title"]);
