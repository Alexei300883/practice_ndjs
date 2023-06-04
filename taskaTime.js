#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const {
  _: params,
  $0,
  ...rest
} = yargs(hideBin(process.argv).slice(2))
  .option("date", {
    alias: "dt",
    type: "string",
    description: "Handler date",
  }).argv


const { d, date, m, month, y, year } = rest;
const currentDate = new Date();
let flag;
if (year || y) {
  flag = "year";
} else if (month || m) {
  flag = "month";
} else if (date || d) {
  flag = "date";
}

const handlerPeriodeDate = () => {
    
}

const handlerDates = (key, com) => {
  switch (key) {
    case "year":
      console.log("year");
      break;
    case "month":
      console.log("month");
      break;
    case "date":
      console.log("date");
      break;
    default:
      console.log("undef");
  }
};

if (params) {
  let comand = params.toString()
  handlerDates(flag, comand);
}

console.log(params, $0, rest);
console.log("hhkahkslnaolnfeo")
