
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Login from '../pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'careers',
        element: <Careers />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
