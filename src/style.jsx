import React from 'react';
import styled from 'styled-components';

/* 인원수 및 버튼 디자인 */
export const ParticipantCount = styled.span`
  margin-right: 10px;
  // color: ${props => props.isFull ? '#a94442' : '#777'}; // 진한 빨강 또는 회색
  color: ${({ $isFull }) => ($isFull ? 'red' : 'grey')};
`;

export const JoinButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${({ $isFull }) => ($isFull ? 'red' : 'green')};
  //background-color: ${props => props.isFull ? '#d9534f' : '#007BFF'}; // 채도가 높은 빨강 또는 파랑
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ $isFull }) => ($isFull ? '#c9302c' : '#0056b3')}; // 채도가 높은 빨강 또는 진한 파랑
    
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
    padding: 10px 15px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;


/* 그룹 디자인 */
export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto; /* 가운데 정렬을 위한 스타일 */
`;

export const GroupItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f8f8f8;
`;

export const GroupName = styled.span`
    font-size: 1.1em;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const StyledInput = styled.input`
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 400px;
`;
