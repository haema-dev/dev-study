import React from 'react';
import {GroupItem, GroupName, JoinButton, ListContainer, ParticipantCount} from "./style";
import CreateStudyGroup from "./CreateStudyGroup";

const studyGroups = [
    { id: 1, name: '스프링 스터디', participantsCount: 3, maxParticipants: 10 },
    { id: 2, name: '노드 스터디', participantsCount: 5, maxParticipants: 10 },
    { id: 3, name: '자바 스터디', participantsCount: 7, maxParticipants: 10 },
    { id: 4, name: 'CS 스터디', participantsCount: 10, maxParticipants: 10 },
    { id: 5, name: '코딩테스트 스터디', participantsCount: 6, maxParticipants: 10 },
    { id: 6, name: 'AI 스터디', participantsCount: 8, maxParticipants: 10 },
];

export default function JoinStudyGroup() {
    return (
        <div>
            <CreateStudyGroup />
            <ListContainer>
                {studyGroups.map(group => (
                    <StudyGroupItem key={group.id} group={group} />
                ))}
            </ListContainer>
        </div>
    );
}

export function StudyGroupItem({ group }) {
    const handleJoin = () => {
        console.log(`Joined group: ${group.name}`);
    };

    const isFull = group.participantsCount >= group.maxParticipants;

    return (
        <GroupItem>
            <GroupName>{group.name}</GroupName>
            <ParticipantCount $isFull={isFull}>
                {group.participantsCount}/{group.maxParticipants}명 참여중
            </ParticipantCount>
            <JoinButton $isFull={isFull} disabled={isFull} onClick={handleJoin}>
                {isFull ? "마감" : "참여"}
            </JoinButton>
        </GroupItem>
    );
}
