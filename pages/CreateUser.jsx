import React, { useState } from 'react';
import { Container, StyledInput, SubmitButton } from '../src/components/style';

function CreateUser() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        if (id.trim() === '' || name.trim() === '') {
            alert('유저 정보를 입력하세요.');
            return;
        }

        const response = await fetch('https://dev-study-seven.vercel.app/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, name }),
        });

        if (response.ok) {
            alert('유저 생성 완료');
            setId('');
            setName('');
        } else {
            alert('유저 생성 실패');
        }
    };

    return (
        <Container>
            <StyledInput
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="유저아이디"
            />
            <StyledInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="유저닉네임"
            />
            <SubmitButton onClick={handleSubmit}>유저 생성</SubmitButton>
        </Container>
    );
}

export default CreateUser;
