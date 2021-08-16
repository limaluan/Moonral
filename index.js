const PORT = 3001;
const express = require('express');
const posts = require('./routes/posts');

const app = express();

app.use("/posts", posts);
app.use("/", express.static("public"));

app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Running server on port: ${PORT}`);
})
