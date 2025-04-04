import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { EditContact, Home, NewContact } from './pages';

const routes = [
  {
    path: '/',
    children: [{ path: '', element: <Home /> }],
  },
  {
    path: '/',
    children: [{ path: 'new', element: <NewContact /> }],
  },
  {
    path: '/',
    children: [{ path: 'edit/:id', element: <EditContact /> }],
  },
];

export default function Routes() {
  const router = createBrowserRouter(routes, {
    future: {
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  });

  return <RouterProvider router={router} />;
}
