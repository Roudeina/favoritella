const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");



const app = express();


var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync();


app.get("/", (req, res) => {
    res.json({ message: "Welcome to favoritella application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});