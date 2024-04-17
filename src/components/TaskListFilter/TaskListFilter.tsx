import React, { useCallback } from "react";
import style from "./style.module.scss";
import { TextButton } from "../UI";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faCheckDouble,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { TaskAction } from "../../store";

const TaskListFilter: React.FC = () => {
  const tasksType = useAppSelector(
    (state) => state.taskReducer.selectedTaskType,
  );
  const dispatch = useAppDispatch();

  const handleGetTasks = useCallback(() => {
    dispatch(TaskAction.setListType("tasks"));
  }, [dispatch]);
  const handleGetArchiveTasks = useCallback(() => {
    dispatch(TaskAction.setListType("archive"));
  }, [dispatch]);
  const handleGetCompletedTasks = useCallback(() => {
    dispatch(TaskAction.setListType("done"));
  }, [dispatch]);

  React.useEffect(() => {
    return () => {
      dispatch(TaskAction.setListType("tasks"));
    };
  }, [dispatch]);

  return (
    <div className={style.head}>
      <TextButton
        className={cn(
          style.headContent,
          tasksType === "tasks" && style.headContentActive,
        )}
        handleClick={handleGetTasks}
      >
        Tasks <FontAwesomeIcon icon={faListCheck} />
      </TextButton>
      <TextButton
        className={cn(
          style.headContent,
          tasksType === "done" && style.headContentActive,
        )}
        handleClick={handleGetCompletedTasks}
      >
        Completed <FontAwesomeIcon icon={faCheckDouble} />
      </TextButton>
      <TextButton
        className={cn(
          style.headContent,
          tasksType === "archive" && style.headContentActive,
        )}
        handleClick={handleGetArchiveTasks}
      >
        Archived <FontAwesomeIcon icon={faBoxArchive} />
      </TextButton>
    </div>
  );
};

export { TaskListFilter };
