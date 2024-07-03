import  './mobile.css';

interface MobileNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`mobileMenu ${isOpen ? 'active' : ''}`}
      onClick={toggleMenu}
      role="button"
      aria-expanded={isOpen}
      aria-label="Toggle menu"
    >
      <div className='mobileMenuContainer'>
      <div>
        <span className='cine'>Cine</span>
        <span className='dev'>Dev</span>
      </div>
      <div>
        <ul className='list'>
          <li className='link'>
            <a className='links' href="#">
              Home
            </a>
          </li>
          <li className='link'>
            <a className='links' href="#">
              Streaming
            </a>
          </li>
          <li className='link'>
            <a className='links' href="#">
              Upcoming
            </a>
          </li>
        </ul>
      </div>
    </div>

    </div>
  );
};

export default MobileNav;
