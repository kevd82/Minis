const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: "http://localhost:3000"
}))

require("./config/mongoose.config")
//require("./routes/mini.routes")

app.listen(8000, ()=>console.log("Connected to port 8000"))