import { motion } from 'framer-motion';
import { Award, Users, Clock, MapPin, Zap, Shield, Target, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

const stats = [
  { icon: <Award className="w-8 h-8" />, value: "30+", label: "Years Experience", color: "text-brand-secondary" },
  { icon: <Users className="w-8 h-8" />, value: "100%", label: "Client Satisfaction", color: "text-green-500" },
  { icon: <MapPin className="w-8 h-8" />, value: "AZ", label: "Statewide Coverage", color: "text-brand-primary" },
  { icon: <Zap className="w-8 h-8" />, value: "24/7", label: "Support Available", color: "text-yellow-500" },
];

const values = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Reliability",
    description: "We deliver consistent, high-quality solutions that our clients can depend on for their critical infrastructure needs."
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Timeliness",
    description: "Projects are completed on schedule without compromising quality, ensuring your business operations continue smoothly."
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: "Precision",
    description: "Every installation and system design meets the highest standards of accuracy and attention to detail."
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our work, from initial consultation to final implementation."
  }
];

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about BrinDay Technologies - Arizona's trusted low voltage systems provider with over 30 years of experience in security systems, cabling infrastructure, and network solutions."
        keywords="about brinday, low voltage company, security systems company, cabling contractor, Arizona technology company, 30 years experience"
        canonicalUrl="/about"
        ogImage="/about-og-image.jpg"
        ogType="business"
      />
      <div className="flex-grow bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <Navbar />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="heading-font text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About BrinDay Technologies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your Trusted Partner in Limited Energy Services with Over 30 Years of Excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-brand-blue/50 hover:shadow-lg transition-all text-center"
              >
                <div className={`mb-4 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-pink/10 to-brand-blue/10 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="heading-font text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-pink to-brand-blue rounded-full" />
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  BrinDay Technologies is a <span className="font-semibold text-gray-900">full-service Low Voltage Integrator</span> with over <span className="font-semibold text-brand-secondary">30 years of industry experience</span>. We serve the entire State of Arizona and support coast-to-coast projects through strong national partnerships.
                </p>
                <p>
                  From tenant improvements to large commercial projects, we deliver high-quality service at competitive costs while exceeding expectations. We specialize in full system design, installation, and consultation.
                </p>
                <p>
                  Contact us today to receive the best possible solution for your needs.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-6 bg-gradient-to-br from-brand-pink/10 to-brand-blue/10 rounded-2xl"
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/20 to-transparent rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-24 h-24 text-brand-secondary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Licensed & Certified</h3>
                    <p className="text-gray-600">AZ ROC 349576</p>
                    <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                      <div className="bg-white/80 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-brand-secondary">30+</div>
                        <div className="text-sm text-gray-600">Years</div>
                      </div>
                      <div className="bg-white/80 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-500">100%</div>
                        <div className="text-sm text-gray-600">Satisfaction</div>
                      </div>
                      <div className="bg-white/80 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-brand-primary">24/7</div>
                        <div className="text-sm text-gray-600">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group text-center bg-white p-8 rounded-2xl border border-gray-200 hover:border-brand-blue/50 hover:shadow-xl transition-all"
              >
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-pink/10 to-brand-blue/10 text-brand-blue group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="heading-font text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default AboutPage;