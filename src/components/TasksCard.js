import React, { useContext } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import ItemTypes from 'ItemTypes';
import AppContext from 'AppContext';
import CardItem, { CardItemWrapper } from './CardItem';

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
  align-items: center;
`;

const TasksCardBody = styled.div`
  height: 100%;
  background-color: ${({ isOverDragging }) => (isOverDragging ? '#d0fae6' : 'initial')};
  padding: 12px;
  & ${CardItemWrapper} {
    margin-top: 12px;
  }
  & ${CardItemWrapper}:first-child {
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

const TasksCard = ({ taskCardId, title, data }) => {
  const { setItemInTaskCard } = useContext(AppContext);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ITEM_CARD,
    drop: (item) => {
      return setItemInTaskCard(item, taskCardId);
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });
  return (
    <TasksCardWrapper>
      <TasksCardTitle>
        <div>{title}</div>
        <TastCardTitleCounter>
          {data ? data.filter((item) => item.taskCardId === taskCardId).length : 0}
        </TastCardTitleCounter>
      </TasksCardTitle>
      <TasksCardBody ref={drop} isOverDragging={isOver}>
        {!!data &&
          !!data.length &&
          data
            .filter((item) => item.taskCardId === taskCardId)
            .map((itemToRender, index) => (
              <CardItem
                key={itemToRender.id}
                id={itemToRender.id}
                author={itemToRender.author}
                index={index}
                commentsQty={itemToRender.comments}
                content={itemToRender.content}
                level={itemToRender.level}
              />
            ))}
      </TasksCardBody>
    </TasksCardWrapper>
  );
};

export default TasksCard;
