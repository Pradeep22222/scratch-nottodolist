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
            <Form.Control placeholder="task" className="text-center" />
          </Col>
          <Col>
            <Form.Control placeholder="hrs"  className="text-center"/>
          </Col>
          <Col>
            <Button variant="primary">Add task</Button>
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </div>
  );
};
