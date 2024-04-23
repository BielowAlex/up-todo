import React from "react";
import { TaskCard } from "../TaskCard";
import style from "./style.module.scss";
import { TaskListFilter } from "../TaskListFilter";
import { useGetUserTaskQuery } from "../../core/api/taskPrivateApi.ts";
import { TaskStatusEnum } from "../../types";
import { useAppSelector } from "../../hooks";
import { formatDateToYYYYMMDD } from "../../utils";
import { Modal } from "../UI/CustomComponents/Modal";
import { CreateTaskForm } from "../CreateTaskForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";

const TaskSection: React.FC = React.memo(() => {
  const selectedDate: string = useAppSelector(
    (state) => state.dateReducer.selectedDate,
  );
  const isCreateTaskModalOpen: boolean = useAppSelector(
    (state) => state.taskReducer.isCreateTaskModalOpen,
  );
  const selectedTaskType: TaskStatusEnum = useAppSelector(
    (state) => state.taskReducer.selectedTaskType,
  );
  const formattedDate = formatDateToYYYYMMDD(new Date(selectedDate));

  console.log(selectedTaskType);

  const { data, isSuccess, refetch } = useGetUserTaskQuery({
    status: selectedTaskType,
    date: formattedDate,
  });

  console.log(formatDateToYYYYMMDD(new Date(selectedDate)));

  React.useEffect(() => {
    console.log(formattedDate);
    refetch();
  }, [refetch, formattedDate]);

  return (
    <section className={style.container}>
      <TaskListFilter />
      <ul className={style.list}>
        {isSuccess && !data.length ? (
          <li className={style.messageBox}>
            <h3 className={style.title}>
              You currently have no To-Do tasks. Feel free to add new tasks to
              get started!
              <FontAwesomeIcon icon={faFaceSmileWink} />
            </h3>
          </li>
        ) : (
          data?.map((el) => (
            <TaskCard
              key={el._id}
              _id={el._id}
              date={el.date}
              status={el.status}
              desc={el.description}
              title={el.title}
            />
          ))
        )}
      </ul>
      <Modal isVisible={isCreateTaskModalOpen} title="Add new Task">
        <CreateTaskForm />
      </Modal>
    </section>
  );
});

export { TaskSection };
