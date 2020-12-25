import { useRouter } from "next/router";
import Image from "next/image";

// Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Styles
import style from "./cover.module.scss";

// Utils
import { toCapitalize } from "@utils/toCapitalize";

const DefaultCover = () => {
  const {
    query: { category },
    pathname,
  } = useRouter();
  const isCategorySection = pathname === "/[category]";

  const getImage = () => {
    if (category === "devops") {
      return "/server.png";
    }
    return "/coding.png";
  };

  const imageUrl = getImage();

  return (
    <Container fluid className={style.homeCover}>
      <Container className="h-100 px-0">
        <Row className={style.cover}>
          <Col
            lg="6"
            className={`d-flex flex-column justify-content-end text-white ${style.welcome}`}
          >
            <h1>
              {isCategorySection
                ? toCapitalize(category)
                : "Bienvenido a codeando"}
            </h1>
            <p>
              Un espacio donde aprender y practicar con nuevos retos que te
              ayudarán a crecer como desarrollador
            </p>
          </Col>
          <Col
            lg="6"
            className={`d-flex justify-content-center align-items-center ${style.categories}`}
          >
            <Image
              src={imageUrl}
              alt="Picture of the author"
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
