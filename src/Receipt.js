import React, { Component } from 'react';
import ReceiptRow from './ReceiptRow';

class Receipt extends Component {
  calcTotal() {
    return this.props.cart.map( item => item.price ).reduce( (a, b) => { return a + b }, 0);
  }
  render() {
    const rows = this.props.cart.map( (item, index) => {
      return <ReceiptRow remove={_ => this.props.remove(index)} key={index} item={item} />
    });
    return (
      <div>
        <h1>Receipt</h1>
        <ul>
          {rows}
        </ul>
        <p>Total {this.calcTotal()}</p>
      </div>

    )
  }
}

export default Receipt;
