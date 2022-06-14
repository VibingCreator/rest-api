const books = [
    { id: 1, title: "In Search of Lost Time", author: "Marcel Proust", year: 1913 },
    { id: 2, title: "Ulysses", author: "James Joyce", year: 1920 },
    { id: 3, title: "Don Quixote", author: "Miguel de Cervantes", year: 1605 },
    { id: 4, title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", year: 1967 },
    { id: 5, title: "The Great Gatsby", author: "Francis Scott Fitzgerald", year: 1925 }
];

const getAllBooks = () => {
    if (!books.length) {
        return false;
    }

    return books;
}

const getBook = (id) => {
    if (!id) {
        return false;
    }

    const getBookFilter = (book) => book.id == id;
    const book = books.filter(getBookFilter);
    
    if (!book.length) {
        return false;
    }

    return book;
}

const createBook = (body) => {
    if (!body.title || !body.author || !body.year) {
        return false;
    }

    const id = books.length + 1;

    books.push({ 
        id: id,
        title: body.title,
        author: body.author,
        year: body.year 
    });

    return true;
}

const updateBook = (id, body) => {
    if (!id) {
        return false;
    }

    if (!body.title || !body.author || !body.year) {
        return false;
    }

    const bookIndex = books.findIndex((book) => {
        return book.id == id;
    });


    const newBook = {
        id: books[bookIndex].id,
        title: body.title,
        author: body.author,
        year: body.year 
    }

    books[bookIndex] = newBook;

    return true;
}

const removeBook = (id) => {
    if (!id) {
        return false;
    }

    const getBookFilter = (book) => book.id == id;
    const book = books.filter(getBookFilter);
    
    if (!book.length) {
        return false;
    }

    const bookIndex = books.findIndex((book) => {
        return book.id == id;
    });

    books.splice(bookIndex, 1);

    return true;
}

export { getAllBooks, getBook, createBook, updateBook, removeBook };