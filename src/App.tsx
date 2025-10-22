
import { RouterProvider } from 'react-router-dom';
import './App.scss'
import { router } from './router/Router';
import { useEffect } from 'react';
import useRole from './shared/hooks/useRole';

function App() {
  const { setRole } = useRole();
  useEffect(() => {
    setRole("vicePrincipal");
  }, []);

  return <RouterProvider router={router} />
}

export default App
