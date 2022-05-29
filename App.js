import React from 'react'

import {RootView} from './src/components/_styles'
import ToDoList from './src/components/ToDoList';

const App = () => {
  return (
    <RootView>
      <ToDoList/>
    </RootView>
  );
}

export default App