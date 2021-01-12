const mongoose = require("mongoose")
const Schema = mongoose.Schema

let commmentSchema = new Schema({
  name: String,
  description: String,
  book: {
    type: Schema.Types.ObjectId,
    ref: "books"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref:"users"
  },
},
  { timestamps: true }
)

module.exports = mongoose.model("comment", commmentSchema)