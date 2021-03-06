import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { MdComment } from 'react-icons/md';
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from 'ItemTypes';
import AppContext from 'AppContext';

const itemLevel = {
  0: {
    label: 'Low Level',
    color: '#427E67',
    backgorundColor: '#D0FAE6',
  },
  1: {
    label: 'Medium Level',
    color: '#A77849',
    backgorundColor: '#FDF2CA',
  },
  2: {
    label: 'High Level',
    color: '#995656',
    backgorundColor: '#FFE1E1',
  },
};

export const CardItemWrapper = styled.div`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.gray400};
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
`;

const CardItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CardItemComments = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.gray600};
  & div {
    margin-left: 8px;
    font-size: 0.9em;
  }
`;

const CardItemLevel = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 12px;
  font-weight: bold;
  color: ${(props) => itemLevel[props.level].color};
  background-color: ${(props) => itemLevel[props.level].backgorundColor};
  font-size: 0.7em;
`;

const CardItemAuthor = styled.div`
  margin-top: 4px;
  font-size: 0.7em;
  color: ${({ theme }) => theme.gray600};
`;

const CardItemContent = styled.div`
  margin-top: 8px;
  padding: 4px;
  font-size: 0.8em;
  font-weight: 100;
  line-height: 18px;
`;

const CardItem = ({ id, level, commentsQty, author, content, index }) => {
  const ref = useRef(null);
  const { moveCardHandler } = useContext(AppContext);

  // we use a useDrop here because now our CardItem
  // is a "dropable" zone but only for hover operations
  // to see if we are moving a card over other and
  // change the position

  const [, drop] = useDrop({
    accept: ItemTypes.ITEM_CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex; //eslint-disable-line
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ITEM_CARD,
    item: { index, id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });
  drag(drop(ref));
  return (
    <CardItemWrapper ref={ref} isDragging={isDragging}>
      <CardItemHeader>
        <CardItemComments>
          <MdComment />
          <div>{commentsQty}</div>
        </CardItemComments>
        <CardItemLevel level={level}>{itemLevel[level].label}</CardItemLevel>
      </CardItemHeader>
      <CardItemAuthor>{author}</CardItemAuthor>
      <CardItemContent>{content}</CardItemContent>
    </CardItemWrapper>
  );
};

export default CardItem;
