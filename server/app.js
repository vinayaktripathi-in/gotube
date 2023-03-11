const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("https://www.youtube.com/watch?v=JXc0g4SXSpo", (req, res) => {
  res.sendFile("https://www.youtube.com/watch?v=JXc0g4SXSpo", {
    root: __dirname,
  });
});

app.listen(4000, () => {
  console.log("listening on port 4000...");
});
