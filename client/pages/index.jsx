import dynamic from "next/dynamic";

// Bootstrap
import { Row, Col } from "react-bootstrap";

// Utils
import { getBranding, getHome, getCategories, getPosts } from "@utils/api";

// Components
import Layout from "@layout/Layout";
const CardPostList = dynamic(() =>
  import("@components/CardPostList/CardPostList")
);

export default function Home({ branding, coverData, categories, posts }) {
  return (
    <Layout branding={branding} coverData={coverData} categories={categories}>
      <Row>
        <Col sm="12">
          <h2>Entradas recomendadas!</h2>
        </Col>
        <Col sm="12">
          <CardPostList blogEntries={posts} />
        </Col>
      </Row>
    </Layout>
  );
}

export async function getStaticProps() {
  const branding = await getBranding();
  const coverData = await getHome();
  const categories = await getCategories();
  const posts = await getPosts();

  return { props: { branding, coverData, categories, posts }, revalidate: 1 };
}
