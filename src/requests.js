/* ~~~~~~~~~~~~~~~ FETCH REQUESTS ~~~~~~~~~~~~~~~  */

let book_url = "http://localhost:3000/books/"
let store_url = "http://localhost:3000/stores/"

//GET
function fetchResource(url){
    return fetch(url)
    .then(res => res.json())
}


//POST
function createResource(url, body){
    return fetch(url,{
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    .then(res => res.json())
}

// PATCH
function updateResource(body, url){
    return fetch(url,{
        method: 'PATCH', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    .then(res => res.json())
}

//DELETE
function deleteResource(url){
    return fetch(url,{
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
}