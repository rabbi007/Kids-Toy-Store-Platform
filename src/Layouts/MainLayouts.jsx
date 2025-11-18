import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayouts = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <Footer/>
      </div>

      <ToastContainer autoClose={1000} />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default MainLayouts;
