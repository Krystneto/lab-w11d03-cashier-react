import React, { Component } from 'react';

const ReceiptRow = ({item, remove}) => {
  return (
    <div>
      {item.category} - {item.desc}
      <button onClick={remove}>Remove</button>
    </div>
  )
}
export default ReceiptRow;
