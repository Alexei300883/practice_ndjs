const fs = require("fs")
const path = require("path")

// console.log(path.parse(__filename))
// console.log(path.join(__filename, "test", "..", "//demo.txt"))
const flag = path.join(__filename, "test", "..", "//demo.txt")
console.log(flag)

// создание папки
// const dir = path.join(__dirname, "demo")
// console.log(dir)
// fs.mkdir(dir, (err) => {
//     if(err) throw Error(err)
//     console.log("ok")
// })


const file = path.join(__dirname, "demo", "new3.txt")
const content = "heloo"
const pat = "./demo/new3.txt"
// запись в файл
if(!fs.existsSync(pat)) {
    // создает новый файл
    fs.writeFile(file, content, (err) => {
        if(err) throw Error (err)
        console.log("okgg")
    })
}else{
    // дозаписывает в файл
    fs.appendFile(file, content, (err) => {
        if(err) throw Error (err)
        console.log("ok")
    } )
}
// чтенгие файла
fs.readFile(file, "utf-8", (err, data) => {
    if(err) throw Error (err)
    console.log(data)
} )