import React, { Component } from 'react';

class PurchaseItem extends Component {
  render() {
    return (
      <div>
        {this.props.item.category} -
        {this.props.item.desc}
        <button onClick={this.props.addItem}>Purchase</button>
      </div>
    )
  }
}

export default PurchaseItem;
