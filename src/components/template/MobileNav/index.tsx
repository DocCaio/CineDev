import Link from 'next/link';
import './mobile.css';

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
          <Link href='/' className='cine'>Cine</Link>
          <Link href='/' className='dev'>Dev</Link>
        </div>
        <div>
          <ul className='list'>
            <li className='link'>
              <Link className='links' href="/">
                Home
              </Link>
            </li>
            <li className='link'>
              <Link className='links' href="/pages/movies">
                Streaming
              </Link>
            </li>
            <li className='link'>
              <Link className='links' href="/pages/Upcoming">
                Upcoming
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default MobileNav;
