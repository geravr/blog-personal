import React from "react";
import { Container } from "react-bootstrap";

// Styles
import style from "./Main.module.scss";

const Main = ({ children }) => {
  return (
    <main>
      <Container className={`pt-4 ${style.main}`}>{children}</Container>
    </main>
  );
};

export default Main;
