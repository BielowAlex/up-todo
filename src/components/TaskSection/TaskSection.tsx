import React from "react";
import { taskConstant } from "../../constant/task.constant.ts";
import { TaskCard } from "../TaskCard";
import style from "./style.module.scss";
import { TaskListFilter } from "../TaskListFilter";

const TaskSection: React.FC = React.memo(() => {
  return (
    <section className={style.container}>
      <TaskListFilter />
      <ul className={style.list}>
        {taskConstant.map((el) => (
          <TaskCard
            key={el.id}
            status={el.status}
            desc={el.description}
            title={el.title}
          />
        ))}
      </ul>
    </section>
  );
});

export { TaskSection };
