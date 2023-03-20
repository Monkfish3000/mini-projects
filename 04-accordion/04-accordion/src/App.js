import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions & Answers</h3>
        <section className="info">
          {data.map((question) => {
            return <SingleQuestion key={data.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
