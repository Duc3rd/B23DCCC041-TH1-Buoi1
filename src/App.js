import React from 'react';
import TodoList from './TodoList/TodoList';
import ImageSearch from './ImageSearch/ImageSearch';
import RandomColor from './RandomColor/RandomColor';

const App = () => {
  return (
    <div>
      <TodoList />
      <ImageSearch />
      <RandomColor />
    </div>
  );
};

export default App;