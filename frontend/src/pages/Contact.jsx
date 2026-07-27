import { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';
import { apiEndpoints } from '../config/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(apiEndpoints.contact.create, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="luxury-page">
      <section className="luxury-section pt-12">
        <div className="luxury-shell grid overflow-hidden border border-gold/25 bg-white shadow-[0_24px_70px_rgba(26,20,16,0.1)] dark:bg-[#120D0A] lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="bg-primary p-8 text-cream dark:bg-ink md:p-12 lg:p-14">
            <span className="luxury-eyebrow">Contact</span>
            <h1 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl">Let's plan the extraordinary.</h1>
            <p className="mb-12 leading-relaxed text-cream/70">Every unforgettable memory begins with a simple conversation. Reach out and let us shape the reveal with you.</p>

            <div className="space-y-8 border-y border-white/10 py-8">
              <div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">Visit Us</h3>
                <p className="text-cream/80">Bole, Dat Tower, 1st Floor<br />Addis Ababa, Ethiopia</p>
              </div>
              <div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">Call Us</h3>
                <a href="tel:+251968000002" className="text-cream/80 transition hover:text-gold">+251 96 800 0002</a>
              </div>
              <div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-gold">Business Hours</h3>
                <p className="text-cream/80">Mon - Sat: 9:00 AM - 6:00 PM<br />Sun: Exclusive Events Only</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-gold">Follow Our Journey</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/ava_luxury_surprise_planner/" target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center border border-gold/35 text-gold transition hover:bg-gold hover:text-primary" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://web.facebook.com/AvaLuxurySurprisePlanner/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center border border-gold/35 text-gold transition hover:bg-gold hover:text-primary" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/dolphin-foam/?originalSubdomain=et" target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center border border-gold/35 text-gold transition hover:bg-gold hover:text-primary" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://www.tiktok.com/@avaluxurysurpriseplanner" target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center border border-gold/35 text-gold transition hover:bg-gold hover:text-primary" aria-label="TikTok">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </a>
              </div>
            </div>
          </aside>

          <div className="p-8 md:p-12 lg:p-14">
            <h2 className="luxury-heading mb-10 text-3xl md:text-4xl">Send us an inquiry</h2>
            {submitStatus === 'success' && (
              <div className="mb-6 rounded border border-green-500/30 bg-green-500/10 p-4 text-green-700 dark:text-green-400">
                Thank you for reaching out. We will get back to you shortly.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 rounded border border-red-500/30 bg-red-500/10 p-4 text-red-700 dark:text-red-400">
                There was an error submitting your inquiry. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/65 dark:text-cream/65" htmlFor="name">Full Name *</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="luxury-input" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/65 dark:text-cream/65" htmlFor="email">Email Address *</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="luxury-input" placeholder="you@example.com" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/65 dark:text-cream/65" htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="luxury-input" placeholder="+251 911 234 567" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/65 dark:text-cream/65" htmlFor="message">Your Vision *</label>
                <textarea required id="message" name="message" rows="5" value={formData.message} onChange={handleChange} className="luxury-input resize-none" placeholder="Tell us about the occasion, recipient, date, and feeling you want to create." />
              </div>

              <button type="submit" className="luxury-button w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
