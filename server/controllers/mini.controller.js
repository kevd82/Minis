const Miniature = require("../models/mini.model");

module.exports = {

    findAllMinis: (req, res) =>{
        Miniature.find()
            .then((allMinis)=>{
                console.log(allMinis);
                res.json(allMinis)
            })
            .catch((err)=>{
                console.log("findAllMinis has failed!");
                res.json({message: "Something went wrong in findAllMinis!", error: err})
            })
    },

    createNewMini: (req, res)=> {
        Miniature.create(req.body)
        .then((newMini)=> {
            console.log(newMini)
            res.json(newMini);
        })
        .catch((err)=> {
            console.log("Something went wrong with createNewMini!");
            res.status(400).json(err)
        })
    },

    findOneMini: (reg, res)=> {
        Miniature.findOne({_id: req.params.id})
        .then((oneMini)=>{
            console.log(oneMini);
            res.json(oneMini);
        })
        .catch((err)=>{
            console.log("findOneMini failed!");
            res.json({message: "Something went wrong with findOneMini!", error: err})
        })
    },

    deleteOneMini:  (req, res)=> {
        Miniature.deleteOne({_id: req.params.id}) 
        .then((deletedMini)=> {
            console.log(deletedMini);
            res.json(deletedMini);
        })
        .catch((err)=> {
            console.log("deleteOneMovie has failed!");
            res.json({message: "Something went wrong with deleteOneMini!", error: err}) 
        })
    },

    updateMini:  (req, res)=> {
        Miniature.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedMini)=> {
            console.log(updatedMini);
            res.json(updatedMini)
        })
        .catch((err)=> {
            console.log("Something went wrong with updateMini!");
            res.status(400).json(err)
        })
    }


}