import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';

import Booking from './pages/Booking';

// Placeholder Pages
const Categories = () => <div className="p-8 text-center"><h1 className="text-4xl text-gold font-heading">Categories</h1></div>;
const Blog = () => <div className="p-8 text-center"><h1 className="text-4xl text-gold font-heading">Blog</h1></div>;
const Contact = () => <div className="p-8 text-center"><h1 className="text-4xl text-gold font-heading">Contact</h1></div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-cream text-primary font-sans relative">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
