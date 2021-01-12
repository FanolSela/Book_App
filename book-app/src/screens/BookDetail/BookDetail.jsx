import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useParams } from "react-router-dom";
import { getBook } from "../../services/books";
import "./BookDetail.css";
import Form from '../../components/Form/Form'
import Comment from '../../components/Comment/Comment'

const BookDetail = (props) => {
  
  const [reload, setReload] = useState(false)

  const { id } = useParams();

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBookDetail = async () => {
      const response = await getBook(id);
      setBook(response.data);
    };
    getBookDetail();
  }, [reload]);

  return (
    <Layout user={props.user}>
      <div>
        <div className="BookDetail">
          <div className="Page-Image">
            <img src={book.imgURL} alt="Books-img" />
          </div>
          <div className="BookDetails">
            <h3>Title: {book.name}</h3> <br />
            <h4>Price: {book.price}</h4> <br />
            <h4>Author: {book.author}</h4> <br />
            <h4>Description: {book.description}</h4>
          </div>
        </div>
      </div>
      <div className="Comment">
        <Form bookId={book._id} user={props.user} setReload={setReload} />
      </div>
      <div className="Comments">
        {book.comments && book.comments.map((comment) => {
          return <Comment key={comment._id}
            user={props.user} 
            author={comment.user}
            name={comment.name}
            description={comment.description}
            _id={comment._id}
            bookId={book._id}
            setReload={setReload}
          />
        })}
      </div>
    </Layout>
  );
};

export default BookDetail;
