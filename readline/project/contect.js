import readline from "readline";
import fs from "fs";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const store = [
  {name:"ruchir",number:"958545145"},
];
const showMenu= () => {
  console.log("\n1.add contect");
  console.log("2.view contect");
  console.log("3.search");
  console.log("4.delete");
  rl.question("choose the option:", handlemenu);
};

const handlemenu = (option) => {
  if (option === "1") {
    rl.question("Enter name: ", (name) => {
      rl.question("Enter phone: ", (number) => {
        store.push({ name, number });
        console.log("Contact added successfully!");
        showMenu();
      });
    });
  }
  else if(option ==="2"){
    console.log("\t\t Your Contect List:");
    store.forEach((contact, index) => { // Change 'contect' to 'contact'
      console.log(`${index + 1}: ${contact.name} - ${contact.number}`);
      showMenu();
    });
    
  }
  else if (option === "3") {
    rl.question("Search by name: ", (value1) => {
      const results = store.filter((contact) => contact.name === value1);
      
      if (results.length > 0) {
        console.log("Found:", results);
      } else {
        console.log("No matches found.");
      }
      showMenu();
     
    });
  }
};
showMenu();
