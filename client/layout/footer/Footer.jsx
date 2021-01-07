// Bootstrap
import { Container } from "react-bootstrap";

// Styles
import style from "./Footer.module.scss";

// Utils
import { getCurrentYear } from "@utils/dates";

const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <footer className={`${style.footer}`}>
      <Container>
        <p>©{currentYear} Gerardo Villa.&nbsp;</p>
        <p>Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;
