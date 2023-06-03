import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//components
import Layout from './components/Layout'
import NewClient, {action as newClientAction} from './pages/NewClient'
import Index, {loader as clientLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditClient , {loader as editClientLoader, action as editClientAction}  from './pages/EditClient'
import {action as deleteClienteAction} from "./components/Client"


//react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



//routing
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index:true,
          element:<Index/>,
          loader: clientLoader,
          errorElement: <ErrorPage/>
        },
        {
          path:"/clientes/nuevo",
          element:<NewClient/>,
          action: newClientAction,
          errorElement: <ErrorPage/>
        },
        {
          path: "/clientes/:clienteID/editar",
          element:<EditClient/>,
          loader: editClientLoader,
          action: editClientAction,
          errorElement: <ErrorPage/>
        },
        {
          path: "/clientes/:clienteID/eliminar",
          action:deleteClienteAction
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
