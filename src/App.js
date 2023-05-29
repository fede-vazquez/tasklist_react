import { Route, Routes } from "react-router-dom";
import "./App.css";
import mainSection from "./components/mainSection/mainSection";
import RoutesTaskSection from "./components/task_list/RoutesTaskList";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={mainSection} />
        <Route exact path="/tasklist/*" Component={RoutesTaskSection} />
      </Routes>
    </div>
  );
}

export default App;
