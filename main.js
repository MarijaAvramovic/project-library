 
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
   
};

 Book.prototype.toggleStatus = function() {

  let isReadBook = this.isRead;
       if (isReadBook == true){
        this.isRead = false;
        
       }
       else {
        this.isRead = true;
       }
      };



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

function addBookToLibrary(author, title, numberOfPages, isRead) {
     let book = new Book(author, title, numberOfPages, isRead);
     myLibrary.push(book);
};

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
      let isReadBtn = document.createElement('button');
      isReadBtn.textContent =  "X" ;
       isReadBtn.classList.add("toggleBtn"); 
       let myToggleBtn = document.createElement('button');
       myToggleBtn.classList.add("green"); 

      newDiv.appendChild(titleParagraph);
      newDiv.appendChild(authorParagraph);
      newDiv.appendChild(pagesParagraph);
      isReadParagraph.appendChild(isReadBtn);
      newDiv.appendChild(myToggleBtn);
      newDiv.appendChild(isReadParagraph);

     

      let btnRemoveBook = document.createElement('button');
      btnRemoveBook.textContent = "Remove book";  
    btnRemoveBook.classList.add("btnRemoveBook"); 
    btnRemoveBook.dataset.btnId = id;
    newDiv.dataset.divId = id;
    isReadBtn.dataset.read = id;
    myToggleBtn.dataset.green = id;
      newDiv.appendChild(btnRemoveBook);

     

      container.appendChild(newDiv); 
       
} ;

 
 
    myLibrary.forEach(booky => {
      displayBook(booky.author, booky.title, booky.numberOfPages, booky.isRead, booky.id);

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

const buttonsToggleStatus = document.querySelectorAll('.toggleBtn');

buttonsToggleStatus.forEach(button => {
  button.addEventListener('click', (e) => {
     
    const clickedBtn = e.currentTarget;

    const dataset = clickedBtn.dataset; 
    const clickedBtnId = dataset.read;

 
 const toggledBook = myLibrary.find(book => book.id === clickedBtnId);
 console.log(toggledBook);
    toggledBook.toggleStatus();
     console.log(toggledBook);

     const greenBtn = document.querySelector(`[data-green="${clickedBtnId}"]`);
     console.log(greenBtn);
     if(toggledBook.isRead == false) {
      greenBtn.classList.toggle('green', false);
     }else {
       greenBtn.classList.toggle('green', true);
     }
     
  });
});
    
