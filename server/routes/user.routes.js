const db = require("../models");
const controller = require("../controller/favorites.controller");

module.exports = function(app) {

    app.post("/api/user/addFav", controller.create);

    app.post("/api/user/findAllFav", controller.findAll);

    app.post("/api/user/findOneFav", controller.findOne);

    app.put("/api/user/updateFav", controller.update);

    app.delete("/api/user/deleteFav", controller.delete);


}