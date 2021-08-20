let closeButton = document.getElementsByClassName("close-button"); // get close-button element

// Refresh and get posts to the screen
function updatePosts() {


    fetch("http://192.168.1.2:3001/posts/all")
        .then((res) => res.json())
        .then((json) => {
            let posts = JSON.parse(json);
            let postsElements = '';

            if (posts.length !== 0) {

                posts.forEach((post) => {
                    let postElement = `
                    <div class="card-container">
                        <div class="close-button" onclick="deletePost()"><h1>X<span class="sr-only">${post.id}</span></h1></div>
                        <h1 class="title-card">${post.title}</h1>
                        <p class="description-card">${post.description}</p>
                    </div>`;

                    postsElements += postElement;
                })

                // Adds posts to the element "main"
                document.querySelector("main").innerHTML = postsElements;
            }

            else {
                // Set placeholder mensage in element "main"
                document.querySelector("main").innerHTML = `
                    <div class="posts-placeholder">
                        <h1>Parece que você ainda não postou nada :(</h1>
                    </div>`
            }
        })
}

// Create a new post
function newPost() {
    let titlePost = title.value;
    let descPost = desc.value;
    let post = { title: titlePost, description: descPost };

    // Check title format
    if (titlePost.length == 0 || titlePost.length > 20) {
        title.value = '';
        title.placeholder = "Deve conter entre 1 e 20 caracteres.";

        // Check description format
    } else if (descPost.length === 0 || descPost.length > 312) {
        desc.value = '';
        desc.placeholder = "Deve conter entre 1 e 312 caracteres."

        // Post the post
    } else {

        let options = {
            method: "POST",
            headers: new Headers({ "content-type": "application/json" }),
            body: JSON.stringify(post)
        };

        fetch("http://192.168.1.2:3001/posts/new", options)
            .then(() => {
                title.value = '';
                title.placeholder = "Título";
                desc.value = '';
                desc.placeholder = "Descrição";
                updatePosts()
            });
    }
}

// Delete a post
function deletePost() {
    for (let element of closeButton) {
        element.addEventListener('click', (e) => {
            console.log(e.target)
            try {
                const id = { id: e.target.children[0].innerText }; // get id of the post clicked
                let options = {
                    method: "DELETE",
                    headers: new Headers({ "content-type": "application/json" }),
                    body: JSON.stringify(id)
                };
                fetch("http://192.168.1.2:3001/posts/delete", options)
                    .then(() => { updatePosts() })
            } catch { };
        })
    }
}

// Initial config
updatePosts();
