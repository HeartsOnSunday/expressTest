const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("<h1>Whatup Shitheads</h1>"));

app.get("/test/", (req, res) => res.send("<h1>test route</h1>"));

app.get("/test/:num", (req, res) => res.send(`<h1>${req.params.num}</hi>`));

app.get("/test/add/:num", (req, res) => {
  const num = parseInt(req.params.num, 10);
  res.send(`<h1>${5 + num}</h1>`);
});

app.get("/test/subtract/:num", (req, res) => {
  const num = parseInt(req.params.num, 10);
  res.send(`<h1>${num - 5}</h1>`);
});

var port = process.env.PORT || 5050;

// app.listen(port, function() {
//   console.log("App listening on port " + port);
// });

//Refactored version of the above function
app.listen(port, () => console.log(`App listening on port ${port}`));
