import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      {/* Navbar + Hero share this relative wrapper so the navbar overlays the image */}
      <div className="relative">
        <Navbar />

        <section className="relative w-full h-[85vh] flex items-center justify-center text-cream bg-primary overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 w-full h-full bg-[url('/Hero.png')] bg-cover bg-center bg-no-repeat"></div>

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/60"></div>

          {/* Content — everything lives here, nothing duplicated elsewhere */}
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center gap-5">
            <span className="bg-gold text-cream font-semibold text-sm md:text-base px-5 py-2 rounded-full shadow-lg">
              Plan Your Perfect Surprise
            </span>

            <h1 className="text-4xl md:text-6xl font-heading font-bold text-cream drop-shadow-lg">
              Ava Luxury
            </h1>

            <p className="text-lg md:text-xl text-cream/90">
              The preferred surprise planner in town
            </p>

            <p className="text-base md:text-lg text-gold italic">
              Creating Unforgettable Moments of Joy
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                to="/booking"
                className="px-8 py-4 bg-gold text-primary font-bold text-lg rounded shadow-lg hover:bg-amber transition transform hover:-translate-y-1"
              >
                Book Your Event
              </Link>
              <Link
                to="/categories"
                className="px-8 py-4 bg-transparent border-2 border-gold text-gold font-bold text-lg rounded shadow-lg hover:bg-gold hover:text-primary transition transform hover:-translate-y-1"
              >
                View Categories
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Rest of the Home page content goes below, outside the hero wrapper */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-10">
          Our Services
        </h2>
        {/* Your service cards go here */}
      </section>
    </div>
  );
};

export default Home;