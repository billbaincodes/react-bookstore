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

  bookFilter = (e) => {
    let selectedBook = this.state.books.filter(book => (book.author.toLowerCase().includes(e.target.value)) || (book.title.toLowerCase().includes(e.target.value)))
    console.log(e.target.value, {selectedBook})
    this.setState({displayBooks: selectedBook})
  }

  addToCart = () => {
    this.state.displayBooks.map(book => this.setState(console.log(book)))
    // this.setState({cart: this.state.cart.concat(this.state.displayBooks)})
  }

  render() {
    return (
      <div className="site">
        <Header />
        <BookList books={this.state.books} displayBooks={this.state.displayBooks} bookFilter={this.bookFilter} addToCart={this.addToCart}/>
        <Checkout cart={this.state.cart}/>
        <Footer />
      </div>
    )
  }
}

export default App
