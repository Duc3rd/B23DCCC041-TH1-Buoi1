import React, { useState } from 'react';
import './TodoList.css'; 

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(-1); 

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const addTask = () => {
        if (task.trim()) {
            if (editIndex >= 0) {
                const updatedTasks = tasks.map((t, index) => {
                    if (index === editIndex) {
                        return { text: task, completed: false }; 
                    }
                    return t;
                });
                setTasks(updatedTasks);
                setEditIndex(-1); 
            } else {
                setTasks([...tasks, { text: task, completed: false }]);
            }
            setTask('');
        }
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const editTask = (index) => {
        setTask(tasks[index].text);
        setEditIndex(index);
    };

    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed }; 
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-container">
            <h1>ToDo List</h1>
            <div className="input-container">
                <input 
                    type="text"
                    placeholder="Nhập công việc..."
                    value={task}
                    onChange={handleInputChange}
                    className="task-input"
                />
                <button onClick={addTask} className="add-button">
                    {editIndex >= 0 ? 'Cập nhật' : 'Thêm'}
                </button>
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                        <button onClick={() => toggleComplete(index)} className="complete-button">
                            {task.completed ? 'Chưa hoàn thành' : 'Hoàn thành'}
                        </button>
                        <button onClick={() => editTask(index)} className="edit-button">Sửa</button>
                        <button onClick={() => deleteTask(index)} className="delete-button">Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
