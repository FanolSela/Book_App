const { Router } = require('express')
const controllers = require('../controllers/books')

const router = Router()

router.get('/', controllers.getBooks)
router.get('/:id', controllers.getBook)
router.post('/:bookId', controllers.createComment)
router.post('/', controllers.createBook)
router.put('/:id', controllers.updateBook)
router.delete('/:id', controllers.deleteBook)
router.delete('/:bookId/:commentId', controllers.deleteComment)

module.exports = router