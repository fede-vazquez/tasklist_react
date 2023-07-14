import React, { useState } from "react";
import DateTaskList from "./DateTaskList";
import DatesScrollBar from "./DatesScrollBar";
import SelectMonth from "./SelectMonth";
import SelectedDate from "./SelectedDate";
import dayjs from "dayjs";
import AddTaskButton from "./AddTaskButton";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

function MainTaskList() {
  const dateInSession = sessionStorage.getItem("dateInSession")
    ? dayjs(sessionStorage.getItem("dateInSession"), "DD/MM/YYYY")
    : null;

  const [date, setDate] = useState(dateInSession || dayjs().startOf("day"));

  const completeDateFormat = date.format("DD/MM/YYYY");
  const monthDateFormat = date.format("MM/YYYY");

  function newDate(newDateSelected) {
    const newDateFormat = newDateSelected.format("DD/MM/YYYY");

    if (newDateFormat !== completeDateFormat) {
      setDate(newDateSelected);
      sessionStorage.setItem("dateInSession", newDateFormat);
    }
  }

  return (
    <div>
      <SelectMonth
        key={"SelectedMonth" + completeDateFormat}
        date={date}
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

      <DateTaskList date={date} />

      <AddTaskButton dateSelected={completeDateFormat} />
    </div>
  );
}

export default MainTaskList;
