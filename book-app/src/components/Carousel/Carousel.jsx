import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./Carousel.css";
import { getBooks } from "../../services/books";

const Carousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      const books = booksData.data;
      const bookImages = books.map((book) => {
        return { url: book.imgURL };
      });
      setImages(bookImages);
    };
    fetchBooks();
  }, []);

  return (
    <div className="slider">
      <div className="slider-content">
        {images[0] && (
          <SimpleImageSlider
            images={images}
            width={335}
            height={520}
            showBullets={true}
            useGPURender={true}
            showNavs={true}
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
