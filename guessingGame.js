const readline = require("readline");
const { handlerRandomNumber } = require("./helpers.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const hiddenNum = handlerRandomNumber(1,100)

rl.question("Загадано число в диапазоне от 0 до 100? ", (input) => {
  if (input > hiddenNum) {
    rl.setPrompt("меньше");
    rl.prompt();
  }

  rl.on("line", (input) => {
    if (input > hiddenNum) {
      console.log("меньше");
    }
  });

  if (input < hiddenNum) {
    rl.setPrompt("больше");
    rl.prompt();
  }
  rl.on("line", (input) => {
    if (input < hiddenNum) {
      console.log("больше");
    }
  });

  if (Number(input) === Number(hiddenNum)) {
    rl.setPrompt(`Отгадано число ${hiddenNum}`);
    rl.prompt();
    rl.close();
  }

  rl.on("line", (input) => {
    if (Number(input) === Number(hiddenNum)) {
      console.log(`Отгадано число ${hiddenNum}`);
      rl.close();
    }
  });
});
