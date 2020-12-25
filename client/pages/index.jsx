import { useState, useEffect } from "react";

// Bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import CardPostList from "@components/CardPostList/CardPostList";

export default function Home() {
  const [blogEntries, setBlogEntries] = useState([]);

  useEffect(() => { 
    const fetchBlogEntries = async () => {
      const response = await fetch('http://localhost:1337/posts/')
      setBlogEntries(await response.json());
    }
    fetchBlogEntries();
   }, [])

  return (
    <Row>
      <Col sm="12">
        <h2 className="h1">Entradas recomendadas!</h2>
      </Col>
      <Col sm="12">
        <CardPostList blogEntries={blogEntries}  />
      </Col>
    </Row>
  );
}
