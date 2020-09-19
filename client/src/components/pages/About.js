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
      <Content>
        <p>
          Hello, my name is Alejandro. I am a full-stack developer with some
          experience in Node.js, Express.js, MySQL, MongoDB, Javascript and
          React.
        </p>
        <p>
          My dream is to one day start my own bussiness and become an
          entrepreneur.
        </p>
        <p>
          I am constantly learning new things and gaining more experience in
          MongoDB, Express.js, Node.js and React.
        </p>
        <p>
          Checkout some of my projects. I am currently working on two long term
          projects with two of my friends. I hope to get them done soon.
        </p>
      </Content>
    </div>
  );
}

export default About;
