module.exports = {
    posts: [
        { id: "adadaf45", title: "This is a test", description: "Description" },
    ],

    getAll() { return this.posts },

    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description });
    }
}

function generateID() {
    return Math.random().toString(36).substr(8);
}
