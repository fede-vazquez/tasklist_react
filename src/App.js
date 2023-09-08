import React from "react";
import "./App.css";
import RoutesTaskSection from "./components/RoutesTaskList";
import { DayContextProvider } from "./contexts/DayContext";
import { TasksContextProvider } from "./contexts/TasksContext";
import { CompleteTaskContextProvider } from "./contexts/CompleteTasksContext";

function App() {
  return (
    <DayContextProvider>
      <TasksContextProvider>
        <CompleteTaskContextProvider>
          <RoutesTaskSection />
        </CompleteTaskContextProvider>
      </TasksContextProvider>
    </DayContextProvider>
  );
}

export default App;
