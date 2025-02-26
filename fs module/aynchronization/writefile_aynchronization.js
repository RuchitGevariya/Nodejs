const fs = require("fs");
const path = require("path");

const filename = "fileasync.txt";
const filepath = path.join(__dirname, filename);

fs.writeFile(filepath, "this is data", "utf-8", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("data write sucessflly");
  }
});

fs.readFile(filepath,'utf-8',(err,data)=>{
  if(err){
console.error(err);
  }
  else{
    console.log(data);
  }
})

fs.appendFile(filepath,"\n data is updated",'utf-8',(err)=>{
  if(err){
    console.error(err);
  }
});
const newfilename="newfileasync.txt";
const newfilepath=path.join(__dirname,newfilename);
fs.rename(filepath,newfilepath,(err)=>{
  if(err){
    console.error(err);
  }
});

fs.unlink(newfilepath,(err)=>{
  if(err){
    console.error(err);
  }
else{
  console.log("deleted");
}
});
