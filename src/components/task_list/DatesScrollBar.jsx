import React from "react";

import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");

function DatesScrollBar() {
  const date = dayjs().format("dddd DD MMMM YYYY");
  console.log(date);

  return <p className="text-white">{date}</p>;
}

export default DatesScrollBar;
