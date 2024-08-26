// src/CustomMessage.js
import React from 'react';

const CustomMessage = ({ message }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: message }} />
  );
};

export default CustomMessage;
