import { Card } from "react-bootstrap";

import ReactMarkdown from "react-markdown";
import CodeBlock from "@components/Prism/CodeBlock";

// Styles
import style from "./SinglePost.module.scss";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faCalendarAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Utils
import calculateReadingTime from "@utils/calculateReadingTime";

const SinglePost = ({ postData }) => {
  const date_published = postData.published_at.substring(0, 10);
  const timeToRead = calculateReadingTime(postData.content);
  return (
    <Card className={style.post}>
      <Card.Body className={style.body}>
        <h1>{postData.title}</h1>
        <ul className={style.widgetList}>
          <li>
            <FontAwesomeIcon icon={faUser} size="1x" />{" "}
            <p>{postData.created_by.firstname}</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendarAlt} size="1x" />{" "}
            <p>{date_published}</p>
          </li>
          <li>
            <FontAwesomeIcon icon={faStopwatch} size="1x" /> <p>{timeToRead}</p>
          </li>
        </ul>
        <ReactMarkdown
          source={postData.content}
          renderers={{ code: CodeBlock }}
        />
      </Card.Body>
    </Card>
  );
};

export default SinglePost;
