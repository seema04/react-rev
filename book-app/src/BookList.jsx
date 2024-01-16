import React from 'react'
import Book from './Book'

const BookList = ({books}) => {
  return (
    <section className='book-list'>
      {books.map(book => <Book 
           key = {book.id} {...book} />)}
    </section>
  )
}


export default BookList
