import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Registation from "../../Pages/Login/Registration/Registation";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndCondition from "../../Pages/Others/TermsAndCondition/TermsAndCondition";
import Courses from "../../Pages/Shared/Courses/Courses";
import PrivateRoute from "../Private Route/PrivateRoute";

export const routes= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
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
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:4500/checkout/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registation></Registation>
            },
            {
             path:'/terms',
             element:<TermsAndCondition></TermsAndCondition>
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
        
    }
])