import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './app/screens/DashboardScreen';
import ErrorScreen from './app/screens/ErrorScreen';
import FormScreen from './app/screens/FormScreen';
import MessageContextProvider from './services/message/MessageContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: '/',
        element: <FormScreen />,
      },
    ],
  },
]);

function App() {
  return (
    <MessageContextProvider>
      <RouterProvider router={router} />
    </MessageContextProvider>
  );
}

export default App;
