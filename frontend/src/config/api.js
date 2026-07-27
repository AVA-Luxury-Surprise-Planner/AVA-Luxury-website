const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_URL = API_BASE_URL;

export const apiEndpoints = {
  auth: {
    login: `${API_BASE_URL}/api/auth/login`,
    register: `${API_BASE_URL}/api/auth/register`,
    profile: `${API_BASE_URL}/api/auth/profile`,
  },
  categories: {
    getAll: `${API_BASE_URL}/api/categories`,
    getById: (id) => `${API_BASE_URL}/api/categories/${id}`,
    getBySlug: (slug) => `${API_BASE_URL}/api/categories/slug/${slug}`,
    create: `${API_BASE_URL}/api/categories`,
    update: (id) => `${API_BASE_URL}/api/categories/${id}`,
    delete: (id) => `${API_BASE_URL}/api/categories/${id}`,
  },
  bookings: {
    getAll: `${API_BASE_URL}/api/bookings`,
    getById: (id) => `${API_BASE_URL}/api/bookings/${id}`,
    create: `${API_BASE_URL}/api/bookings`,
    update: (id) => `${API_BASE_URL}/api/bookings/${id}`,
    delete: (id) => `${API_BASE_URL}/api/bookings/${id}`,
  },
  blogs: {
    getAll: `${API_BASE_URL}/api/blogs`,
    getById: (id) => `${API_BASE_URL}/api/blogs/${id}`,
    getBySlug: (slug) => `${API_BASE_URL}/api/blogs/slug/${slug}`,
    create: `${API_BASE_URL}/api/blogs`,
    update: (id) => `${API_BASE_URL}/api/blogs/${id}`,
    delete: (id) => `${API_BASE_URL}/api/blogs/${id}`,
  },
  contact: {
    getAll: `${API_BASE_URL}/api/contact`,
    create: `${API_BASE_URL}/api/contact`,
    delete: (id) => `${API_BASE_URL}/api/contact/${id}`,
  },
};
