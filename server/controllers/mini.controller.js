const Miniature = require("../models/mini.model");

module.exports = {

    findAllMinis: (req, res) =>{

        Miniature.find()
            .then((allMinis)=>{
                console.log(allMinis);
                res.json(allMinis)
            })
            .catch((err)=>{
                console.log("findAllMinis has failed");
                res.json({message: "Something went wrong in findAllMinis", error: err})
            })
    },

    createNewMini: (req, res)=> {
        Miniature.create()
    }








}