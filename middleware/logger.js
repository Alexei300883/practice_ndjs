const fs = require("fs")
const os = require("os")

module.exports = (req, res, next) => {
   const now = Date.now()
   const {url, mehtod} = req

   const data = `${now} ${mehtod} ${url}`

   fs.appendFile("server.log", data+os.EOL, (err) => {
     if(err) throw err; 
   })

   next()
}