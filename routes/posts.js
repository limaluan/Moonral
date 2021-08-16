const express = require('express');
const posts = require("../models/posts");
const route = express.Router();

express.urlencoded();


route.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
})

route.post("/new", express.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post has been added.")
})


module.exports = route;