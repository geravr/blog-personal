// Bootstrap
import { Col, Row } from "react-bootstrap";

// Utils
import { getBranding, getPosts, getCategories, getPost } from "@utils/api";

// Components
import Layout from "@layout/Layout";
import SinglePost from "@components/SinglePost/SinglePost";

const Post = ({ branding, categories, post }) => {
  return (
    <Layout branding={branding} categories={categories}>
      <Row>
        <Col className="px-2 px-md-3">
          <SinglePost postData={post} />
        </Col>
      </Row>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = await posts.map((post) => ({
    params: { category: post.category.name.toLowerCase(), post: post.slug },
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const branding = await getBranding();
  const categories = await getCategories();
  const post = await getPost(params.post);

  return { props: { branding, categories, post }, revalidate: 1 };
}

export default Post;
