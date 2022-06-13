import express from "express";

import { findOne, findAll, create, update, remove } from "../controllers/books.js";

const router = express.Router();

router.get("/books", findAll);

router.get("/books/:id", findOne);

router.post("/books", create);

router.put("/books/:id", update);

router.delete("/books/:id", remove);

export { router as books };