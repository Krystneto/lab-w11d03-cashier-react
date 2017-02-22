import React, { Component } from 'react';

class ReceiptRow extends Component {
  render() {
    const item = this.props.item;
    return (
      <div onClick={this.props.remove}>
        {item.category} - {item.desc} <button>Remove</button>
      </div>
    )
  }
}

export default ReceiptRow;
