const Book = require('../models/book')
const db = require('../db/connection')
const Comment = require('../models/comment')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getBooks = async (req, res) => {
  try {
    const books = await Book.find()
    res.json(books)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getBook = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id).populate("comments")
    if (book) {
      return res.json(book)
    }
    res.status(404).json({ message: 'Product not found!' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createBook = async (req, res) => {
  try {
    const book = await new Book(req.body)
    await book.save()
    res.status(201).json(book)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const updateBook = async (req, res) => {
    const { id } = req.params;
    await Book.findByIdAndUpdate(id, req.body, { new: true }, (error, book) => {
      if (error) {
        return res.status(500).json({ error: error.message })
      }
      if (!book) {
        return res.status(404).json({ message: 'Book not found!' })
      }
      res.status(200).json(book)
    })
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Book.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Book deleted')
    }
    throw new Error('Book not found')
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createComment = async (req, res) => {
  try {
    const { bookId } = req.params
    const book = await Book.findById(bookId)
    const user = await User.findOne({ username: req.body.username })
    if (book && user) {
      const comment = await new Comment({ ...req.body, user: user._id ,book: bookId })
      await comment.save()
      book.comments.push(comment._id)
      await book.save()
      res.status(201).json(book)
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

const deleteComment = async (req, res) => {
  try {
    const { bookId, commentId } = req.params
    const book = await Book.findById(bookId)
    const comment = await Comment.findById(commentId)
    const commentIndex = book.comments.indexOf(commentId)
    book.comments.splice(commentIndex, 1)
    await book.save()
    await comment.delete()
    res.status(201).json(book)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getBook,
  getBooks,
  createBook,
  updateBook,
  deleteBook,
  createComment,
  deleteComment
}