import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

const categoryData = {
  proposal: {
    title: 'The Grand Proposal',
    tagline: 'She will only say yes once. Make it eternal.',
    description: 'We design environments so breathtaking and so precisely attuned to your love story that the only possible answer is yes. From candlelit rooftops to live musicians, every element is shaped to reflect your bond.',
    highlights: ['Fully custom venue styling and decoration', 'Professional photography and videography', 'Live musicians or curated soundscapes', 'Champagne and bespoke culinary arrangements', 'Floral artistry and luxury ambient lighting'],
    color: 'from-rose-950 via-stone-900 to-primary',
  },
  birthday: {
    title: 'Birthday Celebration',
    tagline: 'Not just another birthday. A memory for a lifetime.',
    description: 'From intimate gatherings to grand celebrations, we orchestrate birthday experiences that leave guests in awe. Our team handles concept, decor, entertainment, catering, and the reveal moment.',
    highlights: ['Bespoke thematic concepts and styling', 'Entertainment curation', 'Custom cake design and gourmet catering', 'Surprise reveal choreography', 'Guest experience coordination'],
    color: 'from-amber-950 via-stone-900 to-primary',
  },
  anniversary: {
    title: 'Milestone Anniversaries',
    tagline: 'Honoring your enduring journey together.',
    description: 'We transform spaces into intimate, awe-inspiring sanctuaries that mirror the depth of your love, from vow renewals in garden settings to private dinners under the stars.',
    highlights: ['Intimate venue transformation', 'Personalized memory displays', 'Private chef and sommelier service', 'Vow renewal ceremonies', 'Couple wellness packages'],
    color: 'from-stone-800 via-stone-900 to-primary',
  },
  romantic: {
    title: 'Romantic Dinner',
    tagline: 'An evening crafted entirely for the two of you.',
    description: 'Our private dining experiences create an atmosphere of pure romance. Every detail, from the menu to the melodies, is designed to make your partner feel adored.',
    highlights: ['Private venue sourcing', 'Multi-course dining experience', 'Floral, candle and soft lighting design', 'Live acoustic music or curated soundtrack', 'Dessert and gift presentation choreography'],
    color: 'from-red-950 via-stone-900 to-primary',
  },
  babyshower: {
    title: 'Baby Shower',
    tagline: "Welcoming the world's newest, most precious guest.",
    description: 'We create warm, beautiful celebrations for the journey of welcoming a new life, from elegant pastel arrangements to bespoke dessert tables.',
    highlights: ['Thematic styling and balloon installations', 'Dessert table and custom cake design', 'Personalized party favors', 'Games, activities and entertainment', 'Photography and memory book creation'],
    color: 'from-sky-950 via-stone-900 to-primary',
  },
  corporate: {
    title: 'Corporate Events',
    tagline: 'Impress. Inspire. Elevate your brand.',
    description: 'We bring meticulous attention and luxury production standards to executive dinners, product launches, team retreats, and awards galas.',
    highlights: ['Brand-aligned thematic design', 'Keynote and awards setup', 'Gourmet catering and bespoke bar service', 'Audio-visual and stage production', 'Full event coordination and onsite management'],
    color: 'from-zinc-800 via-stone-900 to-primary',
  },
  diaspora: {
    title: 'Holiday & Diaspora Surprise',
    tagline: 'Bridge the miles. Bring them home in style.',
    description: 'We orchestrate homecoming celebrations and holiday surprises for returning loved ones, coordinating with family and shaping emotional reveal moments.',
    highlights: ['Secret coordination with family and friends', 'Airport or home welcome arrangements', 'Custom banners, balloons and decor', 'Welcome feast and hospitality curation', 'Reunion photography and videography'],
    color: 'from-emerald-950 via-stone-900 to-primary',
  },
  custom: {
    title: 'Custom Surprise',
    tagline: 'Your vision. Our mastery. Absolutely limitless.',
    description: 'Have a concept that defies categorization? Tell us your vision and we will architect it into a one-of-one expression of personalized luxury.',
    highlights: ['One-on-one concept consultation', 'Fully custom design development', 'Vendor and venue sourcing', 'End-to-end event management', 'Post-event memory curation'],
    color: 'from-violet-950 via-stone-900 to-primary',
  },
};

const CategoryDetail = () => {
  const { id } = useParams();
  const cat = categoryData[id];

  if (!cat) {
    return (
      <div className="luxury-page flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h2 className="luxury-heading mb-4 text-4xl">Category Not Found</h2>
        <Link to="/categories" className="inline-flex items-center gap-2 font-bold text-gold hover:text-amber"><ArrowLeft size={16} /> Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="luxury-page">
      <section className={`relative flex min-h-[520px] items-end overflow-hidden bg-gradient-to-br ${cat.color}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-white/5" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold to-transparent" />
        <div className="luxury-shell relative z-10 px-6 pb-16">
          <Link to="/categories" className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-gold/75 transition hover:text-gold">
            <ArrowLeft size={16} /> Back to All Services
          </Link>
          <h1 className="mb-4 font-heading text-5xl font-bold leading-tight text-white md:text-7xl">{cat.title}</h1>
          <p className="text-xl font-medium italic text-champagne">{cat.tagline}</p>
        </div>
      </section>

      <section className="luxury-section">
        <div className="luxury-shell">
          <div className="mb-20 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="luxury-eyebrow">About this experience</span>
              <p className="luxury-copy text-lg">{cat.description}</p>
            </div>
            <aside className="luxury-surface p-7">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-primary dark:text-cream">What's Included</h3>
              <ul className="space-y-4">
                {cat.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed text-primary/75 dark:text-cream/75">
                    <CheckCircle2 className="mt-0.5 flex-shrink-0 text-gold" size={17} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="mb-20">
            <div className="mb-10 text-center">
              <span className="luxury-eyebrow">Showcase</span>
              <h2 className="luxury-heading text-4xl">Event Moodboard</h2>
              <p className="luxury-copy mx-auto mt-3 max-w-xl text-sm">A refined visual direction for this service while the live gallery is being curated.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className={`relative overflow-hidden ${index === 0 ? 'row-span-2 min-h-[400px]' : 'min-h-[190px]'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-white/5" />
                  <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div>
                      <Sparkles className="mx-auto mb-3 text-gold/70" size={26} />
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-cream/70">Direction {index + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gold/20 bg-primary p-8 text-center text-cream dark:bg-ink md:p-14">
            <span className="luxury-eyebrow">Next step</span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-5xl">Create your {cat.title.toLowerCase()}</h2>
            <p className="mx-auto mb-8 max-w-xl text-cream/70">Let our team handle every detail while you arrive, enjoy, and keep the moment.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to={`/booking?eventType=${id}`} className="luxury-button">Book This Experience</Link>
              <Link to="/contact" className="border-white/30 text-white hover:border-gold luxury-button-outline"><MessageCircle size={16} /> Ask a Question</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;
