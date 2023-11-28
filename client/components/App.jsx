import React from "react";
import { Route, Routes } from "react-router-dom";
import Info from "./Info.jsx";
import Tasks from "./Tasks.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Tasks />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
};

export default App;
