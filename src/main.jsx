import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ManRout from './MainComponent/ManRout.jsx';
import Home from './Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManRout/>,
    children: [
      {
        path: "/",
        element:<Home/>,


      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />,
  </StrictMode>,
)
