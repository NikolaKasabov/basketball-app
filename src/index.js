import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './store/statsContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Table from './components/Table';
import UnsortedTable from './components/UnsortedTable';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'unsorted',
        element: <UnsortedTable />
      }
    ]
  }
]);

root.render(
  <ContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
