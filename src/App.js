import React, { Component } from 'react'
import './App.css'
import Header from './Header.js'
import Footer from './Footer.js'
import BookList from './BookList'
import Checkout from './Checkout'

class App extends Component {

  state = {
    masterList: [],
    books: [],
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
      this.setState({masterList: this.state.masterList.concat(book)})
      return this.setState({books: this.state.books.concat(book)})

    })
  }

  bookFilter = (e) => {
    let selectedBook = this.state.masterList.filter(book => (book.author.toUpperCase().includes(e.target.value.toUpperCase())) || (book.title.toUpperCase().includes(e.target.value.toUpperCase())))
    console.log(e.target.value, {selectedBook})
    this.setState({books: selectedBook})
  }

  addToCart = () => {
    this.setState({cart: this.state.cart.concat(this.state.books)})
  }

  clearCart = () => {
    this.setState({cart: []})
  }

  render() {
    return (
      <div className="site">
        <Header />
        <BookList books={this.state.books} bookFilter={this.bookFilter} addToCart={this.addToCart}/>
        <Checkout clearCart={this.clearCart} cart={this.state.cart}/>
        <Footer />
      </div>
    )
  }
}

export default App
