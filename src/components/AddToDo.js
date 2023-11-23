import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddToDo({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="align-items-center" style={{ marginBottom: '100px'}}>
      <Row>
        <Col xs={9} md={10}>
          <Form.Group controlId="formBasicTask">
            <Form.Control
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a new task"
            />
          </Form.Group>
        </Col>
        <Col xs={3} md={2}>
          <Button variant="primary" type="submit">Add</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddToDo;