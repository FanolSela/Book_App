import React, { useState } from 'react';
import './Form.css'

const Form = (props) => {

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
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        name="name"
        value={review.name}
        onChange={handleChange}
      />
      <input
        name="description"
        value={review.description}
        onChange={handleChange}
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default Form;