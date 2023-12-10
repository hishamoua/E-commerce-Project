import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import { LoginForm } from './components/LoginForm';
import {ProductList} from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails"
import {Cart}  from "./components/Cart";
import { Register } from "./components/Register";
import Shipping  from "./components/Shipping";
import {PrivateRoutes} from "./components/PrivateRoutes";
import { Payment } from "./components/Payment";
import PlaceOrder from "./components/PlaceOrder";
import { OrderPage } from "./components/OrderPage";


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
  path: '/register',
  element: <Register />,
 },
 {
   path:"/productPage",
   element: <ProductList />,
 },
 {
  path: "/productPage/:id",
  element: <ProductDetails />
 },
 {
  path:"/cart",
  element: <Cart />,
 },
 {
  path:"",
  element:<PrivateRoutes />,
  children: [
    {
      path: "/shipping",
      element: <Shipping />,
    },
    {
     path: "/payment",
     element: <Payment />
    },
    {
    path:"/placeorder",
    element:<PlaceOrder />,
    },
    {
      path:'/order/:id',
      element:<OrderPage/>
    }
    
  ],
 },
]);

return <RouterProvider router={ router } />;

};


export default Router

