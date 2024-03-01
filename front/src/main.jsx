import React from 'react';
import ReactDOM from 'react-dom/client';
//import './styles/index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import CardPage from './pages/CardPage/CardPage.jsx';
import Cart from './pages/Cart/Cart.jsx';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />, // localhost:5173/ -> <Home />
    },
    {
        path: '/cardpage', // /account
        element: (
                <CardPage />
        ),
    },
    {
        path: '/cart',
        element: (
                <Cart />
        ),
    }, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
          <RouterProvider router={routes} />
    </React.StrictMode>
);
