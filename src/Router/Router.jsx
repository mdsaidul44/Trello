import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../erorrElement/ErrorElement";
import Home from "../Page/HomePage/Home";

 export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement/>,
        children:[
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
  ])