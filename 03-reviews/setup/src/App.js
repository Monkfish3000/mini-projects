import React from 'react';
import Review from './Review';

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Review</h2>
          <div className="underlin"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
