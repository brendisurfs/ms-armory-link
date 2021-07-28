const express = require("express");

const app = express();

// listening for some sort of event on localhost:8000
app.post("/", (req, res)=> {
    console.log(`you got response: ${res}`);
});

const PORT = 8000;

app.listen(PORT, ()=> console.log(`app connected on port ${PORT}`));