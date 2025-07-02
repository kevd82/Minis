const mongoose = require("mongoose");
const miniDB = "miniDB"

mongoose.connect(`mongodb://localhost/${miniDB}`)
    .then(()=>{
        console.log(`Connected to ${miniDB}`)
    })
    .catch((err)=>{
        console.log(`Problem connecting to ${miniDB}. Here is your error:`, err)
    })

