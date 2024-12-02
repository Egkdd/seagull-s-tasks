import React from "react";
import Calculator from "./components/Calculator.jsx";

function App() {

  return (
    <div style={{position: "relative"}}>
      <div className="App" style={{
        position: "absolute", border: "3px solid black", height: "30rem", width: "17rem", 
        left: "30rem", top: "3rem", borderRadius: "2rem"}}>
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
