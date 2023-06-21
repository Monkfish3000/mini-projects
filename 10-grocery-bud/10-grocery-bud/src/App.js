import React, { useState, useEffect } from 'react';
import Form from './Form';
import Items from './Items';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: Date.now(),
    };

    setItems([...items, newItem]);
  };

  const removeItem = (itemId) => {};

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  );
}

export default App;
