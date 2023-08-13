import React from "react";
import "./App.css";
import RoutesTaskSection from "./components/RoutesTaskList";
import { DayContextProvider } from "./contexts/DayContext";

function App() {
  return (
    <DayContextProvider>
      <RoutesTaskSection />
    </DayContextProvider>
  );
}

export default App;
