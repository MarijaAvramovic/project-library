 
let myLibrary = [];  
const container = document.querySelector('.container'); 
const form = document.querySelector('#form');
const btn = document.querySelector('.btn');
const btnSaveBook = document.querySelector('#btnSaveBook');


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
 


function displayBook(author, title, numOfPages, isRead, id) {

       
  let newDiv = document.createElement('div');
      newDiv.classList.add('card');
      let authorParagraph = document.createElement('p');
      authorParagraph.textContent =  `Author: ${author}` ;
      let titleParagraph = document.createElement('p');
      titleParagraph.textContent =  `Title: ${title}` ;
      let pagesParagraph = document.createElement('p');
      pagesParagraph.textContent =  `Number of pages: ${numOfPages}` ;
      let isReadParagraph = document.createElement('p');
      isReadParagraph.textContent =  `READ: ${isRead}` ;
      newDiv.appendChild(titleParagraph);
      newDiv.appendChild(authorParagraph);
      newDiv.appendChild(pagesParagraph);
      newDiv.appendChild(isReadParagraph);

     

      let btnRemoveBook = document.createElement('button');
      btnRemoveBook.textContent = "Remove book";  
    btnRemoveBook.classList.add("btnRemoveBook"); 
    btnRemoveBook.dataset.btnId = id;
    newDiv.dataset.divId = id;
      newDiv.appendChild(btnRemoveBook);

     

      container.appendChild(newDiv); 
       
} 

 
 
    myLibrary.forEach(booky => {
      displayBook(booky.author, booky.title, booky.numberOfPages, booky.isRead, booky.id);

    });

 


btn.addEventListener('click', function() {
  
  form.classList.remove('invisible');

});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const newAuthor = document.getElementById('author').value;
  const newTitle = document.getElementById('title').value;
  const newNumOfPages = document.getElementById('numOfPages').value;
  const newIsRead = document.getElementById('isRead').checked;

  addBookToLibrary(newAuthor, newTitle, newNumOfPages, newIsRead);

   displayBook(newAuthor, newTitle, newNumOfPages, newIsRead);


});
const buttonsRemoveBook = document.querySelectorAll('.btnRemoveBook');

buttonsRemoveBook.forEach(button => {
  button.addEventListener('click', (e) => {
    // console.log("clickedBtnId");
    const clickedBtn = e.currentTarget;

    const dataset = clickedBtn.dataset; 
    const clickedBtnId = dataset.btnId;


    console.log(clickedBtnId);
    console.log(typeof clickedBtnId);
    console.log(e.currentTarget);

    const cardRemoved = document.querySelector(`[data-div-id="${clickedBtnId}"]`);

    console.log(cardRemoved);
     container.removeChild(cardRemoved);
     
    myLibrary = myLibrary.filter(book => book.id !== clickedBtnId);

     
  });
});