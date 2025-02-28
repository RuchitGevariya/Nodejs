import express from "express";
const app = express();


app.get("/", (req, res) => {
  res.send("server was created");
});

const port = 3000;
app.listen(port, () => {
  console.log(`server runing on http://localhost:${port}`);
});
