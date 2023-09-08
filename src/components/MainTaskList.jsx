import React from "react";
import DateTasksList from "./task-list/DateTasks";
import DatesScrollBar from "./dates-scroll-bar-nav/DatesScrollBar";
import SelectMonth from "./SelectMonth";
import SelectedDate from "./SelectedDate";
import dayjs from "dayjs";
import AddTaskButton from "./AddTaskButton";
import customParseFormat from "dayjs/plugin/customParseFormat";
import useDayContext from "../hooks/useDayContext";
dayjs.extend(customParseFormat);

function MainTaskList() {
  // Tomamos los formatos del día del DayContext.
  const { complete: completeDateFormat, monthYear: monthYearFormat } =
    useDayContext().dateSelectedFormats;

  return (
    <section className="row m-auto container-lg p-0 mt-lg-5">
      <article className="p-0 col-md-4">
        <SelectMonth key={"SelectedMonth" + completeDateFormat} />

        <DatesScrollBar key={"DatesScrollBar" + monthYearFormat} />

        <SelectedDate key={"SelectedDate" + completeDateFormat} />
      </article>

      <article className="p-0 px-md-2 px-lg-4 col-md-8 mt-md-5">
        <DateTasksList key={"TasksToDate_" + completeDateFormat} />
      </article>
      <AddTaskButton dateSelected={completeDateFormat} />
    </section>
  );
}

export default MainTaskList;
