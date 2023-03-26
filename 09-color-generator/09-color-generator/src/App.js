import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#D71921"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button className="btn" type="submit">
            Go!
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>list goes here</h4>
      </section>
    </>
  );
}

export default App;