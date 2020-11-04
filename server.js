
var express = require("express");
var path = require("path");
var fs = require("fs");
const { PRIORITY_BELOW_NORMAL } = require("constants");


var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let id = 1

class note {
  constructor(title, text) {
    this.id = id++;
    this.title = title;
    this.text = text;
    this.create = new Date().toUTCString();
  }
}
const notes = [
  new note("My first ever note", 'hello world'),
  new note('my second ever note', 'goodbye world')
]


app.get("/api/notes/:id", function (req, res) {
  const id = req.params.id;
  res.json(notes.filter(x => x.id === id));
})


app.post("/api/notes", function (req, res) {
  const newNote = new note(req.body.title, req.body.text);
  notes.push(newNote);
  res.json(newNote);
});

app.put("/api/notes/:id", function (req, res) {
  const id = req.params.id;
  const notesIndex = notes.findIndex(x => x.id === id)
  const newNote = new note(req.body.title, req.body.text);
  notes[notesIndex] = newNote;
  res.json(notes);
})

app.delete("/api/notes/:id", function (req, res) {
  const id = req.params.id;
  const notesIndex = notes.findIndex(x => x.id === id)
  notes.splice[notesIndex] = newNote;
  res.json(newNote);
})



// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// app.get("/notes", function(req, res) {
//   res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

// app.get("/api/notes", function(req, res) {
//   return res.json(db);
// });



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});


