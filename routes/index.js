const { Router } = require('express')
const booksRouter = require('./books');
const usersRouter = require('./users');

const router = Router();

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', usersRouter);
router.use('/books', booksRouter);

module.exports = router