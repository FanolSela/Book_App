import React, { useState } from 'react';
import './Form.css'
import { addComment } from '../../services/books'

const Form = (props) => {

  const { bookId } = props

  const [review, setReview] = useState({
    name: '',
    description: '',
  })

  const handleChange = (e) => {
    setReview(prev => { 
      return { ...prev, [e.target.name]: e.target.value }})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await addComment(bookId, review)
    console.log(response)
    props.setReload(prev => !prev)
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={review.name}
        onChange={handleChange}
      />
      <input
        name="description"
        placeholder="Description"
        value={review.description}
        onChange={handleChange}
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Form;