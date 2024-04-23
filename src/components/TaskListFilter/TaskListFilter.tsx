import React, { useCallback } from "react";
import style from "./style.module.scss";
import { TextButton } from "../UI";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faCalendarPlus,
  faCheckDouble,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { TaskAction } from "../../store";
import { TaskStatusEnum } from "../../types";

const TaskListFilter: React.FC = () => {
  const tasksType = useAppSelector(
    (state) => state.taskReducer.selectedTaskType,
  );
  const selectedDate = useAppSelector(
    (state) => state.dateReducer.selectedDate,
  );
  const isDisabled = new Date(selectedDate).getDate() < new Date().getDate();

  const dispatch = useAppDispatch();

  const handleGetTasks = useCallback(() => {
    dispatch(TaskAction.setListType(TaskStatusEnum.InProgress));
  }, [dispatch]);
  const handleGetArchiveTasks = useCallback(() => {
    dispatch(TaskAction.setListType(TaskStatusEnum.Archived));
  }, [dispatch]);
  const handleGetCompletedTasks = useCallback(() => {
    dispatch(TaskAction.setListType(TaskStatusEnum.Completed));
  }, [dispatch]);

  const handleOpenCreateTaskModal = useCallback(() => {
    dispatch(TaskAction.setIsCreateTaskModalOpen(true));
  }, [dispatch]);

  React.useEffect(() => {
    return () => {
      dispatch(TaskAction.setListType(TaskStatusEnum.InProgress));
    };
  }, [dispatch]);

  return (
    <div className={style.head}>
      <TextButton
        className={cn(
          style.headContent,
          tasksType === TaskStatusEnum.InProgress && style.headContentActive,
        )}
        handleClick={handleGetTasks}
      >
        Tasks <FontAwesomeIcon icon={faListCheck} />
      </TextButton>
      <TextButton
        className={cn(
          style.headContent,
          tasksType === TaskStatusEnum.Completed && style.headContentActive,
        )}
        handleClick={handleGetCompletedTasks}
      >
        Completed <FontAwesomeIcon icon={faCheckDouble} />
      </TextButton>
      <TextButton
        className={cn(
          style.headContent,
          tasksType === TaskStatusEnum.Archived && style.headContentActive,
        )}
        handleClick={handleGetArchiveTasks}
      >
        Archived <FontAwesomeIcon icon={faBoxArchive} />
      </TextButton>
      <TextButton
        handleClick={handleOpenCreateTaskModal}
        className={cn(style.headContent, style.headContentActive)}
        disabled={tasksType !== TaskStatusEnum.InProgress || isDisabled}
      >
        Add <FontAwesomeIcon icon={faCalendarPlus} />
      </TextButton>
    </div>
  );
};

export { TaskListFilter };
