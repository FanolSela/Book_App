const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Book = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String, required: true },
    author: {type: String, required: true},
    description: { type: String, required: true },
    price: { type: String, required: true },
    comments: [{
      type: Schema.Types.ObjectId,
      ref: "comment"
    }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('books', Book)