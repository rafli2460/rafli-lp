const express = require("express");
const app = express();
const path = require("path");
const port = 80;

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
  //__dirname : It will resolve to your project folder.
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});