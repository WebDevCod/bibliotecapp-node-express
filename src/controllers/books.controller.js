import Book from "../models/Books.js";

export const renderBooks = async (req, res) => {
  const books = await Book.find().lean();
  res.render("index", { books: books });
};

export const createBook = async (req, res) => {
  try {
    const book = Book(req.body);
    await book.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderBookEdit = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).lean();
    res.render("edit", { book });
  } catch (error) {
    console.log(error.message);
  }
};

export const editBook = async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  await Book.findByIdAndDelete(id);
  res.redirect("/");
};
