class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
    .then(response => response.json())
    .then(data => {
      callback(data)
    });
}
  }
//fetch.mockResponseOnce(bodyOrFunction, init): fetch - Mock each fetch call independently
//its clever, it knows the function contains fetch
//bug: if the method doesnt contain fetch the test will pass

module.exports = NotesApi;

//console.log correct response


//here are some test changes


//this is the testing branch again. Lets commit our latest work!

//here are some changes someone in another team just added to the main branch

//heres some work on new-branch
