
const path=require('path');

console.log(__filename);
console.log(__dirname);

//join the path accoding to system like window(\),os(/)
const filepath=path.join("home","student","result.json");
console.log(filepath);


//this is provide a full detaile and exrect the parth details in object like{root,dir,bae,ext..} 
const parse=path.parse(filepath);
console.log(parse);

//this is provide a file extenstion name what we use
const ext=path.extname(filepath);
console.log(ext);

const resolve=path.resolve(filepath);
console.log(resolve);

