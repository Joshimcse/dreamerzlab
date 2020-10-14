import { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.layout}>
      <Navbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {isSidebarOpen ? (
        <>
          <div className={styles.overlay} onClick={toggleSidebar}></div>
          <Sidebar toggleSidebar={toggleSidebar} />
        </>
      ) : null}
      <div className={styles.contentArea}>{children}</div>
    </div>
  );
};

export default Layout;
