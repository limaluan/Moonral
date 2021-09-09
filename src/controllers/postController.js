const Database = require('../db/config');
const Posts = require('../models/Posts')

module.exports = {
    async create(req, res) {
        return res.render('index', {posts: await Posts.get()});
    },

    async save(req, res) {
        Posts.post(req.body);
        return res.redirect('/');
    },

    async delete(req, res) {
        Posts.delete(req.params.id);
        res.redirect('/');
    }
}
