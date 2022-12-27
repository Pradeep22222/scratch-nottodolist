import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
export const TaskForm = () => {
  return (
    <div>
      <Form>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
          <Col>
            <Button variant="primary">Primary</Button>{" "}
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
};
