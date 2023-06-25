const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
const fileMulter = require("../middleware/file");

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
    new Books(),
    new Books(),
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
  const { title, description, authors, favorite, fileCover, fileName } =
    req.body;
  const newBooks = new Books(
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName
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
  "/books/:id/download",
  fileMulter.single("filedata"),
  (req, res) => {
    if (req.file) {
      const { path } = req.file;
      const { books } = stor;
      const { id } = req.params;
      const idx = books.findIndex((el) => el.id === id);
      if (idx !== -1) {
        books[idx].fileBook = path;
        res.json("файл скачался");
      }
      res.json();
    }
    res.json();
  }
);

// router.get("/books/:id/download", (req, res) => {
//   const { books } = stor;
//   const { id } = req.params;
//   const idx = books.findIndex((el) => el.id === id);
//   if (idx !== -1) {
//     const file = `${__dirname}/public/img/book.png`
//     res.(file);
//   }
// });

module.exports = router;
