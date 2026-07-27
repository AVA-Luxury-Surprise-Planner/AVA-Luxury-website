import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiEndpoints } from '../config/api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post(apiEndpoints.auth.login, {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/admin/dashboard');
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary dark:bg-ink px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-2">Ava <span className="font-light italic text-gold">Luxury</span></h1>
          <p className="text-cream/70">Admin Portal</p>
        </div>

        <div className="luxury-surface p-8">
          <h2 className="luxury-heading mb-6 text-2xl">Sign In</h2>
          
          {error && (
            <div className="mb-4 rounded border border-red-500/30 bg-red-500/10 p-3 text-red-700 dark:text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="email">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="luxury-input"
                placeholder="admin@avaluxury.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-primary/70 dark:text-cream/70" htmlFor="password">
                Password
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="luxury-input"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="luxury-button w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
