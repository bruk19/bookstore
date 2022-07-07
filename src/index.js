import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import BookForm from './components/BookForm';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Navbar />
    <App />
    <BookForm />
  </React.StrictMode>
  </BrowserRouter>
);
