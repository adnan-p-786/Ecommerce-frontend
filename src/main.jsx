import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Shop from './pages/Shop.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Cart from './pages/cart.jsx'
import { Provider } from "react-redux";
import store from './app/store.js'
import Login from './pages/Login.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/Products',
        element:<Products/>
      },
      {
        path:'/Shop',
        element:<Shop/>
      },
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Contacts',
        element:<Contacts/>
      },
      {
        path:'/Cart',
        element:<Cart/>
      }
    ]
  },
  {
    path:'/Login',
    element:<Login />
  }
  
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
