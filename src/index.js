//DOMContentLoaded

/* ~~~~~~~~~~~~~~~ INVOKING FUNCTIONS ~~~~~~~~~~~~~~~  */

// render header, footer
fetchResource(`${store_url}2`)
.then(store => {
    renderHeader(store)
    renderFooter(store)
})
.catch(e => console.error(e))

//fetch all books
fetchResource(book_url)
.then(books => books.forEach(renderBookCard))
.catch(e => console.error(e))

//add event listeners to DOM
document.querySelector('#book-form').addEventListener('submit', handleForm)


