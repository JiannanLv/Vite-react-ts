import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '@/view/layout'
import Home from '@/view/home'
import Mine from '@/view/mine'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'mine', element: <Mine /> },
    ],
  },
])

const Routes = () => <RouterProvider router={router} />

export default Routes
