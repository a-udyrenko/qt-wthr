import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider
} from 'react-router-dom';
import './styles/index.scss';
import AppLayout from './components/AppLayout';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          path="/"
          element={<Navigate to="/forecast" replace />}
        />
        <Route element={<AppLayout />}>
          <Route path="/forecast" element={<h1>Forecast!</h1>} />
          <Route path="/today" element={<h1>Today!</h1>} />
          <Route path="*" element={<h1>Oh, 404!</h1>} />
        </Route>
      </Route>
    </>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
