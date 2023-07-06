/* ~~~~~~~~~~~~~~~ EXTERNAL API ~~~~~~~~~~~~~~~  */
function handleAPIQuery(e){
    e.preventDefault()
    const search = e.target.search.value
    console.log(search)

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=20&key=${apiKEY}`)
    .then(res => res.json())
    .then(apiBooks => {

    
        apiBooks.items.forEach(book => {
        
            //book.volumeInfo.title
            //book.volumeInfo.author -> is an array
            //book.volumeInfo.description
            //console.log(book)
            const div = document.createElement('div')
            const h3 = document.createElement('h3')
            const h4 = document.createElement('h4')
            const p = document.createElement('p')
            
            h3.textContent = book.volumeInfo.title
            
            if(book.volumeInfo.authors) h4.textContent = book.volumeInfo.authors.join(' and ')
            p.textContent = book.volumeInfo.description

            div.className = "search-list"
       
            div.append(h3,h4,p)
            document.querySelector('main').append(div)

        })
    })
}