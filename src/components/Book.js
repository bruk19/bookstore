import React from 'react'
import './Book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';


const Book = ({ title, author, id, category }) => {
  const dispatch = useDispatch();

  return (
    <div className="book">
      <div>
        <span>{category}</span>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <span>64%</span>
        <span>Completed</span>
      </div>
      <div>
        <h3>CURRENT CHAPTER</h3>
        <span>Chapter 17</span>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
    
  );
};
export default Book;