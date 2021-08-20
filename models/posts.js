module.exports = {
    posts: [],

    // Returns all posts
    getAll() { return this.posts },

    // Create a post in "posts" array
    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description });
    },

    // Delete a post of "posts" array
    deletePost(id){
        this.posts.forEach((post,i)=>{
            if (post.id == id){
                this.posts.splice(i, 1);
            }
        })
    }
}

// Generate a random ID
function generateID() {
    return Math.random().toString(36).substr(8);
}
