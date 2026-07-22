import { CheckCircle2 } from 'lucide-react';

const values = [
  ['Exclusivity', 'We accept a limited number of events so every client receives dedicated creative direction and production care.'],
  ['Discretion', 'We excel at keeping secrets. Your surprise stays quiet until the exact moment it should unfold.'],
  ['Perfection', 'We refine the smallest details, from floral tones to music timing, until the experience feels effortless.'],
];

const About = () => {
  return (
    <div className="luxury-page">
      <section className="luxury-section pt-12">
        <div className="luxury-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="luxury-eyebrow">Our story</span>
            <h1 className="luxury-heading mb-6 text-5xl md:text-6xl">Celebrations shaped with care, taste, and timing.</h1>
            <p className="luxury-copy text-lg">
              Ava Luxury was founded in Addis Ababa to make meaningful surprises feel polished, personal, and stress-free. We design the concept, source the right partners, and manage every reveal so you can be fully present for the memory.
            </p>
          </div>

          <div className="relative border border-gold/25 p-3">
            <img src="/about-hero.jpg" alt="Ava Luxury Surprise Planner team" className="h-[520px] w-full object-cover" />
            <div className="absolute bottom-7 left-7 right-7 border border-white/15 bg-black/45 p-5 backdrop-blur-sm">
              <p className="font-heading text-2xl text-white">From concept to reveal, every detail is intentional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-section bg-white/55 dark:bg-[#120D0A]">
        <div className="luxury-shell">
          <div className="mb-12 max-w-2xl">
            <span className="luxury-eyebrow">The Ava Luxury Standard</span>
            <h2 className="luxury-heading text-4xl md:text-5xl">Luxury is not loud. It is exact.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {values.map(([title, copy]) => (
              <article key={title} className="luxury-surface p-7">
                <CheckCircle2 className="mb-5 text-gold" size={24} />
                <h3 className="mb-3 font-heading text-2xl font-bold text-primary dark:text-cream">{title}</h3>
                <p className="luxury-copy text-sm">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
