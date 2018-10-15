import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import Footer from './Footer.js'
import BookList from './BookList'
import Checkout from './Checkout'

class App extends Component {

  state = {
    books: [],
    displayBooks: [],
    cart: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    json.map(book => {
      book = {
        id: book.id,
        title: book.title,
        author: book.author,
        pages: book.pages,
        inCart: false,
      }
      this.setState({displayBooks: this.state.displayBooks.concat(book)})
      return this.setState({books: this.state.books.concat(book)})

    })
  }

  authorFilter = (e) => {
    let selectedAuthor = this.state.books.filter(book => book.author === e.target.value)
    console.log(selectedAuthor[0])
    // this.setState({cartedBooks: this.state.cartedBooks.concat(selectedAuthor[0])})
    return this.setState({displayBooks: this.state.books.concat(selectedAuthor[0])})
  }

  render() {
    return (
      <div className="site">
        <Header />
        <BookList books={this.state.books} displayBooks={this.state.displayBooks} authorFilter={this.authorFilter}/>
        <Checkout cart={this.state.cart}/>
        <Footer />
      </div>
    )
  }
}

export default App
