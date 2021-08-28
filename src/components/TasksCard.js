import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

const TasksCardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.gray400};
  border-radius: 8px;
  width: 300px;
  background-color: ${({ theme }) => theme.gray200};
`;

const TasksCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.gray400};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: white;
  font-weight: bold;
`;

const TasksCardBody = styled.div`
  padding: 12px;
  & div {
    margin-top: 12px;
  }
  & div:first-child {
    margin-top: 0;
  }
`;

const TastCardTitleCounter = styled.div`
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7em;
  font-weight: bold;
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.gray400};
`;

const TasksCard = ({ title, data }) => {
  return (
    <TasksCardWrapper>
      <TasksCardTitle>
        <div>{title}</div>
        <TastCardTitleCounter>{data ? data.length : 0}</TastCardTitleCounter>
      </TasksCardTitle>
      <TasksCardBody>
        {!!data &&
          !!data.length &&
          data.map((item) => (
            <CardItem
              key={item.id}
              author={item.author}
              commentsQty={item.comments}
              content={item.content}
              level={item.level}
            />
          ))}
      </TasksCardBody>
    </TasksCardWrapper>
  );
};

export default TasksCard;
