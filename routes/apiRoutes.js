// Dependencies
var fs = require("fs");
var path = require("path");
var express = require("express")

// ROUTER

module.exports = function (app) {

    //routes
    //read notes
    app.get("/api/notes", (req, res) => {
        const noteBody = JSON.parse(fs.readFileSync("db/db.json"))
        res.json(noteBody)
        console.log(noteBody);
    });

    //post notes

    app.post("/api/notes", (req, res) => {
        const noteBody = JSON.parse(fs.readFileSync("db/db.json"))
        const noteObj = req.body;
        noteObj.id = Math.floor((Math.random() * 100) + 1);;
        noteBody.push(noteObj);
        fs.writeFileSync("db/db.json", JSON.stringify(noteBody))
        res.json(noteBody);
    });

    //save new notes to db
    app.post("/api/notes", function (req, res) {
        notesdb.push(req.body)
        res.json(true);
    });


    app.delete("/api/notes/:id", function(req, res){

        var chosen = req.params.id;
        notes = JSON.parse(fs.readFileSync("db/db.json"));
      
        for (let i = 0; i < notes.length; i++) {
          if (notes[i].id == chosen){
            notes.splice(i,1)
          }
        }
      
        rewriteFile();
        res.json("")
              
      });
      function rewriteFile(){

        fs.writeFile('./db/db.json', JSON.stringify(notes), function (err) {
          if (err) return console.log(err);
          console.log('Successfully wrote to db.json');
        });

}};
