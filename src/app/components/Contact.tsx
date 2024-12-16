'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({ success: false, error: false, loading: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ success: false, error: false, loading: true });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '3acfa000-2eb1-43a2-9c03-d34ab8f35c13', // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus({ success: true, error: false, loading: false });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ success: false, error: true, loading: false });
      }
    } catch (error) {
      setStatus({ success: false, error: true, loading: false });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-center mb-12 font-poppins text-white text-shadow"
        >
          Contact Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto bg-purple-900 bg-opacity-20 backdrop-blur rounded-lg p-8 shadow-2xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-purple-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-purple-900 bg-opacity-50 border border-purple-950 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300"
                required
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-purple-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-purple-900 bg-opacity-50 border border-purple-950 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300"
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-purple-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-purple-900 bg-opacity-50 border border-purple-950 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-purple-300"
                required
                placeholder="Your message here..."
              ></textarea>
            </div>

            {status.success && (
              <p className="text-green-500 text-center">Your message was sent successfully!</p>
            )}
            {status.error && (
              <p className="text-red-500 text-center">Something went wrong. Please try again later.</p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={status.loading}
              className="w-full bg-gradient-to-r from-purple-700 to-purple-900 text-white py-3 px-6 rounded-md transition duration-300 flex items-center justify-center text-lg font-semibold shadow-lg"
            >
              {status.loading ? 'Sending...' : 'Send Message'}
              <Send className="ml-2 w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
