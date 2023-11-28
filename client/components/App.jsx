import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Info from "./Info.jsx";
import Tasks from "./Tasks.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/info" element={<Info />} />
      </Routes>
      <Link to="/info">Info</Link>
    </div>
  );
};

export default App;
