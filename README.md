# Note Taker
![GitHub followers](https://img.shields.io/github/followers/mathew-harvey?style=social)

![License type](https://img.shields.io/badge/License-MIT-Blue)

## Table of Contents
- [Demo](##Demo-)
- [Description](##Description-)
- [Motivation](#Motivation-)
- [Installation](#Installation-)
- [Usage](#Usage-)
- [License](#License-)
- [How to Contribute](#How-to-Contribute-)
- [Authors](#Authors-)
- [Questions](#Questions-)
- [Application ScreenShots](#Application-ScreenShots-)
## Demo 💻
![Demo Video](/assets/notetaker.gif)
## Description 🧐
Note taker is an application that can be used to write, save, and delete notes. This application will uses express backend and save and retrieve note data
## Motivation 🚀
I wanted to build a small project using front and  back end fuctionality.
## Installation 🛠️
Run App from here: https://damp-bayou-24626.herokuapp.com/
## Usage 🏃‍♀️
Note taker will uses Node Express backend and save and retrieve note data from a JSON file.The application frontend was created, I built the backend and connected the two.The following HTML routes are used:GET /notes returns the notes.html file. GET * returns the index.html file. The notes are stored in a db.json file on the backend. The fs module is used to read and write to this file. The following API royes were created: GET /api/notes reads the db.json file and return all saved notes as JSON. POST /api/notes receives a new note to save on the request.body, add it to the db.json file, and then return the new note to the client when the save icon is clicked. DELETE /api/notes/:id receives a query paramter containing the id of a note to delete when the trash can next to the corresponding title is clicked. The note is deleted from the list and from the db.json file.
## License 🎓
This application is licensed under: MIT
## How to Contribute 🍰
Clone or fork away! No really, go for it.
## Authors ✨
Mathew Harvey
## Questions 🤔
Please feel free to contact me with any questions you may have: 


### GitHub: https://github.com/mathew-harvey

### Email: mathewharvey@gmail.com

