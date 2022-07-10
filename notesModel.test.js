/**
  @jest-environment jsdom
 */

const NotesModel = require("./notesModel");

describe("NotesModel", () => {
  it("should construct an empty array", () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });

  it("should add notes to a list", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("should remove all notes in a list when it is reset", () => {
    const model = new NotesModel();
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
