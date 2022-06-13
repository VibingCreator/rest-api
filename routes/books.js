import express from "express";

const router = express.Router();

router.get("/books", (req, res) => {
    res.send(`GET ${req.originalUrl}`);
});

router.get("/books/:id", (req, res) => {
    res.send(`GET ${req.originalUrl}`);
});

router.post("/books", (req, res) => {
    res.send(`POST ${req.originalUrl}`);
});

router.put("/books/:id", (req, res) => {
    res.send(`PUT ${req.originalUrl}`);
});

router.delete("/books/:id", (req, res) => {
    res.send(`DELETE ${req.originalUrl}`);
});

export { router as books };