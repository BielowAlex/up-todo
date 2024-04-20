import React from "react";
import style from "./style.module.scss";
import { formatDate } from "../../utils/date/convert-title-date.util.ts";
import { WeekCalendar } from "../WeekCalendar";

const DateSection: React.FC = () => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>{formatDate(new Date(Date.now()))}</h2>
      <WeekCalendar />
    </section>
  );
};

export { DateSection };
