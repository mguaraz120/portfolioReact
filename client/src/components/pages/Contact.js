import React from "react";
import { Container, Jumbotron, Row, Col, Form, Button } from "react-bootstrap";
import Content from "../Content";
import Axios from "axios";
class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailSent: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //prevents user send the same email more than once by accident.
    this.setState({
      disabled: true,
      // emailSent: false,
    });
    Axios.post("/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          disabled: false,
          emailSent: false,
        });
      });
  };

  render() {
    return (
      <div>
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
          <Container fluid={true}>
            <Row className="justify-content-center py-5">
              <Col md={8} sm={12}>
                <h1 className="display-1 font-weight-bolder">Let's Talk</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                as="textarea"
                rows="3"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className="d-inline-block"
              variant="primary"
              type="submit"
              disabled={this.state.disabled}
            >
              Send
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Email Not Sent</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default Contact;
