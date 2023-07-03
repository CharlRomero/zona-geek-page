import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import { Home } from "./pages/Home.jsx";
import { Phone } from "./pages/Phone.jsx";

import "./sass/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/phone" element={<Phone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
