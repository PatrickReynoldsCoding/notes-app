class NotesView {
  constructor(model, api) {
    this.api = api;
    this.model = model;
    this.bodyEl = document.querySelector("body");

    document
      .querySelector("#button-note-input")
      .addEventListener("click", () => {
        const newNote = document.querySelector("#note-input").value;
        this.addNewNote(newNote);
        document.querySelector("#note-input").value = "";
      });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }
  
  
  //delete this after if not needed
  testDisplay() {
    return this.model.getNotes();
  }


  resetList() {
    document.querySelectorAll(".note").forEach((element) => {
      element.remove();
    });
  }
  displayNotesFirstTime() {
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = "note";
      this.bodyEl.append(noteEl);
    });
  }
  displayNotes() {
    this.resetList();
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = "note";
      this.bodyEl.append(noteEl);
    });
  }

  displayNotesFromApi() {
  this.api.loadNotes((responseData) => {
        responseData.forEach((note) => {
      this.model.addNote(note);
    });
    this.displayNotesFirstTime();
   });
  }
}

module.exports = NotesView;
