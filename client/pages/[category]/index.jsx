// Bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import CardPostList from "@components/CardPostList/CardPostList";

const index = ({ posts }) => {

  return (
    <Row>
      <Col sm="12">
        <h2 className="h1">Últimas entradas</h2>
      </Col>
      <Col sm="12">
        <CardPostList blogEntries={posts} />
      </Col>
    </Row>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get categories
  const res = await fetch("http://api:1337/categories");
  const categories = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { category: category.name },
  }));

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {

  const res = await fetch(
    `http://api:1337/posts/?category.name=${params.category}`
    );
    const posts = await res.json();

  // Pass post data to the page via props
  return { props: { posts }, revalidate: 1 };
}

export default index;
