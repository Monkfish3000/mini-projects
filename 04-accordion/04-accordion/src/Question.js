import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setIsOpen(!isOpen)} className="btn">
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  );
};

export default Question;
