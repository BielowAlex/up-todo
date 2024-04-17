import React from "react";
import style from "./style.module.scss";
import { TextButton } from "../UI";
import { TaskStatusEnum } from "../../types";
import {
  faBoxArchive,
  faCircleCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";

type Props = {
  title: string;
  desc: string;
  status: TaskStatusEnum;
};

const TaskCard: React.FC<Props> = React.memo(({ title, desc }) => {
  return (
    <li className={style.container}>
      <div className={style.content}>
        <div className={style.task}>
          <Marquee pauseOnHover className={style.title}>
            <h3 className="task-title">{title}</h3>
          </Marquee>
          <p
            className={style.desc}
            suppressContentEditableWarning={true}
            contentEditable={true}
            onFocus={(e) => {
              console.log(e.target.innerText);
            }}
          >
            {desc}
          </p>
        </div>
        <div className={style.buttons}>
          <TextButton tooltip="Complete">
            <FontAwesomeIcon icon={faCircleCheck} />
          </TextButton>
          <TextButton tooltip="Remove">
            <FontAwesomeIcon icon={faTrash} />
          </TextButton>
          <TextButton tooltip="Archive">
            <FontAwesomeIcon icon={faBoxArchive} />
          </TextButton>
        </div>
      </div>
    </li>
  );
});

export { TaskCard };
