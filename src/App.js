import React, { Suspense } from "react";
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Links from "./components/Links/Links";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Links />
      </div>
    </Router>
  );
}

export default App;
