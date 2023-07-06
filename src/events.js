/* ~~~~~~~~~~~~~~~ EVENT HANDLERS ~~~~~~~~~~~~~~~  */

// post with form
function handleForm(e){
    e.preventDefault()
    const book = {
        title: e.target.title.value,
        author:e.target.author.value,
        price: e.target.price.value,
        imageUrl: e.target.imageUrl.value,
        inventory:e.target.inventory.value,
        reviews:[]
    }
    createResource(book_url, book)
    .then(renderBookCard)
    .catch(e => console.error(e))

}

// patch inventory number with form
function handleUpdateInventory(inventoryNum,id){
    updateResource({inventory: inventoryNum}, `${book_url}${id}`)
    .catch(e => console.error(e))
}

// delete book with button
function handleDelete(id, target){
    deleteResource(`${book_url}${id}`)
    .then(() => target.remove())
    // update the dom pessimistically
    .catch(e => console.error(e))
}
