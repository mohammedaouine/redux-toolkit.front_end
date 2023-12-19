import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404 from "./Error404";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import PublicRoutes from "../middlewares/PublicRoutes";
import ProtectedRouted from "../middlewares/ProtectedRouted";
import Products from "./Products";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: [


            {
                path: "/",
                element: <Products />
            },
          
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/login",
                element: <Login />
            },
           
           
          
            

        ]
    },
    
])









export default Router;