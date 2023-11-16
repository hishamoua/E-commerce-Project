import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import { LoginForm } from './components/LoginForm';
import { ProductPage } from './components/ProductPage';

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
   element: <ProductPage />,
 }

])

return <RouterProvider router={router} />;
};


export default Router

