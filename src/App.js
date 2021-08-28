import TasksCard from 'components/TasksCard';
import React from 'react';
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

const dataToDo = [
  {
    id: 1,
    level: 0,
    comments: 12,
    author: 'Ali Briceño, 12 hours ago',
    content:
      'Cillum irure anim in minim ut minim adipisicing aliqua nulla non dolor ex eu ipsum. Fugiat consectetur enim consectetur qui proident est adipisicing nisi deserunt. Pariatur laboris ipsum anim minim qui aliquip deserunt laboris eu. Lorem officia quis nulla magna aliquip deserunt irure aute ea labore.',
  },
  {
    id: 2,
    level: 1,
    comments: 1,
    author: 'Ali Briceño, 1 hour ago',
    content:
      'Cillum irure anim in minim ut. Lorem officia quis nulla magna aliquip deserunt irure aute ea labore.',
  },
];

const dataInProgress = [];
const dataDone = [];

const App = () => {
  return (
    <AppWrapp>
      <AppPageTitle>Feedback Items</AppPageTitle>
      <AppBoard>
        <TasksCard title="To Do" data={dataToDo} />
        <TasksCard title="In Progress" data={dataInProgress} />
        <TasksCard title="Done" data={dataDone} />
      </AppBoard>
    </AppWrapp>
  );
};

export default App;
