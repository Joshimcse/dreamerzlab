import { MdClose, MdMenu } from 'react-icons/md';

const Navbar = ({ isOpen, toggleSidebar }) => {
  return (
    <nav>
      <div className="menu-btn" onClick={toggleSidebar}>
        {isOpen ? <MdClose /> : <MdMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
