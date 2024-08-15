import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Dashboard = lazy(() => import('../routes/Dashboard/Dashboard'));
const Profile = lazy(() => import('../routes/Profile/Profile'));
const Theme = lazy(() => import('../routes/Theme/Theme'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: 'profile',
        element: (
          <Suspense fallback={<div>Loading Profile...</div>}>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: 'theme',
        element: (
          <Suspense fallback={<div>Loading Theme...</div>}>
            <Theme />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
