// not local
import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";

// local
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header" />
        {routes}
      </div>
    </HashRouter>
  );
}

export default App;
