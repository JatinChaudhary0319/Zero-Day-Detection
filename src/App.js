import ErrorPage from './components/Error';
import SignIn from './components/Login';
import SignUp from './components/Signup';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { checkAuthLoader } from './utils/auth';
import {action as logoutAction} from "./pages/Logout";
import HomeRootLayout from './pages/HomeRootLayout';
import AuthenticationPage, {action as authAction} from "./pages/Authentication";
import HomePage from './components/Homepage';
import SiteInfoPage from './components/SiteInfoPage';
import LogsPage from './components/LogsPage';

const rou = createBrowserRouter([
  {
    path: '/', 
    element: <SignIn />,
  },
  {
    path: '/sign-up', 
    element: <SignUp />
  },
  {
    path: '/home',
    element: <HomeRootLayout />,
    // loader: checkAuthLoader,
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
    path: 'auth',
    element: <AuthenticationPage />,
    action: authAction
  },
  {
    path: 'logout',
    action: logoutAction
  }
]);


function App() {
  return (
    <RouterProvider router={rou}></RouterProvider>
  );
}

export default App;
