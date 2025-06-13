import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const DragAndDropList = () => {
  const [items, setItems] = useState(['Item A', 'Item B', 'Item C']);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => setDraggingItem(index);

  const handleDragOver = (e, index) => {
    e.preventDefault();
    const newItems = [...items];
    const draggedItem = newItems[draggingItem];
    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggedItem);
    setDraggingItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => setDraggingItem(null);

  return (
    <ListGroup>
      {items.map((item, index) => (
        <ListGroup.Item
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={handleDragEnd}
        >
          {item}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default DragAndDropList;
