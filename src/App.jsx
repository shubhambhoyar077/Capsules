import './App.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import IndexLayout from './pages/IndexLayout';
import Capsules from './pages/Capsules';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<IndexLayout />}>
      <Route index element={<Capsules />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
