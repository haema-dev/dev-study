import React, { useState } from 'react';
import { Container, StyledInput, SubmitButton } from '../src/style';

function CreateUser() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        if (username.trim() === '' || email.trim() === '') {
            alert('유저 정보를 입력하세요.');
            return;
        }

        const response = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email }),
        });

        if (response.ok) {
            alert('유저 생성 완료');
            setUsername('');
            setEmail('');
        } else {
            alert('유저 생성 실패');
        }
    };

    return (
        <Container>
            <StyledInput
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="유저명"
            />
            <StyledInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
            />
            <SubmitButton onClick={handleSubmit}>유저 생성</SubmitButton>
        </Container>
    );
}

export default CreateUser;
