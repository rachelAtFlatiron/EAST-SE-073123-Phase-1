/*  on click helper function: toggles collapsed class on form */
function toggleBookForm() {
	const bookFormHidden = bookForm.classList.toggle("collapsed");
	if (bookFormHidden) {
		toggleBookFormButton.textContent = "New Book";
	} else {
		toggleBookFormButton.textContent = "Hide Book Form";
	}
}

/* helper function to hide store form by updating classes and setting global vars */
function hideStoreForm() {
	document.querySelector("#store-form").classList.add("collapsed"); //adds class
	storeFormVisible = false; //sets variable to save visibility of form
	storeEditMode = false; //resets form to be for creating store
	storeForm.reset(); //clears all fields
	toggleStoreFormButton.textContent = "New Store"; //updates button text to align with creating store
}

/* helper function to show store form by updating classes and setting global vars */
function showStoreForm() {
	document.querySelector("#store-form").classList.remove("collapsed"); //removes class
	storeFormVisible = true; //sets variable to save visibility of form
	toggleStoreFormButton.textContent = "Hide Store Form";
	//ternary to determine text of submit button based on edit or create mode
	storeForm.querySelector('[type="submit"]').value = storeEditMode
		? "Save Store"
		: "Add Store";
}

/* toggles between showing and hiding form */
function toggleStoreForm() {
	if (storeFormVisible) {
		hideStoreForm();
	} else {
		showStoreForm();
	}
}
