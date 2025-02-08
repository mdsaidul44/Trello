import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../erorrElement/ErrorElement";
import Home from "../Page/HomePage/Home";
import CardDetails from "../component/CardDetails";
import Card from "../component/Card";

 export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
              path: '/card',
              element: <Card/>
            },
            {
              path: '/details/:id',
              element:<CardDetails/>,
              loader: ()=>fetch('/Taskapi.json')
            }
        ]
    }
  ])