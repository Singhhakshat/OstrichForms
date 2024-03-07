import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import IndexPage from './components/IndexPage';
import ErrorPage from './components/ErrorPage';
import SignUpPage from './components/SignUpPage';
import SignInPage from './components/SignInPage';
import Dashboard from './components/Dashboard';
import DashBoardFormData from './components/DashboardFormData';
import FormPage from './components/FormPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <IndexPage/>,
      },
      {
        path: "/signup",
        element: <SignUpPage/>
      },
      {
        path: "/login",
        element: <SignInPage/>
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
          {
            path: "/dashboard/:formId",
            element: <DashBoardFormData/>
          },
        ],
      },
      {
        path: "/form/:formId",
        element: <FormPage/>,
      },
      {
        path: "*",
        element: <ErrorPage/>
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
