import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Send, CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import { apiEndpoints } from '../config/api';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    eventCategory: '',
    eventDate: '',
    guestCount: '',
    budgetRange: '',
    venue: '',
    notes: '',
  });
  
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const [serverErrors, setServerErrors] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(apiEndpoints.categories.getAll);
        setCategories(data);
        
        const eventTypeParam = searchParams.get('eventType');
        if (eventTypeParam) {
           const matchedCat = data.find(
             c => c.slug === eventTypeParam || (c.name && c.name.toLowerCase().includes(eventTypeParam.toLowerCase()))
           );
           if (matchedCat) {
             setFormData(prev => ({ ...prev, eventCategory: matchedCat._id }));
           }
        }
      } catch (err) {
        console.error('Failed to load categories', err);
      }
    };
    fetchCategories();
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.eventCategory) newErrors.eventCategory = 'Event type is required';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    
    if (formData.eventDate) {
       const selectedDate = new Date(formData.eventDate);
       const minDate = new Date();
       minDate.setHours(0, 0, 0, 0);
       if (selectedDate <= minDate) {
          newErrors.eventDate = 'Event date must be in the future';
       }
    }

    if (formData.guestCount && Number(formData.guestCount) <= 0) {
      newErrors.guestCount = 'Guest count must be positive';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setServerErrors([]);

    try {
      await axios.post(apiEndpoints.bookings.create, {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        eventCategory: formData.eventCategory,
        eventDate: formData.eventDate,
        guestCount: formData.guestCount ? parseInt(formData.guestCount, 10) : undefined,
        budgetRange: formData.budgetRange || undefined,
        venue: formData.venue || undefined,
        notes: formData.notes || undefined,
      });

      setSubmitStatus('success');
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus('error');
      if (error.response?.data?.errors?.length) {
        setServerErrors(error.response.data.errors);
      } else if (error.response?.data?.error) {
        setServerErrors([error.response.data.error]);
      } else if (error.response?.data?.message) {
        setServerErrors([error.response.data.message]);
      } else {
        setServerErrors(['An unexpected error occurred. Please try again.']);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

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
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="mb-6 h-16 w-16 text-gold" />
                <h2 className="luxury-heading mb-4 text-3xl md:text-4xl">Request Received</h2>
                <p className="luxury-copy mb-8 max-w-md text-lg">
                  Thank you — we'll reach out within 24 hours to confirm your event details and begin shaping your bespoke experience.
                </p>
                <Link to="/" className="luxury-button">
                  Return Home
                </Link>
              </div>
            ) : (
              <>
                {submitStatus === 'error' && (
                  <div className="mb-8 rounded border border-red-500/30 bg-red-500/10 p-5 text-red-700 dark:text-red-400">
                    <h3 className="mb-2 font-bold">Booking could not be submitted</h3>
                    <ul className="ml-5 list-disc space-y-1 text-sm">
                      {serverErrors.map((err, i) => <li key={i}>{err}</li>)}
                    </ul>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-7" noValidate>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="fullName">Full Name *</label>
                      <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className={`luxury-input ${errors.fullName ? 'border-red-500/50 focus:border-red-500/50' : ''}`} placeholder="John Doe" />
                      {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`luxury-input ${errors.phone ? 'border-red-500/50 focus:border-red-500/50' : ''}`} placeholder="+251 911 234 567" />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`luxury-input ${errors.email ? 'border-red-500/50 focus:border-red-500/50' : ''}`} placeholder="john@example.com" />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="eventCategory">Event Type *</label>
                      <select id="eventCategory" name="eventCategory" value={formData.eventCategory} onChange={handleChange} className={`luxury-input ${errors.eventCategory ? 'border-red-500/50 focus:border-red-500/50' : ''}`}>
                        <option value="">Select an event...</option>
                        {categories.map((category) => <option key={category._id} value={category._id}>{category.name}</option>)}
                      </select>
                      {errors.eventCategory && <p className="mt-1 text-xs text-red-500">{errors.eventCategory}</p>}
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div>
                      <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="eventDate">Preferred Date *</label>
                      <input type="date" id="eventDate" name="eventDate" min={minDateStr} value={formData.eventDate} onChange={handleChange} className={`luxury-input ${errors.eventDate ? 'border-red-500/50 focus:border-red-500/50' : ''}`} />
                      {errors.eventDate && <p className="mt-1 text-xs text-red-500">{errors.eventDate}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="guestCount">Guests</label>
                      <input type="number" id="guestCount" name="guestCount" min="1" value={formData.guestCount} onChange={handleChange} className={`luxury-input ${errors.guestCount ? 'border-red-500/50 focus:border-red-500/50' : ''}`} placeholder="e.g. 12" />
                      {errors.guestCount && <p className="mt-1 text-xs text-red-500">{errors.guestCount}</p>}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="budgetRange">Budget Range</label>
                      <select id="budgetRange" name="budgetRange" value={formData.budgetRange} onChange={handleChange} className="luxury-input">
                        <option value="">Select a range...</option>
                        <option value="low">Under 10,000 ETB</option>
                        <option value="mid">10,000 - 30,000 ETB</option>
                        <option value="high">30,000 - 50,000 ETB</option>
                        <option value="luxury">50,000+ ETB</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="venue">Venue / Location</label>
                    <input type="text" id="venue" name="venue" value={formData.venue} onChange={handleChange} className="luxury-input" placeholder="Atlas Dat Tower, private residence, rooftop, garden..." />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="notes">Special Requests</label>
                    <textarea id="notes" name="notes" rows="5" value={formData.notes} onChange={handleChange} className="luxury-input resize-none" placeholder="Tell us about the person, occasion, style, and any secret details we should know." />
                  </div>

                  <button type="submit" className="luxury-button w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Booking Request'} <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;

