import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [name, setName] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };