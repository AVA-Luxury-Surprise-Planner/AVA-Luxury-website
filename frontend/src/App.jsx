import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Booking from './pages/Booking';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin & auth — full-screen, no Navbar/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Public site — wrapped with Navbar + Footer */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen flex-col bg-silk font-sans text-primary transition-colors duration-300 dark:bg-ink dark:text-cream">
              <Navbar />
              <main className="w-full flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/categories/:id" element={<CategoryDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/booking" element={<Booking />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
