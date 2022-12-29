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
            <th>Task</th>
            <th>Hrs</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Form.Check aria-label="Checkbox for following text input" />
            </td>
            <td>Netflix</td>
            <td>6</td>
            <td>
              <button>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
