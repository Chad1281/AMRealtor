import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Links from "./components/Links/Links";
import Background from "./components/Background/Background";
import Home from './pages/Home/Home.js';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Background />
        <Links />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
