import { useContext } from "react";
import { DayContext } from "../contexts/DayContext";

export default function useDayContext() {
  const dayContext = useContext(DayContext);

  return dayContext;
}
