import React, { useContext, useState } from "react";
import DateTasksList from "./task-list/DateTasks";
import DatesScrollBar from "./DatesScrollBar";
import SelectMonth from "./SelectMonth";
import SelectedDate from "./SelectedDate";
import dayjs from "dayjs";
import AddTaskButton from "./AddTaskButton";
import customParseFormat from "dayjs/plugin/customParseFormat";
import useDayContext from "../hooks/useDayContext";
dayjs.extend(customParseFormat);

function MainTaskList() {
  // Tomamos los formatos del día del DayContext.
  const { dateSelectedFormats } = useDayContext();

  const dateInSession = sessionStorage.getItem("dateInSession")
    ? dayjs(sessionStorage.getItem("dateInSession"), "DD/MM/YYYY")
    : null;

  const [date, setDate] = useState(dateInSession || dayjs().startOf("day"));

  function newDate(newDateSelected) {
    const newDateFormat = newDateSelected.format("DD/MM/YYYY");

    if (newDateFormat !== dateSelectedFormats.complete) {
      setDate(newDateSelected);
      sessionStorage.setItem("dateInSession", newDateFormat);
    }
  }

  return (
    <section className="row m-auto container-lg p-0 mt-lg-5">
      <article className="p-0 col-md-4">
        <SelectMonth key={"SelectedMonth" + dateSelectedFormats.complete} />

        <DatesScrollBar key={"DatesScrollBar" + dateSelectedFormats.month} />

        <SelectedDate
          key={"SelectedDate" + dateSelectedFormats.complete}
          dateSelected={date}
        />
      </article>

      <article className="p-0 px-md-2 px-lg-4 col-md-8 mt-md-5">
        <DateTasksList
          date={date}
          key={"TasksToDate_" + dateSelectedFormats.complete}
        />
      </article>
      <AddTaskButton dateSelected={dateSelectedFormats.complete} />
    </section>
  );
}

export default MainTaskList;
