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

db.sequelize.sync().then(() => {
    console.log("Database connected !")
  })
  .catch((err) => {
    console.log("error while connection to db: \n",err)
  })
// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
//   });

app.get("/", (req, res) => {
    res.json({ message: "Welcome to favoritella application." });
});

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});