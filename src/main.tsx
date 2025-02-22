import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from '../src/AppRouter';
import { Provider } from 'react-redux';
import store from './app_modules/redux_store/store';
import { ThemeProvider } from '../components/ui/theme-provider';
import reportWebVitals from './reportWebVitals';
// import { ThemeProvider } from './@/components/ui/theme-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals(console.log);
