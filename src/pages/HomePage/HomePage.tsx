import React from "react";
import style from "./style.module.scss";
import { DateSection, TaskSection } from "../../components";

const HomePage: React.FC = () => {
  return (
    <div className={style.container}>
      <DateSection />
      <TaskSection />
    </div>
  );
};

export default HomePage;
