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
            <a href="https://www.instagram.com/ava_luxury_surprise_planner/" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center border border-gold/30 text-gold transition hover:bg-gold hover:text-primary" aria-label="Instagram">IG</a>
            <a href="https://web.facebook.com/AvaLuxurySurprisePlanner/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center border border-gold/30 text-gold transition hover:bg-gold hover:text-primary" aria-label="Facebook">FB</a>
            <a href="https://www.linkedin.com/company/dolphin-foam/?originalSubdomain=et" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center border border-gold/30 text-gold transition hover:bg-gold hover:text-primary" aria-label="LinkedIn">IN</a>
            <a href="https://www.tiktok.com/@avaluxurysurpriseplanner" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center border border-gold/30 text-xs font-bold text-gold transition hover:bg-gold hover:text-primary" aria-label="TikTok">TT</a>
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
