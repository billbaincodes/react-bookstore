import React, { Component } from 'react';
import Book from './Book'


class BookList extends Component {

  render() {
    return (
      <aside className="aside">
        <h3>Behold, the checkout</h3><button onClick={this.props.clearCart}>Empty Cart</button>
        {this.props.cart.map(book => <Book book={book} />)}
        <h5>Current Total: ${this.props.cart.length * 5}.00</h5>
      </aside>
    )
  }
}

export default BookList