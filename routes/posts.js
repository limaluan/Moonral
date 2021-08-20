const express = require('express');
const cors = require('cors');
const posts = require("../models/posts");
const route = express.Router();

express.urlencoded();

route.use(cors({origin: `http://localhost:3001`}))

route.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
})

route.post("/new", express.json(), (req, res) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post has been added.")
})

route.delete("/delete", express.json(), (req, res) => {
    let id = req.body.id;

    posts.deletePost(id);

    res.send("Post has been deleted.")
})

module.exports = route;