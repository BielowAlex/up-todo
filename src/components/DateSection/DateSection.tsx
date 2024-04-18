import React from "react";
import style from "./style.module.scss";
import { formatDate } from "../../utils/date/convert-title-date.util.ts";
import { WeekCalendar } from "../WeekCalendar";
import { useAppSelector } from "../../hooks";

const DateSection: React.FC = () => {
  const today: string = useAppSelector(
    (state) => state.dateReducer.selectedDate,
  );

  return (
    <section className={style.container}>
      <h2 className={style.title}>{formatDate(new Date(today))}</h2>
      <WeekCalendar />
    </section>
  );
};

export { DateSection };
