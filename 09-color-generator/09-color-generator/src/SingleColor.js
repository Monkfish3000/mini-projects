import React, { useState, useEffect } from 'react';
//import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bgColor = rgb.join(',');
  // const hex = rgbToHex(...rgb);

  const copyToClipboard = () => {
    setAlert(true);
    navigator.clipboard.writeText(`#${hexColor}`);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      onClick={copyToClipboard}
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgColor})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
