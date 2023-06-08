import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainSection from "./components/mainSection/MainSection";
import RoutesTaskSection from "./components/task_list/RoutesTaskList";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MainSection />} />
        <Route exact path="/tasklist/*" element={<RoutesTaskSection />} />
      </Routes>
    </div>
  );
}

export default App;
