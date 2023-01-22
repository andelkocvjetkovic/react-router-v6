import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Form } from "react-router-dom";
import EditContact from './routes/edit';
import Root from './routes/root'
import Contact from './routes/contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: Root.loader,
    action: Root.action,
    errorElement: null,
    children: [
      {
        path: ':contentId',
        element: <Contact />,
        errorElement: null,
        loader: Contact.loader,
        action: Contact.action,
        children: [
          {
            path: 'edit',
            element: <EditContact />,
            errorElement: null,
            loader: EditContact.loader,
            action: EditContact.action,

          }
        ]
      },

    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
