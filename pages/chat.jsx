import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
let socket;

export default function Chat() {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    useEffect(() => {
    socket = io();
    socket.on('message', ({ name, message }) => {
        setChat([...chat, { name, message }]);
    });
    return () => {
        socket.off('message');
    };
    }, [chat]);

    const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('message', { name: 'User', message });
    setMessage('');
    };

    return (
    <div>
        <form onSubmit={sendMessage}>
        <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="메시지 입력"
        />
        <button type="submit">보내기</button>
        </form>
        <div>
        {chat.map(({ name, message }, index) => (
            <div key={index}>
            <h3>{name}: {message}</h3>
            </div>
        ))}
        </div>
    </div>
    );
}