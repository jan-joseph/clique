const express = require("express");

const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
	res.json("Welcome");
});

app.listen(PORT, () => console.log("Server running on PORT:" + PORT));
