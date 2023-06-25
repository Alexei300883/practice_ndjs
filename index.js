const express = require("express");



const logger = require("./middleware/logger")
const err404 = require("./middleware/err-404")
const indexRouter = require("./routes/index")
const userRouter = require("./routes/user")
const booksRouter = require("./routes/books")



const app = express();
app.use(express.json());


app.use(logger)
app.use("/", indexRouter)
app.use("/api", userRouter)
app.use("/api", booksRouter)
app.use(err404)

const PORT = process.env.PORT || 3000;
app.listen(PORT);







