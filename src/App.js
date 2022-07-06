import React, { Suspense } from "react";
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Links from "./components/Links/Links";
import Background from "./components/Background/Background";

import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Background />
        <Links />
        <Jumbotron />
      </div>
    </Router>
  );
}

export default App;
