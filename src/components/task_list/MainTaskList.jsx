import { useEffect, useState } from "react";
import DateTaskList from "./DateTaskList";
import DatesScrollBar from "./DatesScrollBar";
import SelectMonth from "./SelectMonth";
import SelectedDate from "./SelectedDate";
import dayjs from "dayjs";

function MainTaskList() {
  const [date, setDate] = useState(dayjs());

  const monthCapitalized =
    date.format("MMMM")[0].toUpperCase() + date.format("MMMM").slice(1);

  return (
    <div>
      <SelectMonth actualMonth={monthCapitalized} />
      <DatesScrollBar />
      <SelectedDate dateSelected="Fecha seleccionada" />
      <DateTaskList date="Fecha seleccionada" />
    </div>
  );
}

export default MainTaskList;
