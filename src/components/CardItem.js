import React from 'react';
import styled from 'styled-components';
import { MdComment } from 'react-icons/md';

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

const CardItem = ({ level, commentsQty, author, content }) => {
  return (
    <CardItemWrapper>
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
