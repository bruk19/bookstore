
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import React from 'react';
import BookForm from '../components/BookForm';
import { loadBooks } from '../redux/books/Books';


const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks);
  }, []);

  return (
    <>
      <section className="books-section">
        {books && books.map(
          (book) => <Book title={book.title} author={book.author} category={book.category} id={book.id} key={book.id} />,
        )}
      </section>
      <hr className="line books-line" />
      <section className="form-section">
        <BookForm />
      </section>
    </>
  );
};
export default Books;