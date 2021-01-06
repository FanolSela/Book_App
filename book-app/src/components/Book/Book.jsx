import React from 'react';
import './Book.css'
import { Link } from 'react-router-dom'

const Book = (props) => {
  return (
    <>
      <Link className="book" to={`/books/${props._id}`}>
        <img className="book-image" src={props.imgURL} alt={props.name} />
        <div className="book-name">{props.name}</div>
        <div className="price">{`$${props.price}`}</div>
      </Link>
    </>
  );
};

export default Book;