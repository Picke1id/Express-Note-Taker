// DEPENDENCIES 
const path = require("path");

// EXPORTING HTML ROUTES
module.exports = (app) => {

    // GET REQUEST TO ROUTE TO NOTES
    app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // GET REQUEST TO ROUTE TO HOMEPAGE
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}