// DEPENDENCIES
const express = require("express");

// CREATING APP
const app = express();

// SETTING THE PORT
const PORT = process.env.PORT || 3000;

// SETTING UP EXPRESS APP FOR DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); 

// ROUTES FOR API AND HTML
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// LISTENER TO START SERVER
app.listen(PORT, () => console.log("App listening on PORT: ${PORT}"));
