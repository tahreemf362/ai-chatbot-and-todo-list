const express = require("express");
const path = require("path");

const app = express();

// Static files serve karo (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Cloud Run automatically PORT provide karta hai
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
