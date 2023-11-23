import React from "react";
import ToDoItem from "./ToDoItem";
import ListGroup from "react-bootstrap/ListGroup";

function ToDoList({ todos, toggleComplete, deleteTodo }) {
    return (
        <div>
            {todos.length > 0 && <h2 className="text-center">Your Todos</h2> }
            <ListGroup>
                {todos.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                ))}
            </ListGroup>
        </div>
    );
}

export default ToDoList;
