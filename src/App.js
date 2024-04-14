import  ErrorPage from './components/Error';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { checkAuthLoader } from './utils/auth';
import {action as logoutAction} from "./pages/Logout";
import HomeRootLayout from './pages/HomeRootLayout';
import AuthenticationPage, {action as loginAuthAction} from "./pages/Authentication";
import HomePage from './components/Homepage';
import SiteInfoPage from './components/SiteInfoPage';
import LogsPage from './components/LogsPage';
import SignupPage, {action as signupAuthAction} from './pages/SignupPage';

const rou = createBrowserRouter([
  {
    path: '/',
    // errorElement: <ErrorPage />,
    id: 'root',
    children: [
      { 
        index: true, 
        element: <AuthenticationPage />,
        action: loginAuthAction, 
      },
      {
        path: '/sign-up', 
        element: <SignupPage />,
        action: signupAuthAction, 
      },
      {
        path: '/home',
        element: <HomeRootLayout />,
        errorElement: <ErrorPage />,
        loader: checkAuthLoader,
        children: [
          {
            index: true,
            element: <HomePage />,
            // loader: homeLoader,
          },
          // {
          //   path: ':eventId',
          //   id: 'event-detail',
            // loader: eventDetailLoader,
            // children: [
            //   {
            //     index: true,
            //     element: <EventDetailPage />,
            //     action: deleteEventAction,
            //   },
            //   {
            //     path: 'edit',
            //     element: <EditEventPage />,
            //     action: manipulateEventAction,
            //     loader: checkAuthLoader
            //   },
            // ],
          // },
          {
            path: 'site-info',
            element: <SiteInfoPage />,
            // action: manipulateEventAction,
          },
          {
            path: 'logs',
            element: <LogsPage />,
            // action: manipulateEventAction,
          },
          // {
          //   path: 'settings',
          //   element: <SettingsPage />,
          //   // action: manipulateEventAction,
          // },
        ],
      },
      {
        path: 'logout',
        action: logoutAction
      }
    ]
  },
]);


function App() {
  return (
    <RouterProvider router={rou}></RouterProvider>
  );
}

export default App;
