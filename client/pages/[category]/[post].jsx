// Bootstrap
import { Col, Row } from "react-bootstrap";

// Components
import SinglePost from "@components/SinglePost/SinglePost";

const Post = ({ post }) => {

  return (
    <Row>
      <Col><SinglePost postData={post[0]} /></Col>
    </Row>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get post an category
  const res = await fetch("http://api:1337/posts");
  const posts = await res.json();

  const paths = await posts.map((post) => ({
    params: { category: post.category.name, post: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${process.env.NEXT_STATIC_HOSTNAME_API}/posts?slug=${params.post}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post }, revalidate: 1, };
}

export default Post;
