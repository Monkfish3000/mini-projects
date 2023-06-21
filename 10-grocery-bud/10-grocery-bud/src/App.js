import React, { useState, useEffect } from 'react';
import Form from './Form';
import Items from './Items';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

function App() {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: Date.now(),
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => itemId !== item.id);

    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
