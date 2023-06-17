const fs = require("fs")

const readerStream = fs.createReadStream("package.json");

// чтение файла
let data 
readerStream
.setEncoding("UTF8")
.on("data" , (chank) => {
    data +=chank
})
.on("end", () => {
    console.log("end", data)
})


const content = "coooo \n"
// записываем
const writerStr = fs.createWriteStream("output.txt")
writerStr.write(content, "UTF8")
writerStr.end()

writerStr.on("finish", () => {
    console.log("finish")
})

writerStr.on("close", () => {
    console.log("close")
})

writerStr.on("error", () => {
    console.log("error")
})

// чтение
let readStr1 = fs.createReadStream("package.json")
let writeStr2 = fs.createWriteStream("output.txt")
// перенаправление потоков
readStr1.pipe(writeStr2)