#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { months } = require("./helpers.js");

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

const num = d || date || m || month;

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
      return `${currentDate.getFullYear()} год`;
    case "month":
      if (com === "add") {
        return months[currentDate.getMonth() + num];
      } else if (com === "sub") {
        return months[currentDate.getMonth() - num];
      } else if (com === "current") {
        return months[currentDate.getMonth()];
      }
      break;
    case "date":
      if (com === "add") {
        return `результат ${currentDate.getDate() + num} число`;
      } else if (com === "sub") {
        return `результат ${currentDate.getDate() - num} число`;
      } else if (com === "current") {
        return `сегодня ${currentDate.getDate()} число`;
      }
      break;
    default:
      return currentDate;
  }
};

if (params.length) {
  const comand = params.toString();
  const result = handlerDates(flag, comand, num);
  console.log(result);
}