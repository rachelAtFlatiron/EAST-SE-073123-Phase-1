/* constants */
const bookList = document.querySelector("#book-list");
const toggleBookFormButton = document.querySelector("#toggle-form");
const bookForm = document.querySelector("#book-form");
const url = "http://localhost:3000";
const toggleStoreFormButton = document.querySelector("#toggle-store-form");
const storeSelector = document.querySelector("#store-selector"); 
const editStoreBtn = document.querySelector("#edit-store");
const storeForm = document.querySelector("#store-form");
let storeEditMode = false;
let storeFormVisible = false; 

function fillStore(form, data) {
	for (field in data) {
		if (form[field]) {
			form[field].value = data[field];
		}
	}
}

function populateStoreEditForm(store) {
	const form = document.querySelector("#store-form");
	fillStore(form, store);
	showStoreForm();
}

toggleBookFormButton.addEventListener("click", toggleBookForm);
toggleStoreFormButton.addEventListener("click", toggleStoreForm);

editStoreBtn.addEventListener("click", (e) => {
	const selectedStoreId = document.querySelector("#store-selector").value;
	storeEditMode = true;
	storeForm.dataset.storeId = selectedStoreId;
	getJSON(`${url}/stores/${selectedStoreId}`).then(populateStoreEditForm);
});

storeForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const store = {
		name: e.target.name.value,
		number: e.target.number.value,
		location: e.target.location.value,
	};
	if (storeEditMode) {
		const storeId = e.target.dataset.storeId;
		fetch(`${url}/stores/${storeId}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(store),
		})
			.then((res) => res.json())
			.then((data) => {
				renderHeader(data);
				renderFooter(data);
				storeSelector.querySelector(`option[value="${data.id}"]`).textContent = data.name;
			})
			.catch((err) => console.log(err));

	} else {
		postJSON("http://localhost:3000/stores", store)
			.then(addSelectOptionForStore)
			.catch(renderError);
	}
	hideStoreForm();
	e.target.reset();
});

/* book form submit */
bookForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const book = {
		title: e.target.title.value,
		author: e.target.author.value,
		price: e.target.price.value,
		reviews: [],
		inventory: Number(e.target.inventory.value),
		imageUrl: e.target.imageUrl.value,
	};

	postJSON("http://localhost:3000/books", book)
		.then((book) => {
			renderBook(book);
			e.target.reset();
		})
		.catch(renderError);
});

/* get requests for loading store and book data */
getJSON("http://localhost:3000/stores")
	.then((stores) => {
		renderStoreSelectionOptions(stores);
		renderHeader(stores[0]);
		renderFooter(stores[0]);
	})
	.catch((err) => {
		console.error(err);
	});
getJSON("http://localhost:3000/books")
	.then((books) => {
		books.forEach(renderBook);
	})
	.catch(renderError);
