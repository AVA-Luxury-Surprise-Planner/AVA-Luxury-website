import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../context/useTheme';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/categories', label: 'Services' },
  { to: '/blog', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const isSolid = !isHome || scrolled || isOpen;
  const linkClass = isSolid
    ? 'text-primary/80 hover:text-gold dark:text-cream/80 dark:hover:text-gold'
    : 'text-cream/90 hover:text-gold';

  return (
    <>
      <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isSolid ? 'border-b border-border/70 bg-white/90 py-3 shadow-[0_10px_30px_rgba(26,20,16,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-ink/90' : 'bg-transparent py-5'}`}>
        <div className="luxury-shell flex items-center justify-between px-6">
          <Link to="/" className="relative z-40 font-heading text-2xl font-bold tracking-wide text-gold">
            Ava Luxury
          </Link>

          <div className="relative z-40 hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className={`${linkClass} text-sm font-semibold uppercase tracking-[0.16em] transition`}>
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className={`grid h-10 w-10 place-items-center border transition ${isSolid ? 'border-border text-primary hover:border-gold hover:text-gold dark:border-white/10 dark:text-cream' : 'border-white/25 text-cream hover:border-gold hover:text-gold'}`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/booking" className="luxury-button px-5 py-2.5 text-xs">
              Book Now
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className={`relative z-40 grid h-11 w-11 place-items-center border transition md:hidden ${isSolid ? 'border-border text-primary dark:border-white/10 dark:text-cream' : 'border-white/25 text-cream'}`}
            aria-label="Open menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute left-0 top-full w-full border-t border-border bg-white/95 px-6 py-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-ink/95 md:hidden">
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="text-lg font-heading font-bold text-primary transition hover:text-gold dark:text-cream">
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-3">
                <button type="button" onClick={toggleTheme} className="grid h-11 w-11 place-items-center border border-border text-primary transition hover:border-gold hover:text-gold dark:border-white/10 dark:text-cream" aria-label="Toggle theme">
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <Link to="/booking" className="luxury-button flex-1 py-3">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      {!isHome && <div className="h-20 w-full bg-transparent" />}
    </>
  );
};

export default Navbar;

