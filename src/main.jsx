import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Sobre } from './routes/Sobre.jsx';
import { Projetos } from './routes/Projetos.jsx';
import { Page_erro } from './routes/Page_erro.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"sobre",
    element: <Sobre/>
  },
  {
    path:"projetos",
    element: <Projetos  />
  },
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
