import React from 'react'


const Book = ({book}) => {
    return (
      <div className="bookCover">
        <h4>{book.title}</h4>
        <p>{book.author}</p>
        <p>{book.pages} pages</p>
      </div>
    )
}

export default Book