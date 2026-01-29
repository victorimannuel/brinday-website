import { motion } from 'framer-motion';
import { Partner } from '@/types';

const partners: Partner[] = [
  { name: "Verkada" },
  { name: "Ubiquiti" },
  { name: "Axis" },
  { name: "RTI" },
  { name: "CareHawk" },
  { name: "Chatsworth" },
  { name: "PDK" },
  { name: "Turing" },
  { name: "Bosch Video" },
  { name: "Kidde Commercial Fire" },
];

const Partners = () => {
  return (
    <section id="partners" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Manufacturing Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with industry-leading manufacturers to deliver the best solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all"
            >
              <div className="text-center">
                <p className="font-semibold text-gray-800 text-sm md:text-base">
                  {partner.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Customer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Customers
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From small businesses to large enterprises, we've earned the trust of clients across Arizona 
            and beyond. Our commitment to quality, reliability, and exceptional service has made us 
            a preferred partner for organizations that demand excellence in their low voltage infrastructure.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/10 to-transparent rounded-2xl"
          >
            <p className="text-xl font-semibold text-gray-900 mb-2">
              Trusted by businesses statewide
            </p>
            <p className="text-gray-600">
              Join hundreds of satisfied clients who rely on BrinDay Technologies for their critical infrastructure needs
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;