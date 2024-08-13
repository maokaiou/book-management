import { createBrowserRouter } from 'react-router-dom'
import Login from '../views/Login';
import Register from '../views/Register';
import Home from '../views/Home';
const routes =[
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <Home />,
  } 
]
export const router =createBrowserRouter(routes)