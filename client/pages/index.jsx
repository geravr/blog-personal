// Bootstrap
import { Row, Col } from "react-bootstrap";

// Utils
import { getBranding, getHome, getPosts } from "@utils/api";

// Components
import Layout from "@layout/Layout";
import CardPostList from "@components/CardPostList/CardPostList";

export default function Home({ branding, coverData, posts }) {
  return (
    <Layout branding={branding} coverData={coverData}>
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
  const posts = await getPosts();

  return { props: { branding, coverData, posts }, revalidate: 1 };
}
