// in this we have performa flie operation using writefilesync

const { log } = require('console');
const fs=require('fs');
const path=require('path');

const filename="text.txt";
const filepath=path.join(__dirname,filename);
console.log(filepath);


//writefile operation
const writefile=fs.writeFileSync(filepath,"data write sucessfully");
console.log(writefile);

//readfile operation
const read=fs.readFileSync(filepath,"utf-8")
console.log(read);
//updatefile operation
const update=fs.appendFileSync(filepath,
  "\n updated data sucess",     
  "utf-8"
);
console.log(update);

//renamefile operation :in this we have create a newfile path to rename this existing file
const newfilename="newtext.txt";
const newfilepath=path.join(__dirname,newfilename);
const rename=fs.renameSync(filepath,newfilepath);
console.log(rename);

//deleting file 
const deleting=fs.unlinkSync(newfilepath);
console.log("file was deleted");

