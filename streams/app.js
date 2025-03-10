import { error, log } from "console";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { buffer } from "stream/consumers";

const inputfile = path.join(import.meta.dirname, "input.txt");
const outputfile = path.join(import.meta.dirname, "output.txt");

const readblestream = createReadStream(inputfile, {
  encoding: "utf-8",
  highWaterMark:16,
});

const writeblestream = createWriteStream(outputfile);

readblestream.on("data", (chunk) => {
  console.log("buffer(data)", Buffer.from(chunk));
  console.log("data was recived", chunk);
  writeblestream.write(chunk);
});
readblestream.on("end", () => {
  console.log("file was created");
  writeblestream.end();
});

// readblestream.pipe(writeblestream);

//error handler
readblestream.on("error", (error) => {
  console.log(error);
});

writeblestream.on("error", (error) => {
  console.log(error);
});
