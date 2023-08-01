//✅ 1. fork and sync git

//✅ 2. Review data.js and order of script tags in HTML <head> 

function formatPrice(price) {
  return '$' + Number.parseFloat(price).toFixed(2);
}

//✅ 3. explore the debugger

//✅ 4. update the store name with "easley's technical books"
function renderHeader(store){
  let headerTitle = document.querySelector('#store-name')
  console.log(headerTitle)
  headerTitle.innerText = store.name
}
renderHeader(bookStore)

//✅ 5. create a function for render footer
function renderFooter(store){
  let storeFooter = document.querySelector('#store')
  storeFooter.innerText = store.name
  let phoneFooter = document.getElementById('number')
  phoneFooter.innerText = store.number
  let addressFooter = document.querySelector('#address')
  addressFooter.innerText = store.address
}
renderFooter(bookStore)


//✅ 6. create a function called renderBook(book)

/***
function: create HTML structure for single book and append to page
input: a book object
output: none
***/

function renderBook(book){

  let cardLi = document.createElement('li')
  cardLi.className = 'card'

  let h3 = document.createElement('h3')
  h3.innerText = book.title 
  cardLi.append(h3)

  let pAuthor = document.createElement('p')
  pAuthor.innerText = book.author 
  cardLi.append(pAuthor)
  let pPrice = document.createElement('p')
  pPrice.innerText = formatPrice(book.price) 
  cardLi.append(pPrice)

  let img = document.createElement('img')
  img.src = book.imageUrl
  cardLi.append(img)

  let btn = document.createElement('button')
  btn.innerText = "Delete"
  cardLi.append(btn)

  const bookList = document.querySelector('#book-list')
  bookList.append(cardLi)

  return cardLi
}

//✅ 7. iterate over all the books in data and show book on page
bookStore.inventory.forEach(book => {
  renderBook(book)
})


