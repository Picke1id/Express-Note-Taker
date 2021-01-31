// DEPENDENCIES
const fs = require("fs");
const db = require("../db/db.json")

// GENERATES A UNIQUE ID WHEN NEW NOTES ARE SAVED
const { v4: uuidv4 } = require("uuid");

// EXPORT API ROUTES
module.exports = (app) => {

    // API GET REQUEST TO RETRIEVE DATA FROM THE DATABASE
    app.get("/api/notes", (req, res) => {
        res.send(db);
    });

    // API POST REQUEST TO CREATE NEW NOTE(S)
    app.post("/api/notes", (req, res) => {
        req.body.id = uuidv4();
        var newNote = req.body
        // PUSHING NEW NOTE TO JSON FILE
        db.push(newNote);
        // WRITING NOTE TO db.JSON FILE
        fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
            if (err) throw err;
            // ELSE SEND RESPONSE IF THERE ARE NO ERRORS
            res.send(db); 
        });
    });

    // API DELETE REQUEST TO DELETE NOTE(S)
    app.delete("/api/notes/:id", (req, res) => {
        var noteID = req.params.id
        for (var i = 0; i < db.length; i++) {
            if (noteID === db[i].id) {
                db.splice(i, 1);
            };
        }

        // WRITING NEW db TO THE FILE
        fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
            if (err) throw err;
            // ELSE SEND RESPONSE IF THERE ARE NO ERRORS
            res.send(db);
        });
    });
}