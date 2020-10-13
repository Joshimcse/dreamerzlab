import { useState, useEffect, useRef } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout">
      <Navbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isSidebarOpen ? (
        <>
          <div className="overlay" onClick={toggleSidebar}></div>
          <Sidebar toggleSidebar={toggleSidebar} />{' '}
        </>
      ) : null}
      {children}
    </div>
  );
};

export default Layout;
