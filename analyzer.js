#!/usr/bin/env node
const fs = require("fs")
const path = require("path")
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const { _: param } = yargs(hideBin(process.argv)).argv;
const file = path.join(__dirname, "log",  param.toString())

fs.readFile(file, "utf-8", (err, data) => {
    if(err) throw Error (err)
    const res = data.split(",").reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});
    console.log(`Вы выиграли ${res.ok} и проиграли ${res.bad} игр.\nВсего игр ${res.bad + res.ok}`)
    const result = Math. round(res.ok*100/(res.bad + res.ok))
    console.log(`процентное соотношение выигранных партий ${result} %`)
} )

