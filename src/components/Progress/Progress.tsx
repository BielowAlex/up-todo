import React from "react";
import style from "./style.module.scss";
import { useAppSelector } from "../../hooks";
import { useGetProgressQuery } from "../../core/api/taskPrivateApi.ts";
import { calculatePercentage } from "../../utils";

const Progress: React.FC = () => {
  const selectedDate = useAppSelector(
    (state) => state.dateReducer.selectedDate,
  );
  const { data } = useGetProgressQuery(selectedDate);

  return (
    <div className={style.container}>
      <h2 className={style.title}>
        {data && data.total
          ? `Your progress ${data.completedTask} / ${data.total}`
          : "You currently have no To-Do tasks"}
      </h2>
      <div className={style.progress}>
        <span
          className={style.progressLine}
          style={{
            width: `${data ? calculatePercentage(data.completedTask, data.total) : "0%"}`,
          }}
        />
      </div>
    </div>
  );
};

export { Progress };
