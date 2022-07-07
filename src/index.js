import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import BookForm from './components/BookForm';
import Book from './components/Book';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Navbar />
    <Book />
    <App />
    <BookForm />
  </React.StrictMode>
  </BrowserRouter>
);
