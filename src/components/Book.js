import { useState } from 'react'
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';


const Book = ({ title, author, id, category }) => {
  const dispatch = useDispatch();
  const [randomPercentage] = useState(Math.floor(Math.random() * 100));

  return (
    <div className="book">
      <div>
        <span className="book-category">{category}</span>
        <h2 className="book-title">{title}</h2>
        <h3 className="book-author">{author}</h3>
        <div className="book-actions">
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <CircularProgressBar percent={randomPercentage} linearGradient={['#307bbe', '#379cf6']} size={100} number={false} colorCircle="#c4c4c4" />
        <div className="progress-stats">
          <span className="percentage">
            {randomPercentage}
            %
          </span>
          <span className="percentage-completed">Completed</span>
        </div>
      </div>
      <div>
        <h3 className="curent-chapter">CURRENT CHAPTER</h3>
        <span className="chapter">Chapter 17</span>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
    
  );
};
export default Book;