import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import { LoginForm } from './components/LoginForm';
// import { ProductPage } from './components/ProductPage';
import {ProductList} from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails"


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
   path:"/productPage",
   element: <ProductList />,
 },
 {
  path: '/productPage/:id',
  element: <ProductDetails />
 }

])

return <RouterProvider router={router} />;
};


export default Router

