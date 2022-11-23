import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Post = ({post}) => {
    const {id, userId, body,title} = post
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title> {id}. {title.slice(0,30)}... </Card.Title>
          <Card.Text>
            {body.slice(0,100)}...
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{userId}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Post;
