 
let myLibrary = [];  
const container = document.querySelector('.container');

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
    addBookToLibrary("mimika", "didika", 565, true);
   addBookToLibrary("pipika", "didika", 43, false);
console.log(myLibrary);

myLibrary.forEach(booky => {
  console.log(booky);
      let newDiv = document.createElement('div');
      newDiv.classList.add('card');
      let authorParagraph = document.createElement('p');
      authorParagraph.textContent =  `Author: ${booky.author}` ;
      let titleParagraph = document.createElement('p');
      titleParagraph.textContent =  `Title: ${booky.title}` ;
      let pagesParagraph = document.createElement('p');
      pagesParagraph.textContent =  `Number of pages: ${booky.numberOfPages}` ;
      let isReadParagraph = document.createElement('p');
      isReadParagraph.textContent =  `READ: ${booky.isRead}` ;
      newDiv.appendChild(titleParagraph);
      newDiv.appendChild(authorParagraph);
      newDiv.appendChild(pagesParagraph);
      newDiv.appendChild(isReadParagraph);
      container.appendChild(newDiv); 

});

console.log(myLibrary[1].id);
