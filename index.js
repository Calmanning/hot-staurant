const express = require("express");
// const path = require("path");
// const apiRoutes = require("./routes/apiRoutes.js")
// const htmlRoutes = require("./routes/htmlRoutes.js")

const app = express();
const PORT = process.env.PORT || 3030;

// helps you get the body a request in JSON format
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(express.static("public"));

// app.use("/", htmlRoutes);
// app.use("/api", apiRoutes);

app.get('/', (req,res) => {
    res.send("Welcome. Now we can get to the real work.");
})

app.listen(PORT, function () {
    console.log("We're listening over at http://localhost:" + PORT);
});