import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import AboutUs from './Pages/AboutUs';
import Help from './Pages/Help';
import PopularDestinations from './Pages/PopularDestinations';
import OurPackages from './Pages/OurPackages';
import SignIn from './Pages/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        index : true,
        element : <HomePage />
      },
      {
        path : "about",
        element : <AboutUs />
      },
      {
        path : "help",
        element : <Help />
      },
      {
        path : "populardestinations",
        element : <PopularDestinations />
      },
      {
        path : "packages",
        element : <OurPackages />
      },
      {
        path : "signin",
        element : <SignIn />
      },
      {
        path : "*",
        element : <NotFoundPage />
      },
    ]
  },
]);


const App = () => {
  return <RouterProvider router={router} />
}

export default App