import React, { useState } from 'react';
import AppContext from 'AppContext';
import TasksCard from 'components/TasksCard';
import styled from 'styled-components';

const AppWrapp = styled.div`
  padding: 64px;
  height: 100vh;
`;

const AppPageTitle = styled.div`
  font-weight: bold;
  margin-bottom: 32px;
`;

const AppBoard = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
`;

const customData = [
  {
    id: 1,
    level: 0,
    comments: 12,
    author: 'Ali Briceño, 12 hours ago',
    taskCardId: 1,
    content:
      'Cillum irure anim in minim ut minim adipisicing aliqua nulla non dolor ex eu ipsum. Fugiat consectetur enim consectetur qui proident est adipisicing nisi deserunt. Pariatur laboris ipsum anim minim qui aliquip deserunt laboris eu. Lorem officia quis nulla magna aliquip deserunt irure aute ea labore.',
  },
  {
    id: 2,
    level: 1,
    comments: 1,
    taskCardId: 1,
    author: 'Ali Briceño, 1 hour ago',
    content:
      'Cillum irure anim in minim ut. Lorem officia quis nulla magna aliquip deserunt irure aute ea labore.',
  },
  {
    id: 3,
    level: 2,
    comments: 34,
    taskCardId: 3,
    author: 'Ali Briceño, 2 days ago',
    content:
      'Cillum irure anim in minim ut. Lorem officia quis nulla magna aliquip deserunt irure aute ea labore.',
  },
];

const App = () => {
  const [data, setData] = useState(customData);

  const setItemInTaskCard = (item, newTaskCard) => {
    const newData = [...data];
    for (let i = 0; i < newData.length; i += 1) {
      if (newData[i].id === item.id) {
        newData[i].taskCardId = newTaskCard;
        /*         const itemToOrder = newData.splice(i, 1);
        newData.push(itemToOrder[0]); */
        setData(newData);
        break;
      }
    }
  };

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = data[dragIndex];
    const coppiedStateArray = [...data];
    const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);
    coppiedStateArray.splice(dragIndex, 1, prevItem[0]);
    setData(coppiedStateArray);
  };
  return (
    <AppContext.Provider value={{ setItemInTaskCard, moveCardHandler }}>
      <AppWrapp>
        <AppPageTitle>Feedback Items</AppPageTitle>
        <AppBoard>
          <TasksCard taskCardId={1} title="To Do" data={data} />
          <TasksCard taskCardId={2} title="In Progress" data={data} />
          <TasksCard taskCardId={3} title="Done" data={data} />
        </AppBoard>
      </AppWrapp>
    </AppContext.Provider>
  );
};

export default App;
