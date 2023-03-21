import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    newItems.length > 0 ? setMenuItems(newItems) : setMenuItems(items);
  };
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
