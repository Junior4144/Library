let myLibrary = [];


function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;




}


function addBookToLibrary(Book) {
  myLibrary.push(Book);
}
function displayLibrary(){
    myLibrary.forEach(function(element) {
        console.table(element);
      });
}

const book1 = new Book('the maze runner', 'james One', 100, false);
const book2 = new Book('the scorch trials', 'james Two', 20, true);
const book3 = new Book('the death cure', 'james three', 30, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);



const buttonBook = document.querySelector('.buttonBook');
const book_form = document.querySelector('.book_form');
const book_submit_form = document.getElementById('book-submit-form')

buttonBook.addEventListener('click', function() {
  book_form.style.display = 'block';  
});
const book_listing = document.querySelector('.book_listing');
const book_display = document.querySelector('.book_display');


book_submit_form.addEventListener('submit', function(event) {
   event.preventDefault(); 
   const author = document.getElementById('author').value;
   const title = document.getElementById('title').value;
   const numPages = document.getElementById('numPages').value;

   const bookAdd = new Book(title,author, numPages)
   addBookToLibrary(bookAdd);
   book_form.style.display = 'none';

   render();
  
});




function deleteButton(index){
  myLibrary.splice(index,1);
  render();
}



function displayAllLibrary(){
  
  for(let i =0; i < myLibrary.length ; i++){
    
    const bookListingDiv = document.createElement('div');
    bookListingDiv.classList.add('book_listing');
  
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('image');
  
    const imgElement = document.createElement('img');
    imgElement.src = "img/pexels-monstera-6373305.jpg"
    imgElement.alt = '';
    imgElement.width = '80';
    imgElement.height = '100';
  
    imgDiv.appendChild(imgElement);
  
    const bookinformation = document.createElement('div');
    bookinformation.classList.add('book_information');
  
    const headingTitle = document.createElement('h4');
    headingTitle.innerHTML ="Title " + myLibrary[i].title;
  
    const headingAuthor = document.createElement('h4');
    headingAuthor.textContent ="Author: " + myLibrary[i].author;
  
    const headingPages = document.createElement('h4');
    headingPages.textContent ="Pages: " + myLibrary[i].pages;
  


  
  
    bookinformation.appendChild(headingTitle);
    bookinformation.appendChild(headingAuthor);
    bookinformation.appendChild(headingPages);

  
  
    const deleteDiv = document.createElement('div');
    deleteDiv.classList.add('delete_Container');
  
    const headingDelete = document.createElement('button');

    headingDelete.classList.add('delete_Button');
    headingDelete.innerHTML ="Delete"; 
    headingDelete.onclick = function() {
      deleteButton(i);
    };
    
    
    
    deleteDiv.appendChild(headingDelete);
  

    const readDiv = document.createElement('div');
    readDiv.classList.add('read_Container');
    
    const heading_Read = document.createElement('button');
    heading_Read.classList.add('read_Button')
    heading_Read.textContent = "Not read"
    heading_Read.onclick = function() {
      if(heading_Read.textContent === "Not read"){
        heading_Read.textContent ="Read";
      }
      else{
        heading_Read.textContent ="Not read";
      }
      
    }

    readDiv.appendChild(heading_Read);

    bookListingDiv.appendChild(imgDiv);
    bookListingDiv.appendChild(bookinformation);
    bookListingDiv.appendChild(deleteDiv);
    bookListingDiv.appendChild(readDiv);
  
    book_display.appendChild(bookListingDiv);
  }
 

    
  
  
 

}
function render(){
 
  book_display.innerHTML = "";
  displayAllLibrary();
  
}



render();

// const deleteButtonList = document.querySelectorAll('.delete_Button');
// let totalNum = 0;

// deleteButtonList.forEach(function(element){


//   element.addEventListener('click', function(){

//     const listOfDelete = document.querySelectorAll('.book_listing');
   
//     listOfDelete[totalNum].remove();
//     totalNum += 1;
//   });
// });

render();

//render shows the library
//delete will delete the 