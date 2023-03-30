import { Router } from "express";
import {
  renderBooks,
  createBook,
  renderBookEdit,
  editBook,
  deleteBook,
} from "../controllers/books.controller.js";

const router = Router();

router.get("/", renderBooks);

router.post("/books/add", createBook);

router.get("/books/:id/edit", renderBookEdit);

router.post("/books/:id/edit", editBook);

router.get("/books/:id/delete", deleteBook);

export default router;
