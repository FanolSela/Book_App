const { Router } = require('express')
const controllers = require('../controllers/books')

const router = Router()

router.get('/', controllers.getBooks)
router.get('/:id', controllers.getBook)
router.post('/', controllers.createBook)
router.put('/:id', controllers.updateBook)
router.delete('/:id', controllers.deleteBook)

module.exports = router