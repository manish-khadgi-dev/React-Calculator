import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res, next) => {
  console.log("hey tu tu tu");
  res.send("hey hey kebab");
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Your server running at http://localhost:${PORT}`);
});
