import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
const axios = require("axios");

const List = () => {
  const url = "http://localhost:8080/users";
  const users = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ListGroup>
        <Button variant="primary" type="submit" onClick={users}>
          Get
        </Button>
        <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default List;
