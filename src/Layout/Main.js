import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Main = () => {
  return (
    <div className="main">
      <div>
        <Header></Header>
        <div className="container py-4">
            <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
