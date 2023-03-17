import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const checkNumber = (num) => {
    if (num > people.length - 1) return 0;
    if (num < 0) return people.length - 1;

    return num;
  };

  const nextPerson = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let newIndex = getRandomNumber(0, people.length - 1);
    if (index === newIndex) newIndex = newIndex + 1;

    setIndex(checkNumber(newIndex));
    console.log(index);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
