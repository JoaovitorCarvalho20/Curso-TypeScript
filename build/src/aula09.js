"use strict";
let vteste1 = null; // tipo null 
console.log(vteste1);
let vteste2 = undefined; // tipo undefined
console.log(vteste2);
let vteste3; // tipo unknown
vteste3 = 10;
vteste3 = "teste";
if (typeof vteste3 === "number") {
    console.log(vteste3);
}
if (typeof vteste3 === "string") {
    console.log(vteste3.toUpperCase());
}
