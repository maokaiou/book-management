import { createBrowserRouter } from 'react-router-dom'
import Login from '../views/login/Login';
import Register from '../views/register/Register';
import Home from '../views/home/Home';
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