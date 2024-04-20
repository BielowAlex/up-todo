import React from "react";
import style from "./style.module.scss";
import { DateSection, TaskSection, UserSection } from "../../components";

const HomePage: React.FC = () => {
  return (
    <div className={style.container}>
      <UserSection />
      <DateSection />
      <TaskSection />
    </div>
  );
};

export default HomePage;
