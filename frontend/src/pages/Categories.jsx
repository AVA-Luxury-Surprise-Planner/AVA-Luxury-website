import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';
import axios from 'axios';

const categories = [
  {
    id: 'proposal',
    label: 'Proposal Setup',
    accent: 'from-rose-950 via-stone-900 to-primary',
    thumbAccent: 'from-rose-950 to-rose-700',
    items: [
      { name: 'Rooftop Candle Ring Proposal', price: 'Starting at 15,000 ETB' },
      { name: 'Garden Floral Arch Setup', price: 'Starting at 12,000 ETB' },
      { name: 'Balloon Heart Surprise', price: 'Starting at 8,000 ETB' },
      { name: 'Rose Petal Bedroom Reveal', price: 'Starting at 9,500 ETB' },
      { name: 'Luxury Will You Marry Me?', price: 'Starting at 20,000 ETB' },
      { name: 'Private Rooftop Romance', price: 'Starting at 18,000 ETB' },
      { name: 'Candle Trail Surprise', price: 'Starting at 7,000 ETB' },
      { name: 'Floral Ring Ceremony Setup', price: 'Starting at 14,000 ETB' },
    ],
  },
  {
    id: 'birthday',
    label: 'Birthday Celebration',
    accent: 'from-amber-950 via-stone-900 to-primary',
    thumbAccent: 'from-amber-950 to-amber-700',
    items: [
      { name: 'Lavish Birthday Room Decor', price: 'Starting at 7,000 ETB' },
      { name: 'Outdoor Surprise Party Setup', price: 'Starting at 14,000 ETB' },
      { name: 'Balloon Bouquet & Cake Setup', price: 'Starting at 5,000 ETB' },
      { name: 'Premium Birthday Table Styling', price: 'Starting at 10,000 ETB' },
      { name: 'VIP Surprise Celebration', price: 'Starting at 18,000 ETB' },
      { name: 'Garden Birthday Party', price: 'Starting at 12,000 ETB' },
      { name: 'Rooftop Birthday Reveal', price: 'Starting at 16,000 ETB' },
      { name: 'Luxury Photobooth Setup', price: 'Starting at 9,000 ETB' },
    ],
  },
  {
    id: 'anniversary',
    label: 'Anniversary Surprise',
    accent: 'from-stone-800 via-stone-900 to-primary',
    thumbAccent: 'from-stone-800 to-stone-600',
    items: [
      { name: 'Candlelit Anniversary Setup', price: 'Starting at 9,000 ETB' },
      { name: 'Vow Renewal Garden Ceremony', price: 'Starting at 16,000 ETB' },
      { name: 'Private Terrace Dinner', price: 'Starting at 12,000 ETB' },
      { name: 'Petal & Lantern Romance Setup', price: 'Starting at 8,500 ETB' },
      { name: 'Luxury Hotel Room Takeover', price: 'Starting at 22,000 ETB' },
      { name: 'Floating Candle Dinner Setup', price: 'Starting at 11,000 ETB' },
      { name: 'Bohemian Anniversary Picnic', price: 'Starting at 7,500 ETB' },
      { name: 'Midnight Surprise Reveal', price: 'Starting at 14,000 ETB' },
    ],
  },
  {
    id: 'romantic',
    label: 'Romantic Dinner',
    accent: 'from-red-950 via-stone-900 to-primary',
    thumbAccent: 'from-red-950 to-red-700',
    items: [
      { name: 'Indoor Romantic Bohemian Setup', price: 'Starting at 6,000 ETB' },
      { name: 'Sunset Dinner Under Open Sky', price: 'Starting at 9,000 ETB' },
      { name: 'Royal Terrace Rooftop Candle', price: 'Starting at 4,500 ETB' },
      { name: 'Premium Love Room with Glow', price: 'Starting at 13,000 ETB' },
      { name: 'Lavish Daycation Getaway', price: 'Starting at 14,000 ETB' },
      { name: 'Golden Candlelight Dinner', price: 'Starting at 8,000 ETB' },
      { name: 'Intimate Rooftop Date Night', price: 'Starting at 10,000 ETB' },
      { name: 'Rose & Champagne Setup', price: 'Starting at 12,000 ETB' },
    ],
  },
  {
    id: 'babyshower',
    label: 'Baby Shower',
    accent: 'from-sky-950 via-stone-900 to-primary',
    thumbAccent: 'from-sky-950 to-sky-700',
    items: [
      { name: 'Pastel Balloon Arch Setup', price: 'Starting at 7,500 ETB' },
      { name: 'Elegant Dessert Table Styling', price: 'Starting at 11,000 ETB' },
      { name: 'Floral Wreath Garden Party', price: 'Starting at 9,000 ETB' },
      { name: 'Bohemian Baby Shower Decor', price: 'Starting at 8,000 ETB' },
      { name: 'VIP Baby Reveal Surprise', price: 'Starting at 15,000 ETB' },
      { name: 'Gender Reveal Balloon Pop', price: 'Starting at 6,000 ETB' },
      { name: 'Luxury Mom-to-Be Pamper', price: 'Starting at 12,000 ETB' },
      { name: 'Garden Tea Party Setup', price: 'Starting at 9,500 ETB' },
    ],
  },
  {
    id: 'corporate',
    label: 'Corporate Events',
    accent: 'from-zinc-800 via-stone-900 to-primary',
    thumbAccent: 'from-zinc-800 to-zinc-600',
    items: [
      { name: 'Executive Appreciation Dinner', price: 'Starting at 25,000 ETB' },
      { name: 'Product Launch Gala Setup', price: 'Starting at 30,000 ETB' },
      { name: 'Team Building Retreat Package', price: 'Starting at 20,000 ETB' },
      { name: 'Awards Night Ceremony Styling', price: 'Starting at 28,000 ETB' },
      { name: 'Brand Activation Event', price: 'Starting at 35,000 ETB' },
      { name: 'Corporate Networking Gala', price: 'Starting at 22,000 ETB' },
      { name: 'Executive Boardroom Styling', price: 'Starting at 15,000 ETB' },
      { name: 'Company Milestone Celebration', price: 'Starting at 40,000 ETB' },
    ],
  },
  {
    id: 'diaspora',
    label: 'Holiday & Diaspora Surprise',
    accent: 'from-emerald-950 via-stone-900 to-primary',
    thumbAccent: 'from-emerald-950 to-emerald-700',
    items: [
      { name: 'Airport Homecoming Welcome', price: 'Starting at 6,000 ETB' },
      { name: 'Grand Family Reunion Setup', price: 'Starting at 15,000 ETB' },
      { name: 'Holiday Surprise Package', price: 'Starting at 12,000 ETB' },
      { name: 'Welcome Home Dinner Event', price: 'Starting at 9,000 ETB' },
      { name: 'Customized Return Surprise', price: 'Starting at 18,000 ETB' },
      { name: 'Cultural Welcome Ceremony', price: 'Starting at 14,000 ETB' },
      { name: 'Festive Holiday Decoration', price: 'Starting at 8,000 ETB' },
      { name: 'Surprise Gift Reveal Setup', price: 'Starting at 7,000 ETB' },
    ],
  },
  {
    id: 'custom',
    label: 'Custom Surprise',
    accent: 'from-violet-950 via-stone-900 to-primary',
    thumbAccent: 'from-violet-950 to-violet-700',
    items: [
      { name: 'Bespoke Dream Event', price: 'Price on consultation' },
      { name: 'Surprise Picnic Adventure', price: 'Starting at 10,000 ETB' },
      { name: 'Full Venue Transformation', price: 'Starting at 35,000 ETB' },
      { name: 'Cultural Themed Celebration', price: 'Starting at 20,000 ETB' },
      { name: 'Multimedia Surprise Experience', price: 'Starting at 25,000 ETB' },
      { name: 'Pop-Up Art Installation Event', price: 'Starting at 18,000 ETB' },
      { name: 'Flash Mob Surprise', price: 'Starting at 15,000 ETB' },
      { name: 'Themed Costume Party Setup', price: 'Starting at 12,000 ETB' },
    ],
  },
];

