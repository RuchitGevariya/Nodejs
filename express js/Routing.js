import express from "express";
const app = express();

//routing
app.get("/", (req, res) => {
  res.send("home page");
});
app.get("/about", (req, res) => {
  res.send("about page");
});
app.get("/contect", (req, res) => {
  res.send("contect page");
});
//dynamic routing
app.get("/profile/:username", (req, res) => {
  res.send(`hey welcome ${req.params.username}`);
});
const port = 3000;
app.listen(port, () => {
  console.log(`server runing on http://localhost:${port}`);
});
