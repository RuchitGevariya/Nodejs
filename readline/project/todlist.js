import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const todo = [];
console.log("todo in data",todo)
const showmenu = () => {
  console.log("\n1.add task");
  console.log("2.view task");
  console.log("3.exit");
  rl.question("choose the option:", handlemenu);
};

const handlemenu = (option) => {
  if (option === "1") {
    rl.question("add task:",(task)=> {
      todo.push(task);
      console.log("todo in data",todo)
      showmenu();
    });
  } else if (option === "2") {
    console.log("your menu:");

    todo.map((task, index) => {
      console.log(`${index + 1},${task}`);
    });
    showmenu();
  } else if (option === "3") {
    console.log("good buy!");
    rl.close();
  } else {
    console.log("invalid task");
  }
};
showmenu();
