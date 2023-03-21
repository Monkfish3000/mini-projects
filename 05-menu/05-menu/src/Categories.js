import React from 'react';

const Categories = ({ filterItems, items }) => {
  return (
    <div className="btn-container">
      {items.map((category, idx) => {
        return (
          <button
            key={idx}
            type="button"
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
      {/* <button className="filter-btn" onClick={() => filterItems('')}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItems('breakfast')}>
        Breakfast
      </button>
      <button className="filter-btn" onClick={() => filterItems('lunch')}>
        Lunch
      </button>
      <button className="filter-btn" onClick={() => filterItems('shakes')}>
        Shakes
      </button> */}
    </div>
  );
};

export default Categories;
