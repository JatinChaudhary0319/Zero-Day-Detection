import { Outlet } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import Footer from './Footer';
import Header from './Header';

function HomeRootLayout() {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-grow bg-[#FFF] w-[80%]">
          <Header />
          <Outlet />
          <Footer  />
        </div>
    </div>
  );
}

export default HomeRootLayout;
