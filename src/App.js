import React from 'react';
import './App.css';
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import VisibilityFilter from './components/visibilityFilter'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <center><div className="App">
      <h1>welcome Todo App</h1>
      <AddTodo/>
      <TodoList/>
      <VisibilityFilter/>
    </div></center>
    </Provider>
  );
}

export default App;
