//Data 
let newString = "string1" + "string2"

const inventory = [
  {
    id: 1,
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marjin Haverbeke',
    price: 10.00,
    reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
    inventory: 10,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 2,
    title: 'JavaScript & JQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett',
    price: 45.75,
    reviews: [{userID: 15, content:'good way to learn JQuery'}],
    inventory: 2,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
  },
  {
    id: 3,
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    price: 36.00,
    reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
    inventory: 8,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 4,
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 25.50,
    reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
    inventory: 0,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
  },
  {
    id: 5,
    title: 'You Don’t Know JS',
    author: 'Kyle Simpson',
    price: 6.00,
    reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
    inventory: 7,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
  }, 
  {
    id: 6,
    title: 'Learn Enough JavaScript to Be Dangerous',
    author: 'Michael Hartl',
    price: 24.00,
    reviews: [{userID: 50, content:'pretty good'}],
    inventory: 5,
    imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'
  },
  {
    id: 7,
    title: 'Cracking the Coding Interview',
    author: 'Gayle Laakmann McDowell',
    price: 49.95,
    reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID: 20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
    inventory: 20,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
  }
]

//✅ 1. Create hello world using REGULAR functions
function helloWorld(){
  console.log("hello world!")
  //return "Hello World!"
}

//make sure to return from helloWorld, otherwise undefinedTest may save as undefined
let undefinedTest = helloWorld() 
console.log(undefinedTest)


//✅ 2. For Easley's bookstore, create formatPrice(price)
function formatPrice(price) { //ex. price = 3.333333
  //make string in the format $x.xx
  //rounded properly , limit to 2 decimal spaces
  let fixedPrice = price.toFixed(2)
  //add $
  let dollarPrice = `$${fixedPrice}`
  //return it (such that formatPrice will evaluate to a value)
  return `$${price.toFixed(2)}`
}


//✅ 3. Make an arrow function version of formatPrice
//curly braces if explicit return, no curlies if implicit return
const arrowFormatPrice = (price) => {
  let fixedPrice = price.toFixed(2)
  //add $
  let dollarPrice = `$${fixedPrice}`
  //return it (such that formatPrice will evaluate to a value)
  return `$${dollarPrice}`
}

//✅ 4. WE DO: create a blurb() function that accepts a book as an argument and logs a message in the following format:
//'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for $10.00'
/*
  book = {
    id: 1,
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Marjin Haverbeke',
    price: 10.00,
    reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
    inventory: 10,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
  }
*/
const blurb = (book) => {
  //'Eloquent JavaScript: A Modern Introduction to Programming by Marjin Haverbeke is on sale for $10.00'
  let title = book.title 
  let price = book.price 
  let formattedPrice = formatPrice(price) //formatPrice(price) spit out $10.00
  return `${title} is on sale for ${formattedPrice}`
}

//✅ 5. Call formatPrice on an array of prices

//✅ 5a. Create an array
let priceList = [2.2342, 15.235, 9283.255]
formatPrice(3.3333)
formatPrice(2.3824)
formatPrice(10.283)

formatPrice(price[0])
formatPrice(price[1])
formatPrice(price[2])

//✅ 5b. Use a for loop to iterate over prices
//a loop that runs for each thing in priceList
//start 0, end at the end of price list, increment by 1
console.log(priceList.length)
for(let i = 0; i < priceList.length; i++){ // 3
  console.log(i) 
  console.log(priceList[i]) 
  console.log(formatPrice(priceList[i]))

}

//console.log(formatPrice(2.3423 + 235.300))
//✅ 5c. Use .forEach to iterate over prices
//array.forEach(el => cbFunction)
let forEachReturnValue = priceList.forEach(price => console.log(formatPrice(price)))

//✅ 5d. Use .map to iterate over prices
//price represents the current element .map is at 
//if formatPrice didn't return anything, we'd get an array of undefineds
//because formatPrice didn't spit out anything to replace the current element with
//array.map(el => cbFunction)
let mapPrice = priceList.map(price => formatPrice(price))


//✅ 5e. using .map, for each book in inventory, return blurb(book)
//output: ['Eloquent JavaScript: A Modern Introduction to Programming is on sale for $10.00', ...]
let blurbs = inventory.map(book => blurb(book))

//✅ 6. Create a version of myMap that uses a for loop to mimic .map
//input: array, callback function
//output: a new array

//Here is one solution for the above:
function myMap(array, cb){
  const newArray = []
  for(let i = 0; i < array.length; i++){
    newArray.push(cb(array[i]))
  }
  return newArray;
}
