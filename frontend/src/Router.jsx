import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import { LoginForm } from './components/LoginForm';
// import { ProductPage } from './components/ProductPage';
import {ProductList} from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails"
import {Cart}  from "./components/Cart";
import { Register } from "./components/Register";


const Router = () => {
const router = createBrowserRouter([
 {
   path: "/",
   element: <App />,
 },
 {
   path: "/login",
   element: <LoginForm />,
 },
 {
  path: 'register',
  element: <Register />,
 },
 {
   path:"/productPage",
   element: <ProductList />,
 },
 {
  path: '/productPage/:id',
  element: <ProductDetails />
 },
 {
  path:'/cart',
  element: <Cart />
 }

])

return <RouterProvider router={router} />;
};


export default Router

