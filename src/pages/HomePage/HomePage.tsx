import React from "react";
import style from "./style.module.scss";
import { DateSection } from "../../components";

const HomePage: React.FC = () => {
  return (
    <div className={style.container}>
      <DateSection />
    </div>
  );
};

export default HomePage;
