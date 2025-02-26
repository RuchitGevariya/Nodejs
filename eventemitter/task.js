const { log } = require("console");
const EventEmitter = require("events");
const emitter = new EventEmitter();


const eventcounter={
  "user-login":0,
  "user-purches":0,
  "user-profileupdate":0,
  "user-logout":0,
}

emitter.on("login", (userdata) => {
  console.log(
    `user name is ${userdata.user},and password is ${userdata.password}  `
  );

});

emitter.on("purches", (purches) => {
  console.log(`user name is ${purches.user},and purchesing a ${purches.items} `);
});


emitter.on("profileUpdate",(update) => {
  console.log(
    `user name is ${update.oldusername} update that profile  ${update.newusername} `
  );
});

emitter.on("logout", (userdata) => {
  console.log(`user ${userdata.user},is logout on ${userdata.date} `);
});







//call 

//login
emitter.emit("login", { user: "ruchit", password: "ruchit@1234" },eventcounter["user-login"]++);
emitter.emit("login", { user: "raju", password: "raju@1234" },eventcounter["user-login"]++);
console.log("total login user",eventcounter["user-login"]);


//purches
emitter.emit("purches",{ user: "raju", items: "laptop" },eventcounter["user-purches"]++)
console.log("purches items total ",eventcounter["user-purches"]);

//update

emitter.emit("profileUpdate",{oldusername:"raju",newusername:"raju goda"
},eventcounter["user-profileupdate"]++);
console.log("update profile value",eventcounter["user-profileupdate"]);


//logout
emitter.emit("logout", { user: "raju", date:new Date()},eventcounter["user-logout"]++,eventcounter["user-login"]--);
console.log("user logout",eventcounter["user-logout"]);
console.log("remaining login user",eventcounter["user-login"]);