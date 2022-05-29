import './App.css';
import React from 'react';
import Dashboard from './pages/Dashboard/index';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LevelUP from './pages/LevelUpPage';
import { PAGES } from 'routes';

const ROUTES = [
  {
    path: PAGES.ROOT,
    element: <Dashboard/>,
  },
  {
    path: `${PAGES.LEVELPAGE}/:exp`,
    element: <LevelUP/>,
  }, 
];

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        {ROUTES.map((props, idx) => (
          <Route key={idx} {...props} />
        ))} 
      </Routes>
    </Router>
  );
}

export default App;
