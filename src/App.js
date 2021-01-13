import React from "react";
import './App.css'
import NavBar from "./Components/navBar";
import Routes from './Routes'

function App() {
  return (
    <>
      <div className="Container">
        <NavBar />
        <Routes />
      </div>
    </>
  );
}

export default App;
