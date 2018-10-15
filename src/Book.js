import React from 'react';


const Book = ({displayBooks}) => {
    return (
      <div className="bookCover">
        <h4>{displayBooks.title}</h4>
        <p>{displayBooks.author}</p>
        <p>{displayBooks.pages} pages</p>
      </div>
    )
}

export default Book