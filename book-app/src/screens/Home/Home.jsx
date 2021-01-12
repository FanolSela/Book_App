import React from "react";
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home"></div>
      <Carousel />
      <div className="home-text">
        <div className="Critics">
          <h4>Critics Say...</h4>
          <p>These manga are the best in the game!</p>
        </div>
        <div className="Well-Written">
          <h4>Well Written Books</h4>
          <p>These mangas are written from the the Greatest mangakas in the history</p>
        </div>
        <div className="New-York-Times">
          <h4>New York Times says...</h4>
          <p>News York Times says this is the future of all literature.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
