import { error } from "console";
import https from "https";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const url = `https://v6.exchangerate-api.com/v6/7cdea2e96be8c9fbb385afff/latest/USD`;
const convert = (ammount, rate) => {
  return ammount * rate;
};

https.get(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk;
  
  });
  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;
    rl.question("Enter the Ammount(in usd):", (ammount) => {
     rl.question("Enter The Target Currency(eg.inr,huk,npr):", (currency)=> {
        const rate = rates[currency.toUpperCase()];

        if (rate) {
          console.log(
            `${ammount} usd is aproximately ${convert(ammount,rate)}${currency}`);
        } else {
          console.error("invaild");
        }
        rl.close();
      });
    });
  });
});
