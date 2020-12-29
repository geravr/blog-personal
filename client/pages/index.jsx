// Bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import CardPostList from "@components/CardPostList/CardPostList";

export default function Home({ posts }) {
  return (
    <Row>
      <Col sm="12">
        <h2 className="h1">Entradas recomendadas!</h2>
      </Col>
      <Col sm="12">
        <CardPostList blogEntries={posts} />
      </Col>
    </Row>
  );
}

// This function gets called at build time
export async function getStaticProps() {

  const res = await fetch(`${process.env.NEXT_STATIC_HOSTNAME_API}/posts`);
  const posts = await res.json();

  // Pass post data to the page via props
  return { props: { posts }, revalidate: 1 };
}
