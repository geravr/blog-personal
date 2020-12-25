import Link from "next/link";

// Bootstrap
import { Col, Card, Badge } from "react-bootstrap";

// Styles
import style from "./CardPost.module.scss";

const CardPost = ({ post }) => {
  return (
    <Col sm="auto" className="my-3 d-flex justify-content-center justify-content-md-start">
      <Card className={style.cardPost}>
        <Card.Body>
          <Card.Title className={`mb-2 ${style.cardPostTitle}`}>
            <Link href={`${post.category.name}/${post.slug}`}>{post.title}</Link>
          </Card.Title>
          <Card.Subtitle className="mb-2">
            {post.tags.map((tag, index) => (
              <Badge
                variant="secondary"
                key={index}
                className={`mr-1 ${style.cardPostTag}`}
              >
                {tag.name}
              </Badge>
            ))}
          </Card.Subtitle>
          <Card.Text className={style.cardPostText}>{post.excerpt}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardPost;
