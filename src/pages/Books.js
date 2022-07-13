import { useSelector } from 'react-redux';
import Book from '../components/Book';
import React from 'react';
import BookForm from '../components/BookForm';


const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <section>
        {books && books.map(
          (book) => <Book title={book.title} author={book.author} id={book.id} key={book.id} />,
        )}
      </section>
      <section>
        <BookForm />
      </section>
    </>
  );
};
export default Books;
