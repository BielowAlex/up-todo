import React from "react";
import style from "./style.module.scss";
import cn from "classnames";
import { v4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { formatDateToYYYYMMDD } from "../../utils/date/formatDateToYYYYMMDD.ts";
import { dateAction } from "../../store";

type WeekDate = {
  id: string;
  date: Date;
};

const WeekCalendar: React.FC = () => {
  const { selectedDate } = useAppSelector((state) => state.dateReducer);
  const dispatch = useAppDispatch();

  const getWeekStart = (date: Date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(date.setDate(diff));
  };

  const generateWeekDates = (startOfWeek: Date) => {
    return Array.from({ length: 7 }).map((_, index) => {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + index);
      return { id: v4(), date };
    });
  };

  const today = new Date();
  const weekStart = getWeekStart(new Date());
  const weekDates: WeekDate[] = generateWeekDates(weekStart);

  React.useEffect(() => {
    dispatch(dateAction.setSelectedDate(formatDateToYYYYMMDD(today)));
  }, []);

  return (
    <div className={style.container}>
      {weekDates.map(({ date, id }) => (
        <button
          type="button"
          key={id}
          className={cn(style.day, date < today && style.past)}
          onClick={() =>
            dispatch(dateAction.setSelectedDate(formatDateToYYYYMMDD(date)))
          }
        >
          <span className={style.weekday}>
            {date.toLocaleString("en-US", { weekday: "short" })}
          </span>
          <span
            className={cn(
              style.date,
              formatDateToYYYYMMDD(date) === selectedDate && style.today,
            )}
          >
            {date.getDate()}
          </span>
        </button>
      ))}
    </div>
  );
};

export { WeekCalendar };
