/* ~~~~~~~~~~~~~~~ RENDERING FUNCTIONS ~~~~~~~~~~~~~~~  */
// Header
function renderHeader(store){
    document.querySelector('h1').textContent = store.name
}
// Footer
function renderFooter(store){
    const footerDivs = document.querySelectorAll('footer div')
    footerDivs[0].textContent = store.name
    footerDivs[1].textContent = store.address
    footerDivs[2].textContent = store.hours
}

// One Book Card
function renderBookCard(cardData) {
    // elements
    const li = document.createElement('li')
    const h3 = document.createElement('h3')
    const pAuthor = document.createElement('p')
    const pPrice = document.createElement('p')
    const pInventory = document.createElement('input')
    const btn = document.createElement('button')
    const img = document.createElement('img')

    // populating elements
    h3.textContent = cardData.title
    pAuthor.textContent = cardData.author
    pPrice.textContent = `$${cardData.price}`
    pInventory.type = 'number'
    btn.textContent = 'Delete'
    pInventory.value = cardData.inventory
    img.src = cardData.imageUrl
    li.className = 'card'

    // event listeners
    btn.addEventListener('click',(e)=> handleDelete(cardData.id, e.target.parentElement))
    pInventory.addEventListener('change', (e) => handleUpdateInventory(e.target.value, cardData.id))

    // append
    li.append(h3, pAuthor,pPrice, img, pInventory, btn )
    document.querySelector('#book-list').append(li)
}