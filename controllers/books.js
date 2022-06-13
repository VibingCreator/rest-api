const findOne = (req, res, next) => {
    res.send(`GET ${req.originalUrl}`);
}

const findAll = (req, res, next) => {
    res.send(`GET ${req.originalUrl}`);
}

const create = (req, res, next) => {
    res.send(`POST ${req.originalUrl}`);
}

const update = (req, res, next) => {
    res.send(`PUT ${req.originalUrl}`);
}

const remove = (req, res, next) => {
    res.send(`DELETE ${req.originalUrl}`);
}

export { findOne, findAll, create, update, remove };