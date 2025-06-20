import React, { useReducer, useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  ListGroup,
  InputGroup
} from "react-bootstrap";

const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.newName } : item
        ),
      };
    case "SORT_ALPHABETICAL":
      return {
        ...state,
        items: [...state.items].sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      };
    case "SORT_CREATED":
      return {
        ...state,
        items: [...state.items].sort((a, b) => a.id - b.id),
      };
    case "SET_FILTER":
      return { ...state, filter: action.query };
    default:
      return state;
  }
};

const initialState = {
  items: [],
  filter: "",
};

function EditableItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const filteredItems = state.items.filter((item) =>
    item.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  const handleAdd = () => {
    if (newItemName.trim() === "") return;
    dispatch({
      type: "ADD_ITEM",
      item: { id: Date.now(), name: newItemName },
    });
    setNewItemName("");
  };

  const handleEdit = (id, name) => {
    setEditId(id);
    setEditText(name);
  };

  const handleSaveEdit = (id) => {
    dispatch({ type: "EDIT_ITEM", id, newName: editText });
    setEditId(null);
  };

  return (
    <Container className="mt-4">
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Filter items"
          onChange={(e) =>
            dispatch({ type: "SET_FILTER", query: e.target.value })
          }
        />
      </Form.Group>

      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Enter new item"
        />
        <Button variant="success" onClick={handleAdd}>
          Add Item
        </Button>
      </InputGroup>

      <div className="mb-3">
        <Button
          variant="outline-primary"
          className="me-2"
          onClick={() => dispatch({ type: "SORT_ALPHABETICAL" })}
        >
          Sort A-Z
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => dispatch({ type: "SORT_CREATED" })}
        >
          Sort by Created Time
        </Button>
      </div>

      <ListGroup>
        {filteredItems.map((item) => (
          <ListGroup.Item
            key={item.id}
            className="d-flex justify-content-between align-items-center"
          >
            {editId === item.id ? (
              <>
                <Form.Control
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="me-2"
                />
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => handleSaveEdit(item.id)}
                >
                  Save
                </Button>
              </>
            ) : (
              <>
                <span>{item.name}</span>
                <div>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(item.id, item.name)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", id: item.id })
                    }
                  >
                    Remove
                  </Button>
                </div>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default EditableItemList;
