const testBook = {
	title: "Designing Data Intensive Applications",
	author: "Martin Kleppmann",
	price: 20,
	imageUrl: "https://m.media-amazon.com/images/I/91YfNb49PLL._SY522_.jpg",
	inventory: 11
}

/* helper function to fill store form fields with data for testing */
function fillStore(form, data) {
	for (field in data) {
		form[field].value = data[field];
	}
}

/* helper function to fill book form fields with data for testing */
function fillBook(form, data){
	form.title.value = data.title
	form.author.value = data.author 
	form.price.value = data.price 
	form.imageUrl.value = data.imageUrl 
	form.inventory.value = data.inventory 
}
