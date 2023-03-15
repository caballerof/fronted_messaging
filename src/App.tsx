import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './app/screens/DashboardScreen';
import ErrorScreen from './app/screens/ErrorScreen';
import FormScreen from './app/screens/FormScreen';
import CategoryContextProvider from './services/category/CategoryContext';
import LogContextProvider from './services/log/LogContext';
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
    <CategoryContextProvider>
      <MessageContextProvider>
        <LogContextProvider>
          <RouterProvider router={router} />
        </LogContextProvider>
      </MessageContextProvider>
    </CategoryContextProvider>
  );
}

export default App;
