import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ContextProvider from './store/statsContext';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UnsortedTable from './components/UnsortedTable';
import MostPointsInAllGames from './components/MostPointsInAllGames';
import MostPointsInASingleGame from './components/MostPointsInASingleGame';
import ScoredPointsPerSecond from './components/ScoredPointsPerSecond';
import MostPointsByATeam from './components/MostPointsByATeam';
import BestPlayerInTheTeam from './components/BestPlayerInTheTeam';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'unsorted',
        element: <UnsortedTable />,
      },
      {
        path: 'most-points-in-a-single-game',
        element: <MostPointsInASingleGame />,
      },
      {
        path: 'most-points-in-all-games',
        element: <MostPointsInAllGames />,
      },
      {
        path: 'scored-points-per-second',
        element: <ScoredPointsPerSecond />,
      },
      {
        path: 'most-points-by-a-team',
        element: <MostPointsByATeam />,
      },
      {
        path: 'best-player-in-the-team',
        element: <BestPlayerInTheTeam />,
      },
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
