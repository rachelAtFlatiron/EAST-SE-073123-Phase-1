/* constants */
const bookList = document.querySelector("#book-list");
const newBookBtn = document.querySelector("#toggleForm");
const bookForm = document.querySelector('#book-form')
/**
 * 
 * Renders a book card to DOM given a book object
 */

//newBookBtn.addEventListener('click', (e) => console.log(e))

function renderBook(book) {
	const li = document.createElement("li");
	li.className = "card";
	const titleNode = document.createElement("h3");
	const authorNode = document.createElement("p");
	const priceNode = document.createElement("p");
	const imgNode = document.createElement("img");
	const deleteBtn = document.createElement("button");

	titleNode.textContent = book.title;
	authorNode.textContent = book.author;
	priceNode.textContent = formatPrice(book.price);
	imgNode.src = book.imageUrl;
	deleteBtn.textContent = "Delete";
	deleteBtn.className = book.title
	//✅ 1. on delete button click, remove card from DOM

	//✅ 1a. attach eventListener
	//✅ 1b. include callback function to remove card instance
	deleteBtn.addEventListener('click', (e) => {
		li.remove()
	})
	//brand new deleteBtn and brand new li get created every time renderBook is executed
	//see .forEach at bottom of page
	//console.log(deleteBtn, li)
	//console.log()

	bookList.append(li);
	li.append(titleNode);
	li.append(authorNode);
	li.append(priceNode);
	li.append(imgNode);
	li.append(deleteBtn);

	//✅ 1c. define cb outside of renderBook
}

//✅ 2. add a submit event listener to the form

//✅ 2a. save the form node as a const
//✅ 2b. write a testing function to fill in the values of the form

//✅ 2c. invoke the fill in function
//✅ 2d. create the event listener 
bookForm.addEventListener('submit', (e) => {
	
	e.preventDefault() //to stop page from refreshing (redirecting)

	//✅ 2e. create the new book and add to DOM
	//create new book object that contains information from form
	//AND aligns with data structure for a book found in data.js
	let newBook = {
		title: e.target.title.value,
		author: e.target.author.value,
		price: e.target.price.value,
		imageUrl: e.target.imageUrl.value,
		inventory: e.target.inventory.value
	}
	//reuse renderBook logic to put card with newBook information in DOM
	renderBook(newBook)
})


//✅ 3. recap - show the form when you click on the "add new book" button
//✅ 3a. save the button in a variable
//✅ 3b. add the event listener
	//✅ 3c. hide/show the form
	//✅ 3d. update the button text


/*
*
* 
OLD BUISINESS
*
*
*/

/* helper function to format the price of a book */
function formatPrice(price) {
	return "$" + Number.parseFloat(price).toFixed(2);
}

/* adds name of bookstore to header */
function renderHeader(bookStore) {
	document.querySelector("#store-name").textContent = bookStore.name;
}

/* adds details of bookstore to footer */
function renderFooter(bookStore) {
	document.querySelector("#store").textContent = bookStore.location;
	document.querySelector("#number").textContent = bookStore.number;
	document.querySelector("#address").textContent = bookStore.address;
}

/* invoke functions on DOM content loaded */
renderHeader(bookStore);
renderFooter(bookStore);
//
bookStore.inventory.forEach((book) => renderBook(book));
