import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import BookForm from './components/BookForm';
import { Provider } from 'react-redux';
import Book from './components/Book';
import App from './App';
import store from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  <Provider store={store}>
    <Navbar />
    <Book />
    <App />
    <BookForm />
  </Provider>
  </React.StrictMode>
  </BrowserRouter>
);
