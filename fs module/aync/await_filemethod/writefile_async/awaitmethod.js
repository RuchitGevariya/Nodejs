const { writeFile } = require("fs");
const fs = require("fs/promises");
const path = require("path");

const filename = "await.txt";
const filepath = path.join(__dirname, filename);

const write = async () => {
  try {
    await fs.writeFile(filepath, "my name is ruchit", "utf-8");
    console.log("file was created");
  } catch (err) {
    console.log(err);
  }
};

write();

const read = async () => {
  try {
    const data = await fs.readFile(filepath, "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
read();

const update = async () => {
  try {
    await fs.appendFile(filepath, "\n data is updated!");
    console.log("data was updated sucessfully");
  } catch (err) {
    console.log(err);
  }
};
update();

const deleted = async () => {
  try {
    await fs.unlink(filepath);
  } catch (err) {
    console.log(err);
  }
};

deleted();
