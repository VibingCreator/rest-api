import express from "express";
import { books } from "./routes/books.js";

const app = express();

const port = process.env.PORT || 3000;

app.use("/api/", books);

app.listen(port, () => {
    console.log("http://*:3000");
});