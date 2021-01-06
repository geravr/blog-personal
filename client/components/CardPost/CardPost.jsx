import Link from "next/link";

// Bootstrap
import { Col, Card, Badge } from "react-bootstrap";

// Styles
import style from "./CardPost.module.scss";

const CardPost = ({ post }) => {
  const postUrl = `${post.category.name.toLowerCase()}/${post.slug}`;
  return (
    <Col
      sm="auto"
      className="my-3 d-flex justify-content-center justify-content-md-start"
    >
      <Link href={postUrl} passHref>
        <a>
          <Card className={style.cardPost}>
            <Card.Body>
              <Card.Title className={`mb-2 ${style.cardPostTitle}`}>
                <h3>{post.title}</h3>
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
              <Card.Text className={style.cardPostText}>
                {post.excerpt}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </Link>
    </Col>
  );
};

export default CardPost;
