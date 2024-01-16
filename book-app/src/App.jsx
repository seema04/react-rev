import BookList from './BookList';
import Genre from './Genre';
import { useState } from 'react';
import { books } from './books';
import './App.css';


const allGenres = ['all', ...new Set(books.map(bookItem => bookItem.genre))];
//console.log(allGenres);

function App() {

  const [showBooks, setShowBooks] = useState(books);
  const [genres, setGenres] = useState(allGenres);
  //console.log(`genres from app components: ${genres}`);

  const filterBooks = (genre) => {
    if(genre === "all")
    {
      setShowBooks(books);
      return;
    }
    const newBooks = books.filter(book => book.genre === genre);
    setShowBooks(newBooks);  
  };

  return (
    <section>
      <h1 style={{textAlign: "center",color: "Brown",marginTop: "3.5rem"}}>Book App</h1>
      <Genre genres={genres} filterBooks={filterBooks}/>
      <BookList books={showBooks}/>
    </section>
  )
}

export default App
