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
    description:
      'From intimate gatherings to grand celebrations, we orchestrate birthday experiences that leave guests in awe. Our team handles concept, decor, entertainment, catering, and the reveal moment.',
    highlights: [
      'Bespoke thematic concepts and styling',
      'Entertainment curation',
      'Custom cake design and gourmet catering',
      'Surprise reveal choreography',
      'Guest experience coordination',
    ],
    color: 'from-amber-950 via-stone-900 to-primary',

    backgroundImage: '/birthdaytemp.jpg',

    gallery: ['/birthday-1.png', '/birthday-2.png', '/birthday-3.png', '/birthday-4.png', '/birthday-5.png', '/birthday-6.png', '/birthday-7.png']
  },
  anniversary: {
    title: 'Milestone Anniversaries',
    tagline: 'Honoring your enduring journey together.',
    description: 'We transform spaces into intimate, awe-inspiring sanctuaries that mirror the depth of your love, from vow renewals in garden settings to private dinners under the stars.',
    highlights: ['Intimate venue transformation', 'Personalized memory displays', 'Private chef and sommelier service', 'Vow renewal ceremonies', 'Couple wellness packages'],
    backgroundImage: '/anniversarytemp.jpg',
    color: 'from-stone-800 via-stone-900 to-primary',
    gallery: ['/anniversary-1.png', '/anniversary-2.png', '/anniversary-3.png', '/anniversary-4.png', '/anniversary-5.png', '/anniversary-6.png', '/anniversary-7.png']
  },
  romantic: {
    title: 'Romantic Dinner',
    tagline: 'An evening crafted entirely for the two of you.',
    description: 'Our private dining experiences create an atmosphere of pure romance. Every detail, from the menu to the melodies, is designed to make your partner feel adored.',
    highlights: ['Private venue sourcing', 'Multi-course dining experience', 'Floral, candle and soft lighting design', 'Live acoustic music or curated soundtrack', 'Dessert and gift presentation choreography'],
    backgroundImage: '/romantictemp.jpg',
    color: 'from-red-950 via-stone-900 to-primary',
    gallery: ['/romantic-1.png', '/romantic-2.png', '/romantic-3.png', '/romantic-4.png', '/romantic-5.png', '/romantic-6.png', '/romantic-7.png']
  },
  babyshower: {
    title: 'Baby Shower',
    tagline: "Welcoming the world's newest, most precious guest.",
    description: 'We create warm, beautiful celebrations for the journey of welcoming a new life, from elegant pastel arrangements to bespoke dessert tables.',
    highlights: ['Thematic styling and balloon installations', 'Dessert table and custom cake design', 'Personalized party favors', 'Games, activities and entertainment', 'Photography and memory book creation'],
    backgroundImage: '/babytemp.jpg',
    color: 'from-sky-950 via-stone-900 to-primary',
    gallery: ['/baby-1.png', '/baby-2.png', '/baby-3.png', '/baby-4.png', '/baby-5.png', '/baby-6.png', '/baby-7.png']
  },
  graduation: {
    title: 'Graduation Celebration',
    tagline: 'Celebrate achievement with style and warmth.',
    description: 'From proud family gatherings to themed graduation receptions, we create moments that honor academic milestones with elevated decor, music, and meaningful surprises.',
    highlights: ['Themed reception styling', 'Custom dessert and drink stations', 'Photo-ready memory moments', 'Family dining coordination', 'Graduate announcement and surprise moments'],
    backgroundImage: '/graduationtemp.jpg',
    color: 'from-emerald-950 via-stone-900 to-primary',
    gallery: ['/graduation-1.png', '/graduation-2.png', '/graduation-3.png', '/graduation-4.png', '/graduation-5.png', '/graduation-6.png', '/graduation-7.png']
  },
  proposal: {
    title: 'Proposal',
    tagline: 'Creating unforgettable moments of love.',
    description: 'We design intimate and romantic proposal experiences that capture the essence of your unique love story, from private reveals to stunning floral scenes.',
    highlights: ['Private consultation and concept direction', 'Premium vendor sourcing and venue styling', 'Precise setup, timing, reveal, and guest coordination'],
    backgroundImage: '/proposaltemp.jpg',
    color: 'from-rose-950 via-stone-900 to-primary',
    gallery: ['/proposal-1.png', '/proposal-2.png', '/proposal-3.png', '/proposal-4.png', '/proposal-5.png', '/proposal-6.png', '/proposal-7.png']
  },
  bridal: {
    title: 'Bridal Shower',
    tagline: 'Chic, personal gatherings for the bride-to-be.',
    description: 'We curate bridal showers that feel intimate and stylish, with themed tablescapes, custom favors, playful activations, and beautiful keepsakes for every guest.',
    highlights: ['Personalized event concept', 'Gift and favor styling', 'Dessert table and floral arrangements', 'Games, entertainment, and guest interaction', 'Elegant photo moments'],
    color: 'from-violet-950 via-stone-900 to-primary',
    backgroundImage: '/bridaltemp.jpg',
    gallery: ['/bridal-1.png', '/bridal-2.png', '/bridal-3.png', '/bridal-4.png', '/bridal-5.png', '/bridal-6.png', '/bridal-7.png']
  },
  mothersday: {
    title: "Mother's Day Celebration",
    tagline: 'Honoring the heart of the family with elegance.',
    description: 'We craft Mother’s Day experiences that celebrate love and gratitude, from brunches to intimate gatherings, with thoughtful decor and personalized touches.',
    highlights: ['Elegant brunch or dinner setups', 'Floral arrangements and table styling', 'Personalized gifts and keepsakes', 'Live music or curated playlists', 'Family photo opportunities'],
    color: 'from-amber-950 via-stone-900 to-primary',
    backgroundImage: '/mothertemp.jpg',
    gallery: ['/mothersday-1.png', '/mothersday-2.png', '/mothersday-3.png', '/mothersday-4.png', '/mothersday-5.png', '/mothersday-6.png', '/mothersday-7.png']
  },
};

