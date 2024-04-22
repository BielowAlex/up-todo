import React from "react";
import style from "./style.module.scss";
import { WeekCalendar } from "../WeekCalendar";
import { useAppSelector } from "../../hooks";
import { formatDate } from "../../utils";
import { Progress } from "../Progress";

const DateSection: React.FC = () => {
  const currentDay = useAppSelector((state) => state.dateReducer.selectedDate);

  return (
    <section className={style.container}>
      <h2 className={style.title}>
        {currentDay && formatDate(new Date(currentDay))}
      </h2>
      <WeekCalendar />
      <Progress />
    </section>
  );
};

export { DateSection };
