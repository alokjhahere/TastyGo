import {lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// Code-Splitting for the Grocery store
// Lazy-loading
// On-demand loading
// Dynamic import
const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () =>{

    //Authentication Code
    const [userName, setUserName] = useState();
    useEffect(()=>{
    //Makes an API Call and Recieves UserName and Password
    //Dummy Data
        const data = {
            name : ""
        };
        setUserName(data.name);
    }, []);

    return(
        <Provider store={appStore}>
        <UserContext value={{loggedInUser : userName, setUserName}}>
         <div>
           <Header/>
           <Outlet/>
         </div>
        </UserContext>
        </Provider>
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
                path: "/cart",
                element: <Cart/> 
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
