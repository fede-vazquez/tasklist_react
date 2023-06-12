import React, { useState } from "react";
import DateTaskList from "./DateTaskList";
import DatesScrollBar from "./DatesScrollBar";
import SelectMonth from "./SelectMonth";
import SelectedDate from "./SelectedDate";
import dayjs from "dayjs";
import AddTaskButton from "./AddTaskButton";

function MainTaskList() {
  const [date, setDate] = useState(dayjs());
  const completeDateFormat = date.format("DD/MM/YYYY");
  const monthDateFormat = date.format("MM/YYYY");

  const monthCapitalized =
    date.format("MMMM")[0].toUpperCase() + date.format("MMMM").slice(1);

  function newDate(newDateSelected) {
    const newDateFormat = newDateSelected.format("DD/MM/YYYY");

    if (newDateFormat !== completeDateFormat) {
      setDate(newDateSelected);
    }
  }
  return (
    <div className={completeDateFormat}>
      <SelectMonth
        key={"SelectedMonth" + completeDateFormat}
        selectedMonth={monthCapitalized}
        newDate={newDate}
      />

      <DatesScrollBar
        key={"DatesScrollBar" + monthDateFormat}
        selectedMonth={date.month()}
        dateSelected={date}
        newDate={newDate}
      />

      <SelectedDate
        key={"SelectedDate" + completeDateFormat}
        dateSelected={date}
      />

      <DateTaskList date="Fecha seleccionada" />

      <AddTaskButton />
    </div>
  );
}

export default MainTaskList;
