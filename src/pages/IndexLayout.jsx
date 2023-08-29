import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function IndexLayout() {
  return (
    <>
      <main id="main">
        <Outlet />
      </main>
    </>
  );
}