const CategoryDetail = () => {
  const { id } = useParams();
  const cat = categoryData[id];

  if (!cat) {
    return (
      <div className="luxury-page flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h2 className="luxury-heading mb-4 text-4xl">Category Not Found</h2>
        <Link to="/" className="inline-flex items-center gap-2 font-bold text-gold hover:text-amber"><ArrowLeft size={16} /> Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="luxury-page">
      <section
        className={`relative flex min-h-[520px] items-end overflow-hidden bg-gradient-to-br ${cat.color}`}
        style={cat.backgroundImage ? { backgroundImage: `url('${cat.backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-white/5" />
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold to-transparent" />
        <div className="luxury-shell relative z-10 px-6 pb-16">
          <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-gold/75 transition hover:text-gold">
            <ArrowLeft size={16} /> Back to Home
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
              {!cat.gallery && (
                <p className="luxury-copy mx-auto mt-3 max-w-xl text-sm">A refined visual direction for this service while the live gallery is being curated.</p>
              )}
            </div>
            <div className={cat.gallery ? "columns-1 gap-4 sm:columns-2 md:columns-3 space-y-4" : "grid grid-cols-2 gap-4 md:grid-cols-3"}>
              {cat.gallery ? (
                cat.gallery.map((src, index) => (
                  <div
                    key={src}
                    className="group relative overflow-hidden break-inside-avoid"
                  >
                    <img
                      src={src}
                      alt={`${cat.title} event ${index + 1}`}
                      className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </div>
                ))
              ) : (
                Array.from({ length: 6 }).map((_, index) => (
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
                ))
              )}
            </div>
          </div>

          <div className="border border-gold/20 bg-primary p-8 text-center text-cream dark:bg-ink md:p-14">
            <span className="luxury-eyebrow">Next step</span>
            <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-5xl">Create your {cat && cat.title ? cat.title.toLowerCase() : 'experience'}</h2>
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
