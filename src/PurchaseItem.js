import React, { Component } from 'react';

const PurchaseItem = ({item, addItem}) => {
  return (
    <div>
      {item.category} - {item.desc}
      <button onClick={addItem}>Purchase</button>
    </div>
  )
}

export default PurchaseItem;
