import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from 'react-router-dom'; // Make sure this import is correct
import { RouterProvider } from 'react-router-dom';

const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={approuter}>
        {/* Your components and content */}
      </RouterProvider>
    </div>
  );
}

export default Body;
