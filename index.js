function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(data => console.log(data))


  // .then(json => renderBooks(json));
}

function renderBooks(json) {

  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
});

// fetch('https://anapioficeandfire.com/api/books', 
//   {
//     mode:'no-cors'
//   })
//   .then(function(resp){
//     return resp.json()})
//   .then(data => console.log("MY DATA", data))

// fetch('https://anapioficeandfire.com/api/books',
// {
//   method: 'GET',
//   mode: 'no-cors'
// })
//   .then(function(response) {
//     return response.json()
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson))
//   });