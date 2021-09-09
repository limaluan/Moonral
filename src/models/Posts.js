const Database = require('../db/config');

module.exports = {
    async get() {
        let db = await Database();

        let posts = await db.all(`SELECT * FROM posts`);

        await db.close();

        return posts;
    },

    async post(newData) {
        let db = await Database();

        await db.run(`INSERT INTO posts(title, desc)
        VALUES("${newData.title}", "${newData.desc}")`);

        await db.close();
    },

    async delete(postId) {
        let db = await Database();

        await db.open();

        await db.run(`DELETE FROM posts WHERE id = ${postId}`);

        await db.close();
    }
}
