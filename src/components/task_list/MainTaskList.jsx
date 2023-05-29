import SelectMonth from "./SelectMonth";
import SelectedDate from "./SelectedDate";

function MainTaskList() {
  return (
    <div>
      <SelectMonth actualMonth="Mes actual" />
      <SelectedDate dateSelected="Fecha seleccionada" />
    </div>
  );
}

export default MainTaskList;
