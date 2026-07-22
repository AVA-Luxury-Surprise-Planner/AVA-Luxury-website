import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const services = [
  { to: '/categories/proposal', number: '01', title: 'Proposal', detail: 'Private reveals, floral scenes, rooftops, musicians', accent: 'from-rose-950 via-stone-900 to-primary', size: 'md:row-span-2 md:h-[520px]' },
  { to: '/categories/birthday', number: '02', title: 'Birthday', detail: 'Milestone parties with cake, styling, and surprise entries', accent: 'from-amber-950 via-stone-900 to-primary', size: 'md:h-[252px]' },
  { to: '/categories/anniversary', number: '03', title: 'Anniversary', detail: 'Candlelit dinners, vow renewals, and intimate rooms', accent: 'from-stone-800 via-stone-900 to-primary', size: 'md:h-[252px]' },
  { to: '/categories/romantic', number: '04', title: 'Romantic Dinner', detail: 'Tables for two, petals, private chefs, soft light', accent: 'from-red-950 via-stone-900 to-primary', size: 'md:h-[252px]' },
  { to: '/categories/babyshower', number: '05', title: 'Baby Shower', detail: 'Warm pastel styling, dessert tables, and family moments', accent: 'from-sky-950 via-stone-900 to-primary', size: 'md:h-[224px]' },
  { to: '/categories/corporate', number: '06', title: 'Corporate', detail: 'Refined launches, dinners, awards, and brand moments', accent: 'from-zinc-800 via-stone-900 to-primary', size: 'md:h-[224px]' },
  { to: '/categories/diaspora', number: '07', title: 'Diaspora', detail: 'Homecomings, holiday welcomes, and long-distance surprises', accent: 'from-emerald-950 via-stone-900 to-primary', size: 'md:h-[224px]' },
  { to: '/categories/custom', number: '08', title: 'Custom', detail: 'One-of-one concepts shaped around your story', accent: 'from-violet-950 via-stone-900 to-primary', size: 'md:h-[224px]' },
];

const standards = [
  'Private consultation and concept direction',
  'Premium vendor sourcing and venue styling',
  'Precise setup, timing, reveal, and guest coordination',
];

