import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import ProductPage from "./pages/productPage";
import Login from "./pages/loginPage.tsx";
// import Cart from "./pages/Cart.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/loginPage",
        element: <Login />,
      },
      // {
      //   path: "/loginpage/:id",
      //   element: <LoginPage />,
      // },
      // {
      //   path: "/loginpage/cart",
      //   element: <Cart />,
      // }
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
