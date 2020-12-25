// Bootstrap
import { Row } from "react-bootstrap";

// Components
import CardPost from "@components/CardPost/CardPost";

const CardPostList = ({ blogEntries }) => {
  return (
    <Row>
      {blogEntries.map((post) => (
        <CardPost post={post} key={post.id} />
      ))}
    </Row>
  );
};

export default CardPostList;