const testimonials = [
  {
    quote: 'Awesome surprise planners. Kalkidan did an amazing job providing the food, cake and entertainment with calming professionalism.',
    name: 'Fetle W/Tsa',
    location: 'Addis Ababa',
  },
  {
    quote: 'The ceremony was amazingly beautiful. Their customer service was kind, down to earth, and more than incredible.',
    name: 'Soliana Gebremariam',
    location: 'Addis Ababa',
  },
  {
    quote: 'AVA is next level. The locations they choose, the surprise they bring, and the team spirit are beyond imaginable.',
    name: 'Luka Mesfin',
    location: 'Addis Ababa',
  },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="luxury-page">
      <section className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 h-full w-full scale-105 transform bg-[url('/Hero.png')] bg-cover bg-center bg-no-repeat transition-transform duration-[20s] ease-out hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1A1410] dark:to-primary" />

        <div className={`relative z-10 mx-auto flex h-full max-w-4xl transform flex-col items-center justify-center px-4 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="mb-6 border-b border-gold/30 pb-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold md:text-sm">
            The Pinnacle of Bespoke Experiences
          </span>

          <h1 className="mb-6 font-heading text-5xl font-bold leading-tight text-white drop-shadow-2xl md:text-7xl lg:text-8xl">
            Ava <span className="font-light italic text-gold">Luxury</span>
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg font-light leading-relaxed text-cream/90 md:text-2xl">
            The preferred surprise planner in town
          </p>

          <p className="mb-12 text-base font-light italic tracking-wide text-gold md:text-xl">
            Creating Unforgettable Moments of Joy
          </p>

          <div className="flex w-full flex-col justify-center gap-6 sm:w-auto sm:flex-row">
            <Link to="/booking" className="bg-gold px-10 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-colors duration-300 hover:bg-white">
              Begin Your Journey
            </Link>
            <Link to="/categories" className="border border-white bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-primary">
              Discover Services
            </Link>
          </div>
        </div>
      </section>
      <section className="luxury-section pt-16">
        <div className="luxury-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="luxury-eyebrow">A quieter kind of luxury</span>
            <h2 className="luxury-heading text-4xl md:text-5xl">Designed for the moment they never see coming.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Concept', 'Sourcing', 'Reveal'].map((item, index) => (
              <div key={item} className="luxury-surface p-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gold">0{index + 1}</p>
                <h3 className="mb-2 font-heading text-2xl font-bold text-primary dark:text-cream">{item}</h3>
                <p className="luxury-copy text-sm">Every choice is edited around the person, place, and emotion you want to create.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="luxury-section bg-white/55 dark:bg-[#120D0A]">
        <div className="luxury-shell">
          <div className="mb-12 max-w-2xl">
            <span className="luxury-eyebrow">What we offer</span>
            <h2 className="luxury-heading text-4xl md:text-5xl">Browse Our <span className="font-medium italic text-gold">Services</span></h2>
            <p className="luxury-copy mt-4">From intimate proposals to grand celebrations, choose an experience and let our team shape every detail.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {services.map((service, index) => (
              <Link
                key={service.to}
                to={service.to}
                className={`group relative min-h-60 overflow-hidden bg-gradient-to-br ${service.accent} ${index === 0 ? 'md:col-span-2' : ''} ${service.size}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-white/5" />
                <div className="absolute inset-0 border border-white/10 transition group-hover:border-gold/70" />
                <div className="absolute left-0 top-0 h-full w-1 bg-gold/70 opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10 flex h-full min-h-60 flex-col justify-end p-6 md:p-7">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-gold">{service.number}</p>
                  <h3 className="mb-3 font-heading text-3xl font-bold leading-tight text-white md:text-4xl">{service.title}</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-cream/70">{service.detail}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/categories" className="luxury-button">View All Services <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-24 text-cream dark:bg-ink md:py-32">
        <div className="luxury-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="luxury-eyebrow">Why choose us</span>
            <h2 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl">The Ava Standard</h2>
            <p className="mb-10 text-lg leading-relaxed text-cream/70">
              We do not just decorate spaces. We choreograph emotion, timing, lighting, florals, food, and arrival into one polished reveal.
            </p>
            <div className="space-y-5">
              {standards.map((item) => (
                <div key={item} className="flex items-start gap-4 border-b border-white/10 pb-5">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-gold" size={20} />
                  <p className="text-cream/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[520px] border border-gold/25 p-3">
            <img src="/about-hero.jpg" alt="Ava Luxury team preparing a premium surprise setup" className="h-full min-h-[496px] w-full object-cover grayscale transition duration-700 hover:grayscale-0" />
            <div className="absolute bottom-8 left-8 right-8 border border-white/15 bg-black/45 p-6 backdrop-blur-sm">
              <p className="font-heading text-2xl text-white">Discreet planning, flawless arrival, lasting memory.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-shell">
          <div className="mb-12 text-center">
            <span className="luxury-eyebrow">Testimonials</span>
            <h2 className="luxury-heading text-4xl md:text-5xl">Words of Joy</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((story) => (
              <article key={story.name} className="luxury-surface p-7">
                <Sparkles className="mb-6 text-gold" size={24} />
                <p className="mb-8 text-lg italic leading-relaxed text-primary/80 dark:text-cream/80">"{story.quote}"</p>
                <div>
                  <p className="font-bold uppercase tracking-[0.16em] text-primary dark:text-white">{story.name}</p>
                  <p className="mt-1 text-sm text-gold">{story.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold/20 bg-primary px-6 py-24 text-center text-cream dark:bg-[#0D0A08] md:py-32">
        <div className="mx-auto max-w-3xl">
          <span className="luxury-eyebrow">Begin</span>
          <h2 className="mb-6 font-heading text-4xl font-bold text-white md:text-6xl">Ready to create the unforgettable?</h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-cream/70">
            Tell us the occasion, the person, and the feeling you want. We will shape the rest with care.
          </p>
          <Link to="/contact" className="luxury-button">Schedule a Consultation <ArrowRight size={17} /></Link>
        </div>
      </section>
    </div>
  );
};

export default Home;


