import { Outlet } from 'react-router-dom';

export default function IndexLayout() {
  return (
    <>
      <main id="main">
        <Outlet />
      </main>
    </>
  );
}
