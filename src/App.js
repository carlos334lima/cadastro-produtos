import React from "react";

import NavBar from "./Components/navBar";
import Home from "./views/home";

function App() {
  return (
    <>
      <div className="Container">
        <NavBar />
        <Home />
      </div>
    </>
  );
}

export default App;
