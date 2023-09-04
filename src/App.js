import React from "react";
import "./App.css";
import RoutesTaskSection from "./components/RoutesTaskList";
import { DayContextProvider } from "./contexts/DayContext";
import { TasksContextProvider } from "./contexts/TasksContext";

function App() {
  return (
    <DayContextProvider>
      <TasksContextProvider>
        <RoutesTaskSection />
      </TasksContextProvider>
    </DayContextProvider>
  );
}

export default App;
