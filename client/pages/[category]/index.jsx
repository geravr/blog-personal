import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// Bootstrap
import { Row, Col } from "react-bootstrap";

// Components
import CardPostList from "@components/CardPostList/CardPostList";
import { route } from "next/dist/next-server/server/router";

const index = () => {
  
  const [blogEntries, setBlogEntries] = useState([]);
  
  const {
    query: { category },
  } = useRouter();
  
  useEffect(() => { 
    const fetchBlogEntries = async () => {
      if (typeof category !== 'undefined' ) {    
        const response = await fetch(`http://localhost:1337/posts/?category.name=${category}`);
        setBlogEntries(await response.json());
      }
    }
    fetchBlogEntries();
   }, [category])

  return (
    <Row>
      <Col sm="12">
        <h2 className="h1">Últimas entradas</h2>
      </Col>
      <Col sm="12">
        <CardPostList blogEntries={blogEntries}  />
      </Col>
    </Row>
  );
};

export default index;
