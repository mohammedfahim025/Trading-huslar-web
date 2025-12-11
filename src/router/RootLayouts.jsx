import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import footerBg from "../assets/footerBg.png"
const RootLayouts = () => {
  return (
    <div>
     
      <Outlet></Outlet>
      <div className="bg-black"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "normal",
        }}
      >

      <Footer></Footer>
      </div>
    </div>
  );
};

export default RootLayouts;
