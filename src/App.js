// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ToDoList from './components/ToDoList';
// import AddToDo from './components/AddToDo';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (task) => {
//     setTodos([...todos, { id: Date.now(), task, completed: false, timestamp: new Date().toLocaleString() }]);
//   };

//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map(todo => {
//         if (todo.id === id) {
//           return {...todo, completed: !todo.completed};
//         }
//         return todo;
//       })
//     );
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   return (
//     <Container style={{ marginTop: '50px'}}>
//       <Row className="justify-content-md-center">
//         <Col md={8}>
//           <h1 className="text-center" style={{ marginBottom: '40px'}}>TICKTACTIC</h1>
//           <AddToDo addTodo={addTodo}  />
//           <ToDoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
 const [task, setTask] = useState('');
 const [tasks, setTasks] = useState([]);

 const handleChange = (e) => {
    setTask(e.target.value);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
 };

 const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
 };

 return (
    <div className="App">
      <h1>To-Do List</h1>
      <h2>Hello World!!!!!</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChange} placeholder="Enter a task..." />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
 );
}

export default App;
