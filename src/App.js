import React from 'react';
import TodoList from './TodoList/TodoList';
import ImageSearch from './ImageSearch/ImageSearch';
import RandomColor from './RandomColor/RandomColor';
import './App.css'; 

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="todolist-container">
                    <TodoList />
                </div>
                <div className="image-search-container">
                    <h2>Tìm Kiếm Hình Ảnh</h2>
                    <ImageSearch />
                </div>
                <div className="random-color-container">
                    <h2>Random Color</h2>
                    <RandomColor />
                </div>
            </div>
        </div>
    );
}

export default App;
