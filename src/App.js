import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Basket from "./pages/Basket";
import History from "./pages/History";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/history" element={<History />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
