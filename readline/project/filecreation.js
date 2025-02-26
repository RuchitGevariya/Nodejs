import readline from "readline";
import fs from "fs";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const filecreation = () => {
  rl.question("enter the file name:", (filename) => {
    rl.question("enter the file content:", (filecontent) => {
      fs.appendFile(`${filename}.txt`, filecontent, "utf-8", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(`${filename}.txt,file was created`);
        }
        rl.close();
      });
    });
  });
};

filecreation();
