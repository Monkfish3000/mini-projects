import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import Form from './Form';

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

  return (
    <section className="section-center">
      <Form addItem={addItem} />
    </section>
  );
}

export default App;
