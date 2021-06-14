import React from 'react';

const Button = ({ name, onClick }) => (
  <button type="button" onClick={onClick}>
    {name}
  </button>
);

export default Button;
