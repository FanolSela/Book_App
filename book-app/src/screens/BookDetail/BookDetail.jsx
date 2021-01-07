import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useParams } from "react-router-dom";
import { getBook } from "../../services/books";
import "./BookDetail.css";
import Form from '../../components/Form/Form'

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBookDetail = async () => {
      const response = await getBook(id);
      setBook(response.data);
    };
    getBookDetail();
  }, []);

  return (
    <Layout>
      <div>
        <div className="BookDetail">
          <div className="Page-Image">
            <img src={book.imgURL} />
          </div>
          <div className="BookDetails">
            {book.name} <br />
            {book.author} <br />
            {book.price} <br />
            {book.description}
          </div>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </Layout>
  );
};

export default BookDetail;
