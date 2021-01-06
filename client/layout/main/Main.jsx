import { useRouter } from "next/router";

// Bootstrap
import { Container } from "react-bootstrap";

// Scroll Up
import ScrollToTop from "react-scroll-up";

// Styles
import style from "./Main.module.scss";

// Components
import DefaultCover from "../cover/DefaultCover";
import PostCover from "../cover/PostCover";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Main = ({ children, coverData }) => {
  const { pathname } = useRouter();

  const isHomeOrCategory = pathname === "/" || pathname === "/[category]";
  const isPostSection = pathname === "/[category]/[post]";

  return (
    <main>
      {isHomeOrCategory && <DefaultCover coverData={coverData} />}
      {isPostSection && <PostCover />}
      <Container className={`pt-4 ${style.main}`}>
        {children}
        <ScrollToTop showUnder={160}>
          <span className={style.scrollUp}>
          <FontAwesomeIcon icon={faChevronUp} size="lg" />
          </span>
        </ScrollToTop>
      </Container>
    </main>
  );
};

export default Main;
