import React, { useCallback } from "react";
import style from "./style.module.scss";
import { createPortal } from "react-dom";
import { TextButton } from "../../Buttons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TaskAction } from "../../../../store";
import { useAppDispatch } from "../../../../hooks";

type Props = {
  children: React.ReactNode;
  title?: string;
  isVisible: boolean;
};

const Modal: React.FC<Props> = ({ children, title, isVisible }) => {
  const dispatch = useAppDispatch();

  const handleCloseCreateTaskModal = useCallback(() => {
    dispatch(TaskAction.setIsCreateTaskModalOpen(false));
  }, [dispatch]);

  return (
    isVisible &&
    createPortal(
      <div className={style.back}>
        <dialog className={style.container}>
          <div className={style.head}>
            <h2 className={style.title}>{title}</h2>
            <TextButton
              className={style.btn}
              handleClick={handleCloseCreateTaskModal}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </TextButton>
          </div>
          {children}
        </dialog>
      </div>,
      document.body,
    )
  );
};

export { Modal };
