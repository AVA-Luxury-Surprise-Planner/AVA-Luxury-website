import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send } from 'lucide-react';
import axios from 'axios';

const eventTypes = [
  ['birthday', 'Birthday Surprise'],
  ['anniversary', 'Anniversary Surprise'],
  ['proposal', 'Proposal Setup'],
  ['babyshower', 'Baby Shower'],
  ['corporate', 'Corporate Event'],
  ['romantic', 'Romantic Dinner'],
  ['diaspora', 'Holiday & Diaspora Surprise'],
  ['custom', 'Custom Surprise'],
  ['other', 'Other'],
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventCategory: searchParams.get('eventType') || '',
    eventDate: '',
    guests: '',
    budget: '',
    location: '',
    notes: '',
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
      const response = await axios.post('http://localhost:5000/api/bookings', {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        eventCategory: formData.eventCategory,
        eventDate: formData.eventDate,
        guests: formData.guests ? parseInt(formData.guests) : undefined,
        budget: formData.budget,
        location: formData.location,
        notes: formData.notes,
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventCategory: '',
        eventDate: '',
        guests: '',
        budget: '',
        location: '',
        notes: '',
      });
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="luxury-page">
      <section className="luxury-section pt-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 max-w-2xl">
            <span className="luxury-eyebrow">Booking request</span>
            <h1 className="luxury-heading text-5xl md:text-6xl">Tell us what you want them to feel.</h1>
            <p className="luxury-copy mt-5 text-lg">Share the essentials and our team will follow up to shape the concept, scope, and next steps.</p>
          </div>

          <div className="luxury-surface p-6 md:p-10">
            {submitStatus === 'success' && (
              <div className="mb-6 rounded border border-green-500/30 bg-green-500/10 p-4 text-green-700 dark:text-green-400">
                Thank you for booking with Ava Luxury. We will contact you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 rounded border border-red-500/30 bg-red-500/10 p-4 text-red-700 dark:text-red-400">
                There was an error submitting your booking. Please try again.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="name">Full Name *</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="luxury-input" placeholder="John Doe" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="phone">Phone Number *</label>
                  <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="luxury-input" placeholder="+251 911 234 567" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="email">Email Address *</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="luxury-input" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="eventCategory">Event Type *</label>
                  <select required id="eventCategory" name="eventCategory" value={formData.eventCategory} onChange={handleChange} className="luxury-input">
                    <option value="">Select an event...</option>
                    {eventTypes.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="eventDate">Preferred Date *</label>
                  <input required type="date" id="eventDate" name="eventDate" value={formData.eventDate} onChange={handleChange} className="luxury-input" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="guests">Guests</label>
                  <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} className="luxury-input" placeholder="e.g. 12" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="luxury-input">
                    <option value="">Select a range...</option>
                    <option value="low">Under 10,000 ETB</option>
                    <option value="mid">10,000 - 30,000 ETB</option>
                    <option value="high">30,000 - 50,000 ETB</option>
                    <option value="luxury">50,000+ ETB</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="location">Venue / Location</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="luxury-input" placeholder="Atlas Dat Tower, private residence, rooftop, garden..." />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="notes">Special Requests</label>
                <textarea id="notes" name="notes" rows="5" value={formData.notes} onChange={handleChange} className="luxury-input resize-none" placeholder="Tell us about the person, occasion, style, and any secret details we should know." />
              </div>

              <button type="submit" className="luxury-button w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;

