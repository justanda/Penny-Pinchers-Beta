// this page initializes React app and attaches it to the dom
// index.html > main.tsx > REACT > EXPRESS > SEQUELIZE > POSTGRES

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
//import './index.css' //optional

// renders the react app and its pages
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'; //optional styling
import App from './App.tsx'

//import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Cart from './pages/Cart.tsx';
import Customer from './pages/CustomerForm.tsx';
import Product from './pages/Product.tsx';
//import Feedback from './pages/Feedback'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/cart',
        element: <Cart />
      }, 
      {
        path: '/product',
        element: <Product />
      }, 
      {
        path: '/customer',
        element: <Customer />
      } 
    ]
  }
])


// renders to react app
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement)
          .render(<RouterProvider router={router} />);
}