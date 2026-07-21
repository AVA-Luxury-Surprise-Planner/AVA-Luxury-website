import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-cream py-8 mt-12 border-t border-gold/20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-heading text-gold font-bold mb-4">Ava Luxury</h3>
          <p className="text-sm opacity-80 mb-2">The preferred surprise planner in town.</p>
          <p className="text-sm opacity-80">Bole, Atlas Dat Tower, 1st Floor<br/>Addis Ababa, Ethiopia</p>
        </div>
        <div>
          <h3 className="text-lg font-heading text-gold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/categories" className="hover:text-gold transition">Our Services</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-heading text-gold mb-4">Follow Us</h3>
          <p className="text-sm opacity-80 mb-2">Join our 94.5K+ followers on Instagram.</p>
          <a href="#" className="inline-block mt-2 text-gold hover:text-amber transition">
            @avaluxury
          </a>
        </div>
      </div>
      <div className="text-center text-xs opacity-50 mt-8 pt-4 border-t border-cream/10">
        &copy; {new Date().getFullYear()} Ava Luxury Surprise Planner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
