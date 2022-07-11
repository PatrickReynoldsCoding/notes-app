const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks();

describe('NotesAPI class', () => {
  it('test', () => {
    
    expect(2+2).toBe(4);
    })
  it('calls fetch and loads data', async () => {
    
    //remove async if this doesnt work
    const notesApi = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
       name: 'This note is coming from the server'
    }
       ));

   
      expect(notesApi.loadNotes()).toBe('This note is coming from the server');
    
  })
//our loadnotes function gives our fetch data to a callback function. 
//So in the test above, we write our test as this callback.
//the mockResponseOnce intercepts the actual fetch request and sends the 
//fake data we mocked on line 14, and to compare.
//Like many things in coding, it's a quite clever and innovative way to test our Api
})