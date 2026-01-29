import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="heading-font text-2xl font-bold mb-4 bg-gradient-to-r from-brand-primary via-brand-pink to-brand-secondary bg-clip-text text-transparent">
              BrinDay Technologies
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Full Service Integrator - Your Trusted Partner in Limited Energy Services
            </p>
            <p className="text-sm text-gray-500">
              AZ ROC 349576
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="heading-font text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Services', href: '#services' },
                { label: 'About Us', href: '#about' },
                { label: 'Partners', href: '#partners' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-pink transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="heading-font text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:4802690621"
                className="flex items-center gap-3 text-gray-400 hover:text-brand-secondary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-brand-secondary/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>(480) 269-0621</span>
              </a>
              <a
                href="mailto:info@brindaytech.com"
                className="flex items-center gap-3 text-gray-400 hover:text-brand-secondary transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-brand-secondary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@brindaytech.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {currentYear} BrinDay Technologies, LLC. All rights reserved.
            </p>
            <p>
              Licensed in Arizona | AZ ROC 349576
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;