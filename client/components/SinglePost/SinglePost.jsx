import { Card, Col, Row } from "react-bootstrap";

import ReactMarkdown from "react-markdown";
import CodeBlock from "@components/Prism/CodeBlock";

// Styles
import style from "./SinglePost.module.scss";

// Icons
import UserIcon from "@icons/UserIcon";
import DateIcon from "@icons/DateIcon";
import ReadingUserIcon from "@icons/ReadingUserIcon";

const SinglePost = ({ postData }) => {
  const date_published = (postData.published_at);
  return (
    <Card className={style.post}>
      <Card.Body className={style.body}>
        <h1>{postData.title}</h1>
        <ul className={style.widgetList}>
          <li>
            <UserIcon size="25" color="secondary" /> <p>{postData.owner}</p>
          </li>
          <li>
            <DateIcon size="25" color="secondary" /> <p>{date_published}</p>
          </li>
          <li>
            <ReadingUserIcon size="30" color="secondary" /> <p>15 min.</p>
          </li>
        </ul>
        <ReactMarkdown source={postData.content} renderers={{ code: CodeBlock }} />
      </Card.Body>
    </Card>
  );
};

export default SinglePost;
