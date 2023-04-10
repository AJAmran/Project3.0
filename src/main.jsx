import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './Component/Statistics/Statistics'
import AppliedJobs from './Component/Applied Jobs/AppliedJobs'
import Blog from './Component/Blog/Blog'
import Home from './Home/Home'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader:()=> fetch('JobCatagoris.json'),
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/apjob',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
