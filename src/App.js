import {lazy} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Code-Splitting for the Grocery store
// Lazy-loading
// On-demand loading
// Dynamic import
const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () =>{
    return(
        <div>
           <Header/>
           <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>, 
        children : ([
            {
                path: "/",
                element: <Body/> 
            },
            {
                path: "/about",
                element: <About/> 
            },
            {
                path: "/contact",
                element: <Contact/> 
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/> 
            },
            {
                path: "/grocery",
                element: <Grocery/> 
            },
        ]),
        
        errorElement : <Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
