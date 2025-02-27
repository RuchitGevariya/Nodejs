import readline from "readline";
import fetch from "node-fetch";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const apikey = "676da202a4dcc17cc5e0027f760ed100";
const url = `https://api.openweathermap.org/data/2.5/weather?q=surat&appid=${apikey}`;

const getdata = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);

  console.log(chalk.blue.bold("\t\tweather information"));
  console.log(`\n🌍 Weather in ${data.name}, ${data.sys.country}:`);
  console.log(chalk.yellow`🌡️ Temperature: ${data.main.temp}°C`);
  console.log(`☁️ Condition: ${data.weather[0].description}`);
  console.log(`💨 Wind Speed: ${data.wind.speed} m/s\n`);
};

//ask city names
rl.question("enter the city name:", (city) => {
  getdata(city);
  rl.close();
});
