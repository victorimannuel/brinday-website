import { motion } from 'framer-motion';
import { Cable, ShieldCheck, Siren, Wifi, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const services = [
  {
    icon: <Cable className="w-16 h-16" />,
    title: "Cabling Infrastructure",
    description: "Backbone and horizontal cabling as the foundation of a solid low voltage system.",
    features: [
      "Structured cabling design & installation",
      "Fiber optic solutions",
      "Copper infrastructure",
      "Cable management systems",
      "Testing & certification"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <ShieldCheck className="w-16 h-16" />,
    title: "Physical Security",
    description: "Access control, intrusion detection, and video surveillance systems protecting people and facilities.",
    features: [
      "Access control systems",
      "Video surveillance (CCTV)",
      "Intrusion detection",
      "Intercom systems",
      "Security integration"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    icon: <Siren className="w-16 h-16" />,
    title: "Fire Alarm Systems",
    description: "Life safety systems designed to protect lives and critical assets.",
    features: [
      "Fire alarm design & installation",
      "Emergency communication systems",
      "Smoke & heat detection",
      "Sprinkler system integration",
      "Code compliance consulting"
    ],
    color: "from-red-500 to-red-600"
  },
  {
    icon: <Wifi className="w-16 h-16" />,
    title: "Network Support & Services",
    description: "Managed network services that keep business systems operating efficiently and securely.",
    features: [
      "Network infrastructure",
      "Wireless solutions",
      "Network security",
      "Performance optimization",
      "24/7 monitoring & support"
    ],
    color: "from-purple-500 to-purple-600"
  }
];

const ServicesPage = () => {
  return (
    <>
      <SEO
        title="Services"
        description="Comprehensive low voltage systems and technology solutions including cabling infrastructure, physical security, fire alarm systems, and network support. Professional installation and maintenance services."
        keywords="low voltage services, cabling infrastructure, security systems, fire alarm systems, network support, structured cabling, access control, CCTV installation, BrinDay Technologies"
        canonicalUrl="/services"
        ogImage="/services-og-image.jpg"
        ogType="business"
      />
      <div className="flex-grow bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <Navbar />
      
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-pink/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Comprehensive solutions for your low voltage infrastructure needs
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white p-8 rounded-3xl border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Animated background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className={`mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10`}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-2xl font-bold text-gray-900 mb-4 relative z-10"
                >
                  {service.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-gray-600 mb-6 leading-relaxed relative z-10"
                >
                  {service.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="space-y-3 relative z-10"
                >
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="font-semibold text-gray-900 mb-3"
                  >
                    Key Features:
                  </motion.h3>
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 + index * 0.1 }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ServicesPage;