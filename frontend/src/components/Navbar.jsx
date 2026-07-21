import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Styling based on route: Home page gets transparent/absolute navbar overlaying the hero, other pages get solid bar
  const navClasses = isHome 
    ? 'absolute top-0 left-0 w-full z-30 bg-transparent' 
    : 'w-full z-30 bg-primary shadow-md relative';

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand / Logo */}
        <Link to="/" className="text-2xl font-heading text-gold font-bold drop-shadow-md z-40 relative">
          Ava Luxury
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center z-40 relative">
          <Link to="/" className="text-cream hover:text-gold transition">Home</Link>
          <Link to="/categories" className="text-cream hover:text-gold transition">Categories</Link>
          <Link to="/blog" className="text-cream hover:text-gold transition">Blog</Link>
          <Link to="/contact" className="text-cream hover:text-gold transition">Contact</Link>
          <Link to="/booking" className="bg-gold text-primary px-5 py-2 rounded shadow hover:bg-amber transition font-semibold">
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-cream text-3xl z-40 relative focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-primary flex flex-col items-center pt-20 pb-8 space-y-6 z-30 shadow-xl border-b border-gold/20">
          <Link to="/" className="text-cream hover:text-gold transition text-lg" onClick={toggleMenu}>Home</Link>
          <Link to="/categories" className="text-cream hover:text-gold transition text-lg" onClick={toggleMenu}>Categories</Link>
          <Link to="/blog" className="text-cream hover:text-gold transition text-lg" onClick={toggleMenu}>Blog</Link>
          <Link to="/contact" className="text-cream hover:text-gold transition text-lg" onClick={toggleMenu}>Contact</Link>
          <Link to="/booking" className="bg-gold text-primary px-6 py-3 rounded shadow hover:bg-amber transition font-semibold text-lg" onClick={toggleMenu}>
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
