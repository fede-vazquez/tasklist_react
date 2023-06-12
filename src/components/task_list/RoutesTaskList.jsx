import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import MainTaskList from "./MainTaskList";
import MainTaskForm from "./task-form/MainTaskForm";

function MainTaskSection() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainTaskList />} />
        <Route exact path="/form" element={<MainTaskForm />} />
      </Routes>
    </div>
  );
}

export default MainTaskSection;
