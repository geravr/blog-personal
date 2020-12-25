import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Col, Row } from "react-bootstrap";

// Components
import SinglePost from "@components/SinglePost/SinglePost";

const Post = () => {
  const [postData, setPostData] = useState({});

  const {
    query: { post },
  } = useRouter();

  useEffect(() => { 
    const fetchPost = async () => {
      if (typeof post !== 'undefined' ) {    
        const response = await fetch(`http://localhost:1337/posts?slug=${post}`);
        setPostData((await response.json())[0]);
      }
    }
    fetchPost();
   }, [])
  return (
    <Row>
      <Col>
        <SinglePost postData={postData} />
      </Col>
    </Row>
  );
};

export default Post;
