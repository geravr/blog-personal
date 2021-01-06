import React from "react";

// Bootstrap
import { Container } from "react-bootstrap";

// Styles
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${style.footer}`}>
      <Container className="d-flex justify-content-center">
        <div>©2021 Gerardo Villa | Todos los derechos reservados.</div>
      </Container>
    </footer>
  );
};

export default Footer;
