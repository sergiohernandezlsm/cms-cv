import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";

const List = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <Container>
        <Row>
          <Col>
            {data.map((user) => (
              <ListGroup key={user.id} horizontal>
                <Col>
                  <ListGroup.Item>{user.firstName}</ListGroup.Item>
                </Col>
                <Col>
                  <ListGroup.Item>{user.lastName}</ListGroup.Item>
                </Col>
                <Col>
                  <ListGroup.Item>{user.email}</ListGroup.Item>
                </Col>
              </ListGroup>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default List;
