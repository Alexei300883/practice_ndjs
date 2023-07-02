const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
const fileMulter = require("../middleware/file");
const path = require("path");

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
      title: "Мертвые души",
      description: "",
      id: "3d1b9c75-12ac-4ff3-9c16-d6469af9eaa2",
      authors: "Николай Гоголь",
      favorite: "",
      fileCover: "",
      fileName: "",
      fileBook: "public/img/book.png",
    },
    {
      title: "Война и мир",
      description: "",
      id: "397b1555-a7ea-481e-a279-4f0fb11cf938",
      authors: "Лев Толстой",
      favorite: "",
      fileCover: "",
      fileName: "",
      fileBook: "public/img/book1.png",
    },
  ],
};

router.get("/", (req, res) => {
  const { books } = stor;
  res.render("books/index", {
    title: "BOOK",
    books: books,
  });
});

router.get("/:id", (req, res) => {
  const { books } = stor;
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);
  if (idx === -1) {
    res.redirect("/404");
  }
  res.render("books/view", {
    title: "BOOK | view",
    books: books[idx],
  });
});

router.get("/create", (req, res) => {
  res.render("books/create", {
    title: "BOOK | create",
    books: {},
  });
});

router.post("/create", (req, res) => {
  const { books } = stor;
  const {
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
    fileBook,
  } = req.body;
  const newBook = new Books(
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
    fileBook
  );
  books.push(newBook);
  res.redirect("/books");
});

router.get("/update/:id", (req, res) => {
  const { books } = stor;
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
  }

  res.render("books/update", {
    title: "BOOK | view",
    books: books[idx],
  });
});

router.post("/update/:id", (req, res) => {
  const { books } = stor;
  const { id } = req.params;
  const {
    title,
    description,
    authors,
    favorite,
    fileCover,
    fileName,
    fileBook,
  } = req.body;
  const idx = books.findIndex((el) => el.id === id);

  if (idx === -1) {
    res.redirect("/404");
  }
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
  res.redirect(`/books/${id}`);
});

router.post("/delete/:id", (req, res) => {
  const { books } = stor;
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);
  if (idx === -1) {
    res.redirect('/404');
  }
  books.splice(idx, 1);
  res.redirect(`/books`);
});



module.exports = router;
