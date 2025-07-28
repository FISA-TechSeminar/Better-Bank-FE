import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/transactions/:accountId" element={<Transaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
