import React from "react";
import { Footer, Header } from "../../components";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
        <div className="container">
            {children}
        </div>
      <Footer />
    </div>
  );
};

export { MainLayout };
