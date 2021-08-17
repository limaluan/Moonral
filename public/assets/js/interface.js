let newPost = document.getElementById("newpost_title");
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let submit = document.getElementById("submit");

let menuOpen = false;

function toggleMenu() {
    if (!menuOpen){
        newPost.style.top = "50px";

        title.style.display = "block";
        desc.style.display = "block";
        submit.style.display = "block";
    }
}

