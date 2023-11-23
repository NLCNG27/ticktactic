import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

function ToDoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div style={{ marginBottom: '30px'}}>
        <ListGroupItem
            className="d-flex justify-content-between align-items-center"
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
        <div>{todo.task}</div>
        <div>
            <Button style={{ marginRight: '10px'}} variant="outline-success" size="sm" onClick={() => toggleComplete(todo.id)}>Toggle</Button>
            <Button variant="outline-danger" size="sm" onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </div>
        </ListGroupItem>
        <div><small className='text-muted'>{todo.timestamp}</small></div>
    </div>
  );
}

export default ToDoItem;