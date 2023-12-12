import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import { LoginForm } from './components/LoginForm';
import {ProductList} from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails"
import {Cart}  from "./components/Cart";
import { Register } from "./components/Register";
import Shipping  from "./components/Shipping";
import {PrivateRoutes} from "./components/PrivateRoutes";
import AdminRoutes from "./components/AdminRoute";
import { Payment } from "./components/Payment";
import PlaceOrder from "./components/PlaceOrder";
import OrderPage from "./components/OrderPage";
import OrderList from "./components/Admin/OrderList";
import Profile from './components/Profile';
import ProductListAdmin from './components/Admin/ProductListAdmin';
import ProductEdit from "./components/Admin/ProductEdit";
import UserList from "./components/Admin/UserList";
import UserEdit from "./components/Admin/UserEdit";

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
  path: '/profile',
  element: <Profile />,
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
    },
    
  ],
 },
 {
  path:"",
  element:<AdminRoutes />,
  children: [
    {
      path: "/admin/orderlist",
      element: <OrderList />,
    },
   
    {
      path: "/admin/productlistadmin",
      element: <ProductListAdmin />,
    },
   {
    path: "/admin/product/:id/edit",
    element: <ProductEdit />,
   },
   {
    path: "/admin/userlist",
    element: <UserList />,
   },
    {
      path: "/admin/user/:id/edit",
      element: <UserEdit />,
    },
  ],
 },
]);

return <RouterProvider router={ router } />;

};


export default Router

