import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';
import ControlledInput from './ControlledInput';
import ToggleVisibility from './ToggleVisibility';
import TodoList from './TodoList';
import ColorSwitcher from './ColorSwitcher';
import SearchFilter from './SearchFilter';
import DragAndDropList from './DragAndDropList';

function App() {
  return (
    <div className="container mt-4">
      {/* <Counter /> */}
      {/* <ControlledInput /> */}
      {/* <ToggleVisibility /> */}
      {/* <TodoList /> */}
      {/* <ColorSwitcher /> */}
      {/* <SearchFilter /> */}
      <DragAndDropList />
    </div>
  );
}

export default App;
