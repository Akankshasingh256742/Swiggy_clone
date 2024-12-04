import { lazy, Suspense, useState } from 'react'
import './index.css'
import Body from './Component/Body'
import Header from './Component/Header'
import { createBrowserRouter,Outlet,RouterProvider }  from 'react-router-dom'
import Errorelement from './Component/Errorelement'
import About from './Component/About'
import Contact from './Component/Contact'
import Restromenu from './Component/Restromenu'
import { Provider } from 'react-redux'
import appStore from './utils/Appstore'
import Cart from './Component/Cart'
import Protectetdroutes from './Component/Protectetdroutes'


const Grocery = lazy(() => import('./Grocery'))

function App() {
 return (
    
    <div>
    <Provider store={appStore}>
    <Header />
    <Outlet />
    </Provider>
    </div>
  )
}

export const approuter= createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Body />
       },
       {
        path:'/grocery',
        element:<Suspense fallback='hii there'><Grocery /></Suspense>
       },
      {
        element:<Protectetdroutes />,
        children:[
          {
            path:'/about',
            element:<About />
          }
        ]
       },
       {
        path:'/contact',
        element:<Contact />
       },
       {
        path:'/restaurant/:resId',
        element:<Restromenu />
       },
       {
        path:'/cart',
        element: <Cart />
       }
    ],
    errorElement:<Errorelement />
  },
])

export default App
