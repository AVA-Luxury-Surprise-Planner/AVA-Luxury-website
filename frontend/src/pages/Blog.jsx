import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'Top 5 Romantic Venues in Addis Ababa',
    date: 'July 15, 2026',
    excerpt: 'A refined shortlist of settings for private dinners, anniversary surprises, and proposal reveals.',
    category: 'Inspiration',
    accent: 'from-red-950 via-stone-900 to-primary',
  },
  {
    id: 2,
    title: 'A Magical Anniversary Setup at Dat Tower',
    date: 'June 28, 2026',
    excerpt: 'Behind the scenes of a skyline celebration with a private chef, candlelight, and thoughtful pacing.',
    category: 'Stories',
    accent: 'from-stone-800 via-stone-900 to-primary',
  },
  {
    id: 3,
    title: 'How to Plan the Perfect Surprise Proposal',
    date: 'June 10, 2026',
    excerpt: 'A simple planning guide for choosing the place, mood, guest list, and reveal moment.',
    category: 'Guides',
    accent: 'from-rose-950 via-stone-900 to-primary',
  },
];

const Blog = () => {
  return (
    <div className="luxury-page">
      <section className="luxury-section pt-12">
        <div className="luxury-shell">
          <div className="mb-14 max-w-2xl">
            <span className="luxury-eyebrow">Inspiration journal</span>
            <h1 className="luxury-heading text-5xl md:text-6xl">Ideas for unforgettable moments.</h1>
            <p className="luxury-copy mt-5 text-lg">Stories, guides, and venue notes for refined celebrations in Addis Ababa.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="luxury-surface group overflow-hidden">
                <div className={`relative h-52 bg-gradient-to-br ${post.accent}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-white/5" />
                  <div className="absolute left-5 top-5 bg-gold px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    {post.category}
                  </div>
                </div>
                <div className="p-7">
                  <p className="mb-3 text-sm text-primary/55 dark:text-cream/55">{post.date}</p>
                  <h2 className="mb-4 font-heading text-2xl font-bold text-primary transition group-hover:text-gold dark:text-cream">{post.title}</h2>
                  <p className="luxury-copy mb-7 text-sm">{post.excerpt}</p>
                  <button type="button" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-gold transition hover:text-amber">
                    Read Story <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
