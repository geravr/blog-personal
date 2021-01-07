import Image from "next/image";

// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Styles
import style from "./cover.module.scss";

const DefaultCover = ({ coverData }) => {

  const imageCover = coverData.imageCover;
  const sectionDescription = coverData.description;
  const sectionTitle = coverData.title;

  return (
    <Container fluid className={style.homeCover}>
      <Container className="h-100 px-0">
        <Row className={style.cover}>
          <Col
            lg="6"
            className={`d-flex flex-column justify-content-center text-white order-1 order-lg-0 ${style.welcome}`}
          >
            <h1>
              {sectionTitle}
            </h1>
            <p>{sectionDescription}</p>
          </Col>
          <Col
            lg="6"
            className={`d-flex justify-content-center align-items-center order-0 order-lg-1 ${style.categories}`}
          >
            <Image
              src={process.env.API_HOST_CONTAINER + imageCover.url}
              alt={imageCover.alternativeText}
              width={350}
              height={265}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default DefaultCover;
