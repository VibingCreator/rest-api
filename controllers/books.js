import { getAllBooks, getBook, createBook, updateBook, removeBook } from "../services/books.js";

const findOne = (req, res, next) => {
    const result = getBook(req.params.id);

    if (!result) {
        res.send("book not found");
        return;
    }

    res.send(result);
}

const findAll = (req, res, next) => {
    const result = getAllBooks();

    if (!result) {
        res.send("books not found");
        return;
    }

    res.send(result);
}

const create = (req, res, next) => {
    const result = createBook(req.body);
    
    if (!result) {
        res.send("book not created");
        return;
    }

    res.send("book created");
}

const update = (req, res, next) => {
    const result = updateBook(req.params.id, req.body);

    if (!result) {
        res.send("book not updated");
        return;
    }

    res.send("book updated");
}

const remove = (req, res, next) => {
    const result = removeBook(req.params.id);

    if (!result) {
        req.send("book not deleted");
        return;
    }

    res.send("book deleted");
}

export { findOne, findAll, create, update, remove };