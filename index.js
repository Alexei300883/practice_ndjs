const express = require("express");

const logger = require("./middleware/logger")
const err404 = require("./middleware/err-404")
const booksRouter = require("./routes/books")
const indexRouter = require('./routes/index');



const app = express();
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");


app.use(logger)
// app.use('/public', express.static(__dirname+'/public'))
app.use('/', indexRouter);
app.use("/books", booksRouter)
app.use(err404)

const PORT = process.env.PORT || 3000;
app.listen(PORT);







