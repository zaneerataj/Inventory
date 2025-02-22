import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import prodRoutes from './routes/prodRoutes';
import devRoutes from './routes/devRoutes';
import testRoutes from './routes/testRoutes';

interface AppRoute {
  path: string;
  element: React.ReactNode;
}

// Determine which routes to use based on environment
let routes: AppRoute[];
if (process.env.NODE_ENV === 'production') {
  routes = prodRoutes;
} else if (process.env.NODE_ENV === 'test') {
  routes = testRoutes;
} else if (process.env.NODE_ENV === 'developement') {
  routes = devRoutes;
} else {
  routes = devRoutes;
}

export const router = createBrowserRouter(routes);
