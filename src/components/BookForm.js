import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      author,
      title,
      id: new Date().getMilliseconds(),
    };
    dispatch(addBook(newBook));
  };

  return (
    <div className="book form">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="author" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;