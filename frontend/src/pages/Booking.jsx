import { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    date: '',
    guests: '',
    budget: '',
    location: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send data to API
    console.log('Booking submitted:', formData);
    alert('Thank you for booking with Ava Luxury! We will contact you soon.');
  };

  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading text-primary font-bold mb-4">Book Your Event</h1>
        <p className="text-lg opacity-80 text-primary">Let us create an unforgettable experience for you and your loved ones.</p>
        <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded"></div>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-cream/50">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-primary font-semibold mb-2" htmlFor="name">Full Name *</label>
              <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-code-bg rounded focus:outline-none focus:ring-2 focus:ring-gold transition" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-primary font-semibold mb-2" htmlFor="phone">Phone Number *</label>
              <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-code-bg rounded focus:outline-none focus:ring-2 focus:ring-gold transition" placeholder="+251 911 234 567" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-primary font-semibold mb-2" htmlFor="email">Email Address *</label>
              <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-code-bg rounded focus:outline-none focus:ring-2 focus:ring-gold transition" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-primary font-semibold mb-2" htmlFor="eventType">Event Type *</label>
              <select required id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-code-bg rounded focus:outline-none focus:ring-2 focus:ring-gold transition text-primary">
                <option value="">Select an event...</option>
                <option value="birthday">Birthday Surprise</option>
                <option value="anniversary">Anniversary Surprise</option>
                <option value="proposal">Proposal Setup</option>
                <option value="babyshower">Baby Shower</option>
                <option value="corporate">Corporate Event</option>
                <option value="romantic">Romantic Dinner</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-primary font-semibold mb-2" htmlFor="date">Preferred Date *</label>
              <input required type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-code-bg rounded focus:outline-none focus:ring-2 focus:ring-gold transition text-primary" />
            </div>
            <div>
              <label className="block text-primary font-semibold mb-2" htmlFor="guests">Number of Guests</label>
              <input type="number" id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-code-bg rounded focus:outline-none focus:ring-2 focus:ring-gold transition" placeholder="e.g., 2" />
            </div>
            <div>
              <label className="block text-primary font-semibold mb-2" htmlFor="budget">Budget Range</label>
              <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-code-bg rounded focus:outline-none focus:ring-2 focus:ring-gold transition text-primary">
                <option value="">Select a range...</option>
                <option value="low">Under 10,000 ETB</option>
                <option value="mid">10,000 - 30,000 ETB</option>
                <option value="high">30,000 - 50,000 ETB</option>
                <option value="luxury">50,000+ ETB</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-primary font-semibold mb-2" htmlFor="location">Venue / Location</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-code-bg rounded focus:outline-none focus:ring-2 focus:ring-gold transition" placeholder="e.g., Atlas Dat Tower or Private Residence" />
          </div>

          <div>
            <label className="block text-primary font-semibold mb-2" htmlFor="notes">Special Requests / Notes</label>
            <textarea id="notes" name="notes" rows="4" value={formData.notes} onChange={handleChange} className="w-full px-4 py-3 border border-border bg-code-bg rounded focus:outline-none focus:ring-2 focus:ring-gold transition" placeholder="Tell us more about your dream surprise..."></textarea>
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full md:w-auto px-10 py-4 bg-primary text-gold font-bold text-lg rounded shadow-lg hover:bg-gold hover:text-primary transition transform hover:-translate-y-1">
              Submit Booking Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
