"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const classes_2 = __importDefault(require("./classes"));
const p1 = new classes_2.default('João', 30);
console.log(p1);
const m1 = new classes_1.Moto('BMW', 2020);
console.log(m1);
classes_1.coisas.forEach((elemento) => {
    console.log(elemento);
});
console.log(classes_1.coisas.fill('teste'));
