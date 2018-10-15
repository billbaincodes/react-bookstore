import React, { Component } from 'react'
import Book from "./Book"


class BookList extends Component {

  render() {
    return (
      <main className="main">
        <h3>Behold, my books</h3>
        Search by Title or Author: <input onChange={this.props.bookFilter}/>
        {this.props.displayBooks.map(book => <Book displayBooks={book} />)}
      </main>
    )
  }
}

export default BookList