import React, { useState, useEffect }from "react";
import "./Books.css";
import Book from "../../components/Book/Book";
import Layout from "../../components/shared/Layout/Layout";
import { getBooks } from '../../services/books'

const Books = (props) => {
  
  const [queriedBooks, setQueriedBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBooks()
      setQueriedBooks(books.data)
    } 
    fetchBooks()
  }, [])

  const bookJSX = queriedBooks.map((book, index) => (
    <Book
      _id={book._id}
      name={book.name}
      imgURL={book.imgURL}
      price={book.price}
      key={index}
    />
  ));

  return (
    <Layout user={props.user}>
        <div className="books">{bookJSX}</div>
    </Layout>
  );
};

export default Books;
