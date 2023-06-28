const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
const fileMulter = require("../middleware/file");
const path = require("path")

class Books {
  constructor(
    title = "",
    description = "",
    id = uuid(),
    authors = "",
    favorite = "",
    fileCover = "",
    fileName = "",
    fileBook = ""
  ) {
    this.title = title;
    this.description = description;
    this.id = id;
    this.authors = authors;
    this.favorite = favorite;
    this.fileCover = fileCover;
    this.fileName = fileName;
    this.fileBook = fileBook;
  }
}

const stor = {
  books: [
    {
      title: "",
      description: "",
      id: "3d1b9c75-12ac-4ff3-9c16-d6469af9eaa2",
      authors: "",
      favorite: "",
      fileCover: "",
      fileName: "",
      fileBook: 'public/img/book.png',
    },
    {
      title: "",
      description: "",
      id: "397b1555-a7ea-481e-a279-4f0fb11cf938",
      authors: "",
      favorite: "",
      fileCover: "",
      fileName: "",
      fileBook: 'public/img/book1.png',
    }
  ],
};

router.get("/books", (req, res) => {
  const { books } = stor;
  res.json(books);
});

router.get("/books/:id", (req, res) => {
  const { books } = stor;
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);
  if (idx !== -1) {
    res.json(books[idx]);
  }
});

router.post("/books", (req, res) => {
  const { books } = stor;
  const { title, description, authors, favorite, fileCover, fileName, fileBook } =
    req.body;
  const newBooks = new Books(
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
    fileBook
  );
  books.push(newBooks);
  res.status(201);
  res.json(newBooks);
});

router.put("/books/:id", (req, res) => {
  const { books } = stor;
  const { title, description, authors, favorite, fileCover, fileName } =
    req.body;
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);
  if (idx !== -1) {
    books[idx] = {
      ...books[idx],
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
      fileBook,
    };
    res.json(books[idx]);
  }
});

router.delete("/books/:id", (req, res) => {
  const { books } = stor;
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);
  if (idx !== -1) {
    books.splice(idx, 1);
    res.json("ok");
  }
});

router.post(
  "/books/download",
  fileMulter.single("filedata"),
  (req, res) => {
    if (req.file) {
      const { path } = req.file;
      
        res.json({path});
      }
      res.json();
   
  }
);

router.get("/books/:id/download", (req, res) => {
  const { books } = stor;
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);
  if (idx !== -1) {
    const file = path.join(__dirname, "..",`${books[idx].fileBook}` )
    res.download(file);
  }
});

module.exports = router;
