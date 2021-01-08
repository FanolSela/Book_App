import React from 'react';
import { deleteComment } from '../../services/books' 
import { useHistory } from 'react-router-dom'

const Comment = (props) => {

  const history = useHistory()

  const { name, description, _id, bookId } = props  

  const handleDelete = async (e) => {
    e.preventDefault()
    const response = await deleteComment(bookId, _id)
    console.log(response)
    history.push(`/book/${bookId}`)
    props.setReload(prev => !prev)
  }

  return (
    <div className="Comment-Section">
      <h4>{name}</h4>
      <p>{description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Comment;