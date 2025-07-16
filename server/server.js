const express = require("express");
const app = express();
const cors = require("cors");



app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: "http://localhost:3000"
}))

require("./config/mongoose.config")
require("./routes/mini.routes")(app)







app.listen(8000, ()=>console.log("Port 8000 is conquered!") );