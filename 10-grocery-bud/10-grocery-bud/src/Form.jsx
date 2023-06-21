import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItemName, setNewNameItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItemName) {
      toast.error('Please add name of item', { autoClose: 1500 });
      return;
    }

    addItem(newItemName);
    setNewNameItem('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewNameItem(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
