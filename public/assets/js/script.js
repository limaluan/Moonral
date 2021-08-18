function updatePosts() {


    fetch("http://localhost:3001/posts/all")
        .then((res) => res.json())
        .then((json) => {
            let posts = JSON.parse(json);
            let postsElements = '';

            posts.forEach((post) => {
                let postElement = `
                <div class="card-container">
                    <h1 class="title-card">${post.title}</h1>
                    <p class="description-card">${post.description}</p>
                </div>`;

                postsElements += postElement;
            })

            document.querySelector("main").innerHTML = postsElements;
        })
}

function newPost() {
    let titlePost = title.value;
    let descPost = desc.value;
    let post = { title: titlePost, description: descPost };

    let options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(post)
    };

    fetch("http://localhost:3001/posts/new", options)
    .then(updatePosts());
}

updatePosts();
