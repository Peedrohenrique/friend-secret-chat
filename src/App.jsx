import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./router";
//Pop-up de Alerta
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={3000} transition={Slide} />
        <MyRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
