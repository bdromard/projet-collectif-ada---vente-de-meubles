module.exports = app => {
    const users = require("../controllers/users.controller.js");

    let router = require("express").Router();

    // Une route pour créer un nouveau meuble 
    router.post("/", users.create);

    // On détermine l'URL pour notre API 
    app.use('/api/users', router);
}