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
        Miniature.create(req.body)
        .then((newMini)=> {
            console.log(newMini)
            res.json(newMini);
        })
        .catch((err)=> {
            console.log("Something went wrong with createNewMini");
            res.status(400).json(err)
        })
    },

    findOneMini: (reg, res)=> {
        Miniature.findOne({_id: req.params.id})
    }








}