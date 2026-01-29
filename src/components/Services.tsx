import { motion } from 'framer-motion';
import { Cable, ShieldCheck, Siren, Wifi } from 'lucide-react';
import { Service } from '@/types';

const services: Service[] = [
  {
    icon: <Cable className="w-12 h-12" />,
    title: "Cabling Infrastructure",
    description: "Backbone and horizontal cabling as the foundation of a solid low voltage system."
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: "Physical Security",
    description: "Access control, intrusion detection, and video surveillance systems protecting people and facilities."
  },
  {
    icon: <Siren className="w-12 h-12" />,
    title: "Fire Alarm Systems",
    description: "Life safety systems designed to protect lives and critical assets."
  },
  {
    icon: <Wifi className="w-12 h-12" />,
    title: "Network Support & Services",
    description: "Managed network services that keep business systems operating efficiently and securely."
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for your low voltage infrastructure needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-gradient-to-br from-white to-brand-pink/5 p-8 rounded-2xl border border-gray-200 hover:border-brand-pink/30 hover:shadow-xl hover:shadow-brand-pink/10 transition-all cursor-pointer"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-pink/15 to-brand-primary/10 text-brand-secondary group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg shadow-brand-pink/10">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="heading-font text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-pink/10 to-brand-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;