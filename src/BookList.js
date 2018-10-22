import React, { Component } from 'react';
import Book from "./Book"


class BookList extends Component {

  render() {
    return (
      <main className="main">
        <h3>Behold, my books</h3>
        Search by Title or Author: <input onChange={this.props.bookFilter}/>
        <button onClick={this.props.addToCart}>Add to Cart</button>
        {this.props.books.map(book => <Book book={book} />)}
      </main>
    )
  }
}

export default BookList