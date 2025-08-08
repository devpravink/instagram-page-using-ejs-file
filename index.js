const express = require("express");

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Api is running  at https:// localhost : ${ port }`);
});

app.use("/hi", (req,res) => {
  res.send("<h1> yes server is running </h1>");
});

app.get("/ig/:username", (req,res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];

  if(data) {
    res.render("instagram.ejs",{ data });
  } else {
    res.render("error.ejs");
  }
  
});