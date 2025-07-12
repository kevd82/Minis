const MiniController = require("../controllers/mini.controller");



module.exports= (app)=> {
    app.get("/api/minis", MiniController.findAllMinis);

    app.post("/api/minis", MiniController.createNewMini);

    app.get("/api/minis/:id", MiniController.findOneMini);

    app.delete("/api/minis/:id", MiniController.deleteOneMini);

    app.put("/api/minis/:id", MiniController.updateMini);
    
}