import { useState } from "react";
import DateTaskList from "./DateTaskList";
import DatesScrollBar from "./DatesScrollBar";
import SelectMonth from "./SelectMonth";
import SelectedDate from "./SelectedDate";
import dayjs from "dayjs";

function MainTaskList() {
  const [date, setDate] = useState(dayjs());
  const dateFormat = date.format("DD/MM/YYYY");

  const monthCapitalized =
    date.format("MMMM")[0].toUpperCase() + date.format("MMMM").slice(1);

  function newDate(newDateSelected) {
    setDate(newDateSelected);
    console.log(newDateSelected.format("DD/MM/YYYY"));
  }

  return (
    <div className={dateFormat}>
      <SelectMonth
        key={"SelectedMonth" + dateFormat}
        selectedMonth={monthCapitalized}
        newDate={newDate}
      />

      <DatesScrollBar
        key={"DatesScrollBar" + dateFormat}
        selectedMonth={date.month()}
        newDate={newDate}
      />

      <SelectedDate key={"SelectedDate" + dateFormat} dateSelected={date} />

      <DateTaskList date="Fecha seleccionada" />
    </div>
  );
}

export default MainTaskList;
