import React, { useState, useEffect } from 'react';
import './RandomColor.css';


const colorNames = {
    '#ffffff': 'Trắng',
    '#000000': 'Đen',
    '#ff0000': 'Đỏ',
    '#00ff00': 'Xanh lá',
    '#0000ff': 'Xanh dương',
    '#ffff00': 'Vàng',
    '#ff00ff': 'Hồng',
    '#00ffff': 'Xanh cyan',

};

const RandomColor = () => {
    const [currentColor, setCurrentColor] = useState('#ffffff'); 
    const [history, setHistory] = useState([]); 
    const [autoChange, setAutoChange] = useState(false); 

    useEffect(() => {
        let intervalId;
        if (autoChange) {
            intervalId = setInterval(() => {
                generateRandomColor();
            }, 1000); 
        }
        return () => clearInterval(intervalId);
    }, [autoChange]);

    const generateRandomColor = () => {
        const colorKeys = Object.keys(colorNames);
        const randomColor = colorKeys[Math.floor(Math.random() * colorKeys.length)];
        const colorName = getColorName(currentColor);
        if (colorName !== 'Không xác định' && currentColor !== randomColor) {
            setHistory(prevHistory => [...prevHistory, colorName]); 
        }

        setCurrentColor(randomColor); 
    };

    const revertToPreviousColor = () => {
        if (history.length > 0) {
            const previousColorName = history[history.length - 1];
            const previousColorCode = Object.keys(colorNames).find(key => colorNames[key] === previousColorName);
            setCurrentColor(previousColorCode || '#ffffff'); 
            setHistory(history.slice(0, history.length - 1)); 
        }
    };

    const toggleAutoChange = () => {
        setAutoChange(!autoChange);
    };

    const getColorName = (color) => {
        return colorNames[color] || 'Không xác định'; 
    };

    return (
        <div className="bai3-container">
            <div className="color-display">
                <div className="action-buttons">
                    <button onClick={generateRandomColor} className="color-button">Tạo màu ngẫu nhiên</button>
                    <button onClick={revertToPreviousColor} className="color-button">Quay lại màu trước</button>
                    <button onClick={toggleAutoChange} className="color-button">
                        {autoChange ? 'Dừng tự động' : 'Tự động đổi màu'}
                    </button>
                </div>
            </div>
            <div className="history-container">
                <div className="columns">
                    <div className="color-column">
                        <h2>Màu hiện tại</h2>
                        <div className="color-box" style={{ backgroundColor: currentColor }}>
                            <p className="current-color">{getColorName(currentColor)}</p>
                        </div>
                    </div>
                    <div className="history-column">
                        <h2>Lịch sử màu sắc</h2>
                        <div className="history-scroll">
                            <ul>
                                {history.map((colorName, index) => (
                                    <li key={index}>{colorName}</li> 
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomColor;