const Categories = () => {
  const [activeId, setActiveId] = useState('proposal');
  const [apiCategories, setApiCategories] = useState([]);
  const active = categories.find((category) => category.id === activeId);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        setApiCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="luxury-page">
      <section className="bg-primary px-6 py-20 text-center dark:bg-ink">
        <div className="mx-auto max-w-2xl">
          <span className="luxury-eyebrow">Ava Luxury</span>
          <h1 className="font-heading text-5xl font-bold text-white md:text-6xl">Our <span className="font-medium italic text-gold">Services</span></h1>
          <p className="mt-5 text-cream/70">Explore curated experiences and select the direction that fits your occasion.</p>
        </div>
      </section>

      <section className="luxury-section pt-10">
        <div className="luxury-shell flex flex-col gap-6 lg:flex-row lg:items-start">
          <aside className="luxury-surface w-full lg:sticky lg:top-24 lg:w-72">
            <div className="border-b border-border/70 px-5 py-4 dark:border-white/10">
              <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-primary dark:text-cream">Categories</h2>
            </div>
            <div className="divide-y divide-border/60 dark:divide-white/10">
              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  className={`flex w-full items-center gap-3 px-5 py-4 text-left transition ${activeId === category.id ? 'bg-gold/10 text-gold' : 'text-primary hover:bg-cream dark:text-cream dark:hover:bg-white/5'}`}
                >
                  <span className={`h-10 w-10 flex-shrink-0 bg-gradient-to-br ${category.thumbAccent}`} />
                  <span className="text-sm font-semibold leading-snug">{category.label}</span>
                  {activeId === category.id && <ArrowRight className="ml-auto" size={15} />}
                </button>
              ))}
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className={`relative mb-6 h-56 overflow-hidden bg-gradient-to-br ${active.accent}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <span className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">Selected Experience</span>
                <h2 className="font-heading text-4xl font-bold text-white md:text-6xl">{active.label}</h2>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold to-transparent" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {active.items.map((item) => (
                <article key={item.name} className="luxury-surface group overflow-hidden">
                  <div className={`relative h-40 bg-gradient-to-br ${active.accent}`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-white/5" />
                    <span className="absolute left-3 top-3 bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">Addis Ababa</span>
                  </div>
                  <div className="flex min-h-44 flex-col p-4">
                    <h3 className="mb-2 text-sm font-bold leading-snug text-primary transition group-hover:text-gold dark:text-cream">{item.name}</h3>
                    <p className="mb-4 text-xs font-semibold tracking-wide text-gold">{item.price}</p>
                    <Link to={`/categories/${active.id}`} className="mt-auto inline-flex items-center justify-center gap-2 border border-primary/25 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary transition hover:border-gold hover:bg-gold dark:border-white/20 dark:text-cream dark:hover:text-primary">
                      <Eye size={13} /> View Detail
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 border border-gold/20 bg-primary p-8 text-center text-cream dark:bg-ink">
              <p className="mb-5 text-sm text-cream/70">Ready to book this experience?</p>
              <Link to={`/booking?eventType=${active.id}`} className="luxury-button">Book {active.label} Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
