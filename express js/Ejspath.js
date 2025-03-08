import { log } from "console";
import express from "express";
import path from 'path'
const app = express();


app.get("/", (req, res) => {
  ////  directory and  file path get method in ejs 
  // console.log(import.meta.dirname)
  // const __filename=new URL(import.meta.url).pathname;
  // console.log(__filename);
  //// how to send file in express.js
  const homePagePath=path.join(import.meta.dirname,"public","index.html");
  console.log(homePagePath);
  
  res.sendFile(homePagePath);

});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server runing on http://localhost:${PORT}`);
});