#!/usr/bin/env node
const readline = require("readline");
const fs = require("fs")
const path = require("path")
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { handlerRandomNumber } = require("./helpers.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { _: param } = yargs(hideBin(process.argv)).argv;

const file = path.join(__dirname, "log",  param.toString())

console.log(
  "Монета брошена, попрбуйте отгадать орел(1) или решка(2) \nдля выхода нажмите 0"
);

rl.on("line", (input) => {
  let hiddenNum = handlerRandomNumber(1, 2);
  console.log(hiddenNum, "загаданное число");
  if (input != hiddenNum && input != 0) {
    console.log("к сожалению вы не угадали((( продолжим?");
    fs.appendFile(file, "bad,", (err) => {
        if(err) throw Error (err)
    } )
  } else if (input == hiddenNum) {
    console.log("вы молодец! продолжим?");
    fs.appendFile(file, "ok,", (err) => {
        if(err) throw Error (err)
    } )
  } else if (input == 0) {
    console.log("до встречи!");
    rl.close();
  }
});
