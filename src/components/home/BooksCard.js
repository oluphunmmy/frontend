import React from 'react'
import BookSingleCard from './BookSingleCard'

const BooksCard = ({books}) => {
  console.log(books, "card")
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

      {
        books.map((book)=>(
          <BookSingleCard key={book._id} book={book}/>
        ))
      }
      
    </div>
  )
}

export default BooksCard