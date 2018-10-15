import React, { Component } from 'react';
import Book from "./Book"


class BookList extends Component {

  render() {
    return (
      <div>
        <h3>Behold, my books</h3>
        {this.props.books.map(book => <Book book={book} />)}
      </div>
    );
  }
}

export default BookList;