import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export const TaskLine = () => {
  return (
    <div>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>
                <Form.Check aria-label="Checkbox for following text input" />
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                <Form.Check aria-label="Checkbox for following text input" />
            </td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
