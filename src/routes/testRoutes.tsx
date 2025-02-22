import * as React from 'react';
import ExampleComponent from '../app_modules/ExampleComponent';
import Usage from '../app_modules/usage/Usage';

interface AppRoute {
  path: string;
  element: React.ReactNode;
}

// Define routes for developement
const testRoutes: AppRoute[] = [
  {
    path: '/',
    element: <h1>test routes</h1>,
  },
  {
    path: '/test',
    element: <h1>Test envirenment</h1>,
  },
  // Add more development routes as needed
];

export default testRoutes;
