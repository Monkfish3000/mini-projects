import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import Form from './Form';

function App() {
  const [items, setItems] = useState([]);
  return (
    <section className="section-center">
      <Form />
    </section>
  );
}

export default App;
