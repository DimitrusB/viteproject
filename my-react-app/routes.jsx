import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainPage } from "./src/page/main";




export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  );
};
