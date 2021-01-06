// Bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import CardPost from "@components/CardPost/CardPost";

const CardPostList = ({ blogEntries }) => {
  return (
    <Row>
      {blogEntries.length === 0 ? (
        <Col>
          <p>No existen entradas.</p>
        </Col>
      ) : (
        blogEntries.map((post) => <CardPost post={post} key={post.id} />)
      )}
    </Row>
  );
};

export default CardPostList;
