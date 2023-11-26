import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';

// `!` is a non-null assertion because we are sure the value will never be null
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);