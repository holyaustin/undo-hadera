import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./App";
import "./index.css";
import Explore from "./pages/explore";
import Create from "./pages/create";
import About from "./pages/about";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="explore" element={<Explore />} />
      <Route path="about" element={<About />} />
      <Route path="create" element={<Create />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root"),
);
