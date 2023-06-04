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

  function newDate(newDateSelected) {
    setDate(newDateSelected);
  }

  return (
    <div>
      <SelectMonth
        key={"SelectedMonth" + date.valueOf()}
        selectedMonth={monthCapitalized}
        newDate={newDate}
      />

      <DatesScrollBar
        key={"DatesScrollBar" + date.valueOf()}
        selectedMonth={date.month()}
        newDate={newDate}
      />

      <SelectedDate key={"SelectedDate" + date.valueOf()} dateSelected={date} />

      <DateTaskList date="Fecha seleccionada" />
    </div>
  );
}

export default MainTaskList;
