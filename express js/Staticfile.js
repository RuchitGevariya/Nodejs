import { log } from "console";
import express from "express";
import path from "path";
import {port} from "./env.js"
const app = express();

//static is  serve static file like (images,png,html,css,js) file ,macke sure your file within the public folader

//relative path
// app.use("/",express.static("Public"));

//abosulate path

const publicpath = path.join(import.meta.dirname, "public");


app.use("/", express.static(publicpath));


//  const port = process.env.port;

//// in this we have use .env method and secure the port information
app.listen(port, () => {
  console.log(`server runing on http://localhost:${port}`);
});
