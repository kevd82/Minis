const MiniController = require("../controllers/mini.controller");



module.exports= (app)=> {
    app.get("/api/minis", MiniController.findAllMinis);
    
}