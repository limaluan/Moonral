let newPostText = document.getElementById("newpost_title");
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let submit = document.getElementById("submit");

let menuOpen = false;

function toggleMenu() {
    if (!menuOpen) {
        newPostText.style.top = "50px";

        title.style.display = "inline-block";
        desc.style.display = "inline-block";
        submit.style.display = "inline-block";
    }
}

