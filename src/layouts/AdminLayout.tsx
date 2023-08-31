import { Sidebar } from 'components/main';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <main className="p-4 sm:ml-64">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
