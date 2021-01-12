import React from "react";
import "./Home.css";
import Layout from "../../components/shared/Layout/Layout";
import Carousel from '../../components/Carousel/Carousel'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className="home"></div>
        <Carousel />
    </Layout>
  );
};

export default Home;
