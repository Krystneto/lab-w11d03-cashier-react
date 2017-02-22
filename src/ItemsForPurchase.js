import React, { Component } from 'react';
import PurchaseItem from './PurchaseItem';

class ItemsForPurchase extends Component {
  render() {
    const items = this.props.items.map( item => {
      return (
        <PurchaseItem
          item={item}
          addItem={_ => this.props.addToCart(item)}
          key={item.sku} />
      )
    })
    return (
      <div>
        Items for Purchase
        {items}
      </div>
    )
  }
}

export default ItemsForPurchase;
