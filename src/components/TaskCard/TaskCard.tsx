import React from "react";
import style from "./style.module.scss";
import { Button } from "../UI";
import { TaskStatusEnum } from "../../types";
import {
  faBoxArchive,
  faBoxesPacking,
  faCircleCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useDeleteTaskMutation,
  useGetUserTaskQuery,
  useUpdateTaskMutation,
} from "../../core/api/taskPrivateApi.ts";
import { formatDateToYYYYMMDD, transformErrorData } from "../../utils";
import { useAppSelector } from "../../hooks";
import { useDelayUnmount } from "../../hooks/useDelayUnmount.ts";
import cn from "classnames";

type Props = {
  _id: string;
  title: string;
  desc: string;
  status: TaskStatusEnum;
  date: string;
};

const TaskCard: React.FC<Props> = React.memo(
  ({ _id, title, desc, date, status }) => {
    const [isMounted, setIsMounted] = React.useState<boolean>(true);
    const { selectedDate } = useAppSelector((state) => state.dateReducer);
    const isDisabled = new Date(selectedDate).getDate() < new Date().getDate();
    const isArchived = status === TaskStatusEnum.Archived;
    const selectedTaskType = useAppSelector(
      (state) => state.taskReducer.selectedTaskType,
    );

    const isShown = useDelayUnmount(isMounted, 500);

    const [updateTask] = useUpdateTaskMutation();
    const [deleteTask] = useDeleteTaskMutation();
    const { refetch } = useGetUserTaskQuery({
      status: selectedTaskType,
      date: formatDateToYYYYMMDD(new Date(selectedDate)),
    });

    const handleDelete = React.useCallback(async () => {
      try {
        await deleteTask(_id).unwrap();
        setIsMounted(false);
      } catch (e) {
        console.log(transformErrorData(e));
      }
    }, [_id, deleteTask]);

    const handleChangeStatus = React.useCallback(
      async (status: TaskStatusEnum) => {
        try {
          await updateTask({
            _id,
            status,
            title,
            description: desc,
            date,
          }).unwrap();
          setIsMounted(false);
        } catch (e) {
          console.log(transformErrorData(e));
        }
      },
      [_id, date, desc, title, updateTask],
    );

    const handleUnarchive = React.useCallback(async () => {
      try {
        await updateTask({
          _id,
          status: TaskStatusEnum.InProgress,
          title,
          description: desc,
          date: formatDateToYYYYMMDD(new Date(Date.now())),
        }).unwrap();
        setIsMounted((prev) => !prev);
      } catch (e) {
        console.log(transformErrorData(e));
      }
    }, [_id, desc, title, updateTask]);

    const handleArchiveButton = () =>
      status === TaskStatusEnum.Archived
        ? handleUnarchive()
        : handleChangeStatus(TaskStatusEnum.Archived);

    React.useEffect(() => {
      refetch();
    }, [refetch, isShown]);
    return (
      isShown && (
        <li className={cn(style.container, !isMounted && style.hide)}>
          <div className={style.content}>
            <div className={style.task}>
              <h3 className={style.title}>{title}</h3>
              <p
                className={style.desc}
                suppressContentEditableWarning={true}
                contentEditable={true}
              >
                {desc}
              </p>
            </div>
            <div className={style.buttons}>
              {status === TaskStatusEnum.InProgress && (
                <Button
                  variant="link"
                  tooltip="Complete"
                  handleClick={() =>
                    handleChangeStatus(TaskStatusEnum.Completed)
                  }
                  disabled={isDisabled}
                >
                  <FontAwesomeIcon icon={faCircleCheck} />
                </Button>
              )}
              <Button
                variant="link"
                tooltip="Remove"
                handleClick={handleDelete}
                disabled={isDisabled}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              {status !== TaskStatusEnum.Completed && (
                <Button
                  variant="link"
                  tooltip={isArchived ? "Unarchive" : "Archive"}
                  handleClick={handleArchiveButton}
                  disabled={isDisabled}
                >
                  {isArchived ? (
                    <FontAwesomeIcon icon={faBoxesPacking} />
                  ) : (
                    <FontAwesomeIcon icon={faBoxArchive} />
                  )}
                </Button>
              )}
            </div>
          </div>
        </li>
      )
    );
  },
);

export { TaskCard };
