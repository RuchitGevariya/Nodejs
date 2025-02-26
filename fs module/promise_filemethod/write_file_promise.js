const { log } = require("console");
const fs = require("fs/promises");
const path = require("path");

// const diraddress=__dirname;

// fs.promises
// .readdir(diraddress)
// .then((data)=>console.log(data))
// .catch((err)=>console.error(err));

const filename = "promisefile.txt";
const filepath = path.join(__dirname, filename);
fs.writeFile(filepath, "my name is ruchit")
  .then(console.log("file created"))
  .catch((err) => console.log());

fs.readFile(filepath, "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fs.appendFile(filepath, "\n and i am student of bca.")
  .then(console.log("file updated"))
  .catch((err) => console.log());

fs.unlink(filepath)
  .then(console.log("file was deleted"))
  .catch((err) => console.log(err));
