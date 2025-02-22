import * as React from 'react';

interface AppRoute {
  path: string;
  element: React.ReactNode;
}

// Define routes for production
const prodRoutes: AppRoute[] = [
  {
    path: '/',
    element: <h1>Production Home Page</h1>,
  },
  {
    path: '/about',
    element: <h1>Production About Page</h1>,
  },
  // Add more production routes as needed
];

export default prodRoutes;
