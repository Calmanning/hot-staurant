const express = require("express");
const path = require("path");
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

//data
    const tables = [
        {
            name: "TheTabler",
            id: 1,
            email: "got@table.teabow",
            phone: "1234567890",
        }
    ];

    const waitlist = [
        {
            name: "noTable",
            id: 2,
            email: "sorry@table.no",
            phone: "0987654321",
        }
    ];

// HTML Routes
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get('/reserve', (req,res) => {
    res.sendFile(path.join(__dirname,"reserve.html"));
})
//END HTML Routes

// API Routes
app.get('/api/tables', (req,res) => {
    res.json(tables);
})

app.get("/api/waitlist", (req,res) => {
    res.json(waitlist);
})

app.post("/reserve", (req, res) => {
    
    console.log(req.body);
    if (tables.length<5){
        tables.push(req.body)
        const responseObj = {
            hasTable: true,
            userData: req.body
        }
        res.json(responseObj);
    } else {
        waitlist.push(req.body)
        const responseObj = {
            hasTable: false,
            userDate: req.body
            }
        res.json(responseObj);
        }
        
})//END API Routes

//server listener
app.listen(PORT, function () {
    console.log("We're listening over at http://localhost:" + PORT);
});