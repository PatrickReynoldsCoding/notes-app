/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const { hasUncaughtExceptionCaptureCallback } = require("process");

const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

describe("Notes view", () => {
  //  xit("displays two notes", () => {
  //     document.body.innerHTML = fs.readFileSync("./index.html");
  //     const model = new NotesModel();
  //     const view = new NotesView(model);
  //     model.addNote("A first note");
  //     model.addNote("Another one");
  //     expect(view.displayNotes()).toEqual(["A first note", "Another one"]);
  //   });

  it("displays two notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("A first note");
    model.addNote("Another one");

    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("displays two notes added from browser", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);
    const inputEl = document.querySelector("#note-input");
    const inputButtonEl = document.querySelector("#button-note-input");

    inputEl.value = "Get milk and bread from shop";
    inputButtonEl.click();
    inputEl.value = "Get cheese and bread from shop";
    inputButtonEl.click();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
    expect(document.querySelectorAll("div.note")[0].innerText).toEqual(
      "Get milk and bread from shop"
    );
    expect(document.querySelectorAll("div.note")[1].innerText).toEqual(
      "Get cheese and bread from shop"
    );
  });

  it("Removes text from input when button is pressed", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);
    const inputEl = document.querySelector("#note-input");
    const inputButtonEl = document.querySelector("#button-note-input");

    inputEl.value = "Get milk and bread from shop";
    inputButtonEl.click();

    expect(document.querySelector("#note-input").value).toEqual("");
  });
});
