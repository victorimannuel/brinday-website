import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { REQUEST_TYPES } from '@/types';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with BrinDay Technologies for professional low voltage systems, security solutions, cabling infrastructure, and network support. Serving Arizona businesses with 30+ years of experience."
        keywords="contact brinday, low voltage contractor Arizona, security systems contact, cabling services quote, network support contact, BrinDay Technologies contact"
        canonicalUrl="/contact"
        ogImage="/contact-og-image.jpg"
        ogType="business"
      />
      <div className="flex-grow bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <Navbar />
      
      {/* Contact Content */}
      <main className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="heading-font text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to discuss your project? We're here to help bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="heading-font text-2xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-brand-pink/50 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-pink/20 to-brand-rose/20 flex items-center justify-center text-brand-pink">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:4802690621" className="text-gray-600 hover:text-brand-pink transition-colors">
                        (480) 269-0621
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-brand-pink/50 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-pink/20 to-brand-rose/20 flex items-center justify-center text-brand-pink">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info@brindaytech.com" className="text-gray-600 hover:text-brand-pink transition-colors">
                        info@brindaytech.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-200 hover:border-brand-pink/50 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-pink/20 to-brand-rose/20 flex items-center justify-center text-brand-pink">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                      <p className="text-gray-600">Arizona Statewide</p>
                      <p className="text-sm text-gray-500 mt-1">Coast-to-coast coverage available</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 bg-gradient-to-br from-brand-pink/10 to-brand-rose/10 rounded-2xl"
              >
                <h3 className="heading-font text-lg font-bold text-gray-900 mb-3">
                  Licensed & Certified
                </h3>
                <p className="text-gray-700">
                  <span className="font-semibold">BrinDay Technologies, LLC</span>
                  <br />
                  AZ ROC 349576
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
    </>
  );
};

// Separate Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requestType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        requestType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-12 text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-white" />
          </div>
          <h3 className="heading-font text-2xl font-bold text-gray-900 mb-2">
            Thank you!
          </h3>
          <p className="text-gray-600">
            We've received your message and will be in touch soon.
          </p>
        </motion.div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                First Name <span className="text-brand-primary">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                Last Name <span className="text-brand-primary">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email <span className="text-brand-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="requestType" className="block text-sm font-semibold text-gray-700 mb-2">
              Request Type
            </label>
            <select
              id="requestType"
              name="requestType"
              value={formData.requestType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all appearance-none bg-white"
            >
              <option value="">Select an option</option>
              {REQUEST_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message <span className="text-brand-primary">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full group relative inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-brand-primary/30"
          >
            <span className="relative z-10">Send Message</span>
            <Send className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </>
      )}
    </form>
  );
};

export default ContactPage;