import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

import Content from "../Content";

function About() {
  return (
    <div>
      <Jumbotron className="bg-transparent jumbotron-fluid p-0">
        <Container fluid={true}>
          <Row className="justify-content-center py-5">
            <Col md={8} sm={12}>
              <h1 className="display-1 font-weight-bolder">About me</h1>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Content></Content>
    </div>
  );
}

export default About;
