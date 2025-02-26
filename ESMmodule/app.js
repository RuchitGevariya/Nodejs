import { log } from "console";

////default export method
//import mult from "./logic.js";

////name export method in this we have give {}
// import {mult}from "./logic.js"

///arugument export
import { add, sub, div, mult } from "./logic.js";
import * as math from "./logic.js";
console.log(math.mult(1, 20));
console.log(math.add(1, 20));
console.log(math.sub(1, 20));
console.log(math.div(1, 20));

// .........................................................................

////total 3 method are use to export module

//1.default export
//2.name export
//3.arugument export or destructuring method
