import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../src/Components/Home/Home"
import Root  from './Components/Root';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import Statistics from './Components/Statistics/Statistics';
import JobDetails from './Components/JobDetails/JobDetails';
import Login from './LogInForm/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader:()=> fetch('../jobs.json')

      },
      {
        path: "/blogs",
        element:<Blogs></Blogs>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader:()=> fetch('../jobs.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
