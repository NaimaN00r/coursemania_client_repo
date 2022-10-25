import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Shared/Courses/Courses";

export const routes= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:4500/course-categories')

            },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:4500/category/${params.id}`)
            },
            {
                path:'/courses/:id',
                element:<Courses></Courses>
            },
            {
                path:'/checkout/:id',
                element:<CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:4500/checkout/${params.id}`)
            }
        ]
        
    }
])