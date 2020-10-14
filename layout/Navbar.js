import { MdClose, MdMenu } from 'react-icons/md';

import styles from '../styles/Layout.module.css';

const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.menuBtn} onClick={toggleSidebar}>
        {isOpen ? <MdClose /> : <MdMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
