import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import MainTaskList from "./MainTaskList";

function MainTaskSection() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainTaskList />} />
      </Routes>
    </div>
  );
}

export default MainTaskSection;
