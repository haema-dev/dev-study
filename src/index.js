import React from 'react';
import ReactDOM from 'react-dom';
import CreateStudyGroup from "./CreateStudyGroup";
import JoinStudyGroup from "./JoinStudyGroup";

const studyGroups = [
    { id: 1, name: '스프링 스터디' },
    { id: 2, name: '노드 스터디' },
    { id: 3, name: '자바 스터디' },
    { id: 4, name: 'CS 스터디' },
    { id: 5, name: '코딩테스트 스터디' },
    { id: 6, name: 'AI 스터디' },
];

// App 컴포넌트를 #root 엘리먼트에 렌더링
ReactDOM.render(
    <React.StrictMode>
        <CreateStudyGroup />
        <JoinStudyGroup groups={studyGroups} />
    </React.StrictMode>,
    document.getElementById('root')
);