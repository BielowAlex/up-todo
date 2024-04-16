import React from "react";
import style from "./style.module.scss";
import { formatDate } from "../../utils/date/convert-title-date.util.ts";
import { WeekCalendar } from "../WeekCalendar";

const DateSection: React.FC = () => {
  const today: Date = new Date();

  return (
    <section className={style.container}>
      <h2 className={style.title}>{formatDate(today)}</h2>
      <WeekCalendar />
    </section>
  );
};

export { DateSection };
