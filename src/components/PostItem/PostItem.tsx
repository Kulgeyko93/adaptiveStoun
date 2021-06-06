import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const PostItem = ({ item }: any): JSX.Element => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>{item.title}</h1>
        <p>{item.postMessage}</p>
      </Container>
    </Jumbotron>
  );
};

export default PostItem;
