const EventEmitter = require("events");
const { buildConnector } = require("undici-types");

const emitter = new EventEmitter();

////without aruguments .on and.emit

emitter.on("greet", () => {
  console.log(`hello`);
});

emitter.emit("greet");

// ////with aruguments .on and.emit
// emitter.on("greet",(user)=>{
//   console.log(`hello ,${user}`);

// })
// emitter.emit("greet","Ruchit");

// //arugument as object form
// emitter.on("greet",(userdata)=>{
//   console.log(`hello, ${userdata.user}, your password is ${userdata.password}`);

// })
// emitter.emit("greet",{user:"Ruchit",password:"12345"});

