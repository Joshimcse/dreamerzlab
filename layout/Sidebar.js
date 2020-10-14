import { useEffect } from 'react';

import styles from '../styles/Layout.module.css';

const Sidebar = ({ toggleSidebar }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleESCKey, false);

    return () => {
      document.removeEventListener('keydown', handleESCKey, false);
    };
  }, []);

  // Click ESC Key for Hide Sidebar
  const handleESCKey = event => {
    if (event.keyCode === 27) {
      toggleSidebar(false);
    }
  };

  return <div className={styles.sidebar}></div>;
};

export default Sidebar;
