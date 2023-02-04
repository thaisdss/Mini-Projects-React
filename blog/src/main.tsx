import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from './App'
import './index.css'
import { EditPost } from './routes/EditPost';
import { Home } from './routes/Home';
import { Manage } from './routes/Manage';
import { NewPost } from './routes/NewPost';
import { Post } from './routes/Post';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "new",
        element: <NewPost />,
      },
      {
        path: "posts/:id",
        element: <Post />,
      },
      {
        path: "manage",
        element: <Manage />,
      },
      {
        path: "posts/edit/:id",
        element: <EditPost />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
