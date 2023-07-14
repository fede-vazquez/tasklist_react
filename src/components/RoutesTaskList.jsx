import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import MainTaskList from "./MainTaskList";
import MainTaskForm from "./task-form/MainTaskForm";
import MainTaskDetail from "./task-details/MainTaskDetails";
import MainAllTasksList from "./all-tasks-list/MainAllTasksList";

function MainTaskSection() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainTaskList />} />
        <Route exact path="/form" element={<MainTaskForm />} />
        <Route exact path="/edit" element={<MainTaskForm />} />
        <Route exact path="/detail" element={<MainTaskDetail />} />
        <Route exact path="/allTasks" element={<MainAllTasksList />} />
      </Routes>
    </div>
  );
}

export default MainTaskSection;
