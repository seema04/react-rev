import React from 'react'
import './Genre.css';

const Genre = ({genres, filterBooks}) => {
//  console.log(`genre from genre component: ${genres}`)

  return (
    <div className='genre-links-container'>
      {genres.map((genre, index) => {
        return (
          <ul className="genre-links">
            <li 
              key={index}
              className='genre-link'
              onClick={() => filterBooks(genre)}
              >{genre}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default Genre
