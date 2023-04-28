import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {System} from './pages/System.tsx';
import {AuthPage} from './pages/AuthPage.tsx';
import {DashboardDrivers} from './components/DashboardDrivers.tsx';
import {DashboardOrders} from './components/DashboardOrders.tsx';
import {DashboardSystemParams} from './components/DashboardSystemParams.tsx';
import {DashboardTechnics} from './components/DashboardTechnics.tsx';
import {FormOrderChange} from './components/FormOrderChange.tsx';
import {FormOrderCreate} from './components/FormOrderCreate.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <System />,
    children: [
      {
        path: 'main',
        element: <DashboardSystemParams />,
      },
      {
        path: 'form-order',
        element: <FormOrderCreate />,
      },
      {
        path: 'dashboard-technics',
        element: <DashboardTechnics />,
      },
      {
        path: 'dashboard-drivers',
        element: <DashboardDrivers />,
      },
      {
        path: 'dashboard-orders',
        element: <DashboardOrders />,
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
