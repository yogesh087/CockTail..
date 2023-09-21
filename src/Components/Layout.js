import React from "react";
import Footer from "./Footer";
import Header from "./Headers";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{childrens}</div>
      <Footer />
    </>
  );
};

export default Layout;
