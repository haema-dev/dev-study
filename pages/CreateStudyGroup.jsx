import React, { useState } from 'react';
import {Container, StyledInput, SubmitButton} from "../src/components/style";

export default function CreateStudyGroup() {
    const [groupName, setGroupName] = useState('');

    const handleSubmit = async () => {
        if (groupName.trim() === '') {
            alert('스터디 그룹 이름을 입력하세요.');
            return;
        }

        const response = await fetch('/api/study-groups', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: groupName }),
        });

        if (response.ok) {
            alert('스터디 그룹 생성 완료');
            setGroupName(''); // 성공 후 입력 필드 초기화
        } else {
            alert('스터디 그룹 생성 실패');
        }
    };

    return (
        <Container>
            <StyledInput
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="스터디 그룹 이름"
            />
            <SubmitButton onClick={handleSubmit}>그룹 생성</SubmitButton>
        </Container>
    );
}