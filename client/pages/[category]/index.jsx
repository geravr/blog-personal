import dynamic from "next/dynamic";

// Bootstrap
import { Row, Col } from "react-bootstrap";

// Utils
import {
  getBranding,
  getCategory,
  getCategories,
  getPostsByCategory,
} from "@utils/api";

// Components
import Layout from "@layout/Layout";
const CardPostList = dynamic(() =>
  import("@components/CardPostList/CardPostList")
);

const index = ({ branding, coverData, posts }) => {
  return (
    <Layout branding={branding} coverData={coverData}>
      <Row>
        <Col sm="12">
          <h2>Últimas entradas</h2>
        </Col>
        <Col sm="12">
          <CardPostList blogEntries={posts} />
        </Col>
      </Row>
    </Layout>
  );
};

export async function getStaticPaths() {
  const categories = await getCategories();

  const paths = categories.map((category) => ({
    params: { category: category.name.toLowerCase() },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const branding = await getBranding();
  const coverData = await getCategory(params.category);
  const posts = await getPostsByCategory(params.category);

  return { props: { branding, coverData, posts }, revalidate: 1 };
}

export default index;
