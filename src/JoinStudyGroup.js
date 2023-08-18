import React from 'react';
import {GroupItem, GroupName, JoinButton, ListContainer} from "./StyledComponents";

export default function JoinStudyGroup({ groups = [] }) {
    return (
        <ListContainer>
            {groups.map(group => (
                <StudyGroupItem key={group.id} group={group} />
            ))}
        </ListContainer>
    );
}

export function StudyGroupItem({ group }) {
    const handleJoin = () => {
        // TODO: 참여 로직 구현
        console.log(`Joined group: ${group.name}`);
    };

    return (
        <GroupItem>
            <GroupName>{group.name}</GroupName>
            <JoinButton onClick={handleJoin}>참여</JoinButton>
        </GroupItem>
    );
}
