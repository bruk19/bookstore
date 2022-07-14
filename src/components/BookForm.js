import { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/Books';
import './Book.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categories] = useState([
    'Fiction',
    'Sci-Fi',
    'Fantasy',
    'Drama',
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    const newBook = {
      author,
      title,
      id: new Date().getMilliseconds().toString(),
      category: categories[Math.floor(Math.random() * categories.length)],
    };
    dispatch(addBook(newBook));
  };

  return (
  
    <div className="book-form">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input type="text" name="title" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="author" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;