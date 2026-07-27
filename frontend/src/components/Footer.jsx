import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white/85 text-primary transition-colors duration-300 dark:border-white/10 dark:bg-[#0D0A08] dark:text-cream">
      <div className="luxury-shell grid grid-cols-1 gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <h3 className="mb-4 font-heading text-2xl font-bold text-gold">Ava Luxury</h3>
          <p className="luxury-copy mb-5 text-sm">The preferred surprise planner in town, creating unforgettable moments of joy with quiet precision.</p>
          <p className="text-sm leading-relaxed text-primary/65 dark:text-cream/65">Bole, Atlas Dat Tower, 1st Floor<br />Addis Ababa, Ethiopia</p>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg text-gold">Explore</h3>
          <ul className="space-y-3 text-sm text-primary/70 dark:text-cream/70">
            <li><Link to="/about" className="hover:text-gold transition">About</Link></li>
            <li><Link to="/categories" className="hover:text-gold transition">Services</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition">Journal</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg text-gold">Social</h3>
          <p className="luxury-copy mb-4 text-sm">Join 94.5K+ followers for event inspiration and behind-the-scenes reveals.</p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/ava_luxury_surprise_planner/" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center border border-gold/30 text-gold transition hover:bg-gold hover:text-primary" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://web.facebook.com/AvaLuxurySurprisePlanner/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center border border-gold/30 text-gold transition hover:bg-gold hover:text-primary" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/dolphin-foam/?originalSubdomain=et" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center border border-gold/30 text-gold transition hover:bg-gold hover:text-primary" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@avaluxurysurpriseplanner" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center border border-gold/30 text-gold transition hover:bg-gold hover:text-primary" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg text-gold">Newsletter</h3>
          <p className="luxury-copy mb-4 text-sm">Receive refined celebration ideas and seasonal availability notes.</p>
          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); }}>
            <input required type="email" placeholder="Email address" className="luxury-input text-sm" />
            <button type="submit" className="luxury-button w-full px-4 py-3 text-xs">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-border/70 px-6 py-5 text-center text-xs text-primary/50 dark:border-white/10 dark:text-cream/45">
        &copy; {new Date().getFullYear()} Ava Luxury Surprise Planner. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
