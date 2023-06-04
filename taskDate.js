#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const {months} = require("./helpers.js")

const {
  _: params,
  $0,
  ...rest
} = yargs(hideBin(process.argv)).option("date", {
  alias: "dt",
  type: "string",
  description: "Handler date",
}).argv;

const { d, date, m, month, y, year } = rest;
const currentDate = new Date();
let flag;

let num = d || date || m || month;

if (year || y) {
  flag = "year";
} else if (month || m) {
  flag = "month";
} else if (date || d) {
  flag = "date";
}


const handlerDates = (key, com, num) => {
  switch (key) {
    case "year":
      console.log(`${currentDate.getFullYear()} год`);
      break;
    case "month":
      if (com === "add") {
        console.log(months[currentDate.getMonth() + num]);
      } else if (com === "sub") {
        console.log(months[currentDate.getMonth() - num]);
      } else if (com === "current") {
        console.log(months[currentDate.getMonth()]);
      }
      break;
    case "date":
      if (com === "add") {
        console.log(`сегодня ${currentDate.getDate() + num} число`);
      } else if (com === "sub") {
        console.log(`сегодня ${currentDate.getDate() - num} число`);
      } else if (com === "current") {
        console.log(`сегодня ${currentDate.getDate()} число`);
      }
      break;
    default:
      console.log(currentDate);
  }
};

if (params.length) {
  let comand = params.toString();
  handlerDates(flag, comand, num);
}
