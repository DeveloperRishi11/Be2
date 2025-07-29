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

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome {name || 'Friend'}! 👋
          </h1>
          <input
            type="text"
            placeholder="Enter your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Counter Section */}
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Counter Game</h2>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-4">{count}</div>
            <div className="space-x-4">
              <button
                onClick={() => setCount(count - 1)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                -1
              </button>
              <button
                onClick={() => setCount(0)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                +1
              </button>
            </div>
          </div>
        </div>

        {/* Todo Section */}
        <div className="bg-green-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Todo List</h2>
          
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Add a new task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={addTodo}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Add
            </button>
          </div>

          <div className="space-y-2">
            {todos.map(todo => (
              <div key={todo.id} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="w-4 h-4 text-green-600"
                />
                <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}
            {todos.length === 0 && (
              <p className="text-gray-500 text-center py-4">No tasks yet. Add one above!</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-600">
          <p>Built with React ⚛️ | Tasks: {todos.length} | Counter: {count}</p>
        </div>
      </div>
    </div>
  );
}