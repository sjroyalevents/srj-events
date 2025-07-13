'use client';

import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // e.g., send the data to an API or an email service.
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-12" style={{ background: 'var(--neutral)' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8" style={{ color: 'var(--secondary)' }}>Get in Touch</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Contact Information</h3>
            <p className="mb-2"><strong>Phone:</strong> +91 70527 28186</p>
            <p className="mb-2"><strong>Email:</strong> sjroyalevents@gmail.com</p>
            <p className="mb-2"><strong>Address:</strong> Nawabganj, Durgakund, Jawahar Nagar Colony, Bhelupur, Varanasi, Uttar Pradesh 221010</p>
            <div className="mt-4">
              <a
                href="https://maps.app.goo.gl/5fQvEoxRA7JrEHcL9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold py-2 px-4 rounded"
                style={{ background: 'var(--primary)', color: 'white' }}
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--accent)' }}>Express Your Interest</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message / Area of Interest</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md"
                  style={{ background: 'var(--primary)', color: 'white' }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;