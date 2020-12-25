// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Styles
import style from "./cover.module.scss";


const PostCover = () => {

  return (
    <Container fluid className={style.postCover}>
      <Container className="h-100 px-0">
      </Container>
    </Container>
  );
};

export default PostCover;
