import React, { Component } from 'react';
import Book from './Book'


class BookList extends Component {

  render() {
    return (
      <aside className="aside">
        <h3>Behold, the checkout</h3>
        {this.props.cart.map(book => <Book book={book} />)}
      </aside>
    )
  }
}

export default BookList;