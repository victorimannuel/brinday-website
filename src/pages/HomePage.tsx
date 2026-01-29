import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Users, Award, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import FloatingBackground from '../components/FloatingBackground';
import Button from '../components/Button';
import { services } from '../data/services';
// import LoadingDemo from '../components/LoadingDemo';
import SEO from '../components/SEO';

const HomePage = () => {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleGetInTouch = async () => {
    setIsNavigating(true);
    // Simulate navigation delay
    await new Promise(resolve => setTimeout(resolve, 300));
    window.location.href = '/contact';
  };

  const handleServices = async () => {
    setIsNavigating(true);
    // Simulate navigation delay
    await new Promise(resolve => setTimeout(resolve, 300));
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    setIsNavigating(false);
  };

  return (
    <>
      <SEO
        title="Home"
        description="BrinDay Technologies - Arizona's leading low voltage infrastructure experts. Professional installation and maintenance of security systems, cabling infrastructure, fire alarm systems, and network support."
        keywords="low voltage systems, security systems, cabling infrastructure, fire alarm systems, network support, Arizona, BrinDay Technologies, structured cabling, access control, CCTV installation"
        canonicalUrl="/"
        ogImage="/hero-image.jpg"
        ogType="business"
      />
      <div className="flex-grow bg-white">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-light via-white to-brand-light">
        <FloatingBackground />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Arizona's Leading{' '}
              <span className="text-brand-primary">Low Voltage</span>{' '}
              Infrastructure Experts
            </h1>
            <div className="mb-6">
              <span className="inline-block bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                30+ Years of Technology Infrastructure Excellence
              </span>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Delivering cutting-edge cabling infrastructure, security systems, and network solutions 
              with unmatched expertise and reliability.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              loading={isNavigating}
              onClick={handleGetInTouch}
            >
              Get in Touch
              <ArrowRight size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              loading={isNavigating}
              onClick={handleServices}
            >
              Our Services
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Certified Technicians</span>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive technology solutions for businesses of all sizes
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-white to-brand-pink/5 p-8 rounded-2xl border border-gray-200 hover:border-brand-pink/30 hover:shadow-xl hover:shadow-brand-pink/10 transition-all cursor-pointer overflow-hidden"
                onClick={() => {
                  // Navigate to dedicated service page
                  window.location.href = `/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`;
                }}
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 to-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* Icon Container with enhanced hover effects */}
                <div className="relative mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-pink/15 to-brand-primary/10 text-brand-secondary group-hover:scale-110 group-hover:rotate-3 transition-all shadow-lg shadow-brand-pink/10 group-hover:shadow-xl group-hover:shadow-brand-primary/20">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link - appears on hover */}
                  <div className="flex items-center text-brand-primary font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-pink/10 to-brand-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                
                {/* Ripple effect on click */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About BrinDay Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Who is <span className="text-brand-primary">BrinDay</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted technology partner with over 30 years of industry excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Partner With BrinDay Tech
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                  <p>
                    BrinDay Technologies is a <span className="font-semibold text-gray-900">full-service Low Voltage Integrator</span> with over <span className="font-semibold text-brand-primary">30 years of Industry Experience</span>. We cover the entire State of Arizona and are also able to accommodate all requests Coast to Coast with our vast partnerships in other states.
                  </p>
                  <p>
                    At BrinDay, we are committed to providing top quality service at affordable cost. From Tenant Improvements to Large Commercial Projects, we are here to exceed all your expectations.
                  </p>
                  <p>
                    We specialize in full system designs, installation and consultations. Reach out to us now so we may provide you with best possible solutions.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">30+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">AZ</div>
                    <div className="text-sm text-gray-600">Statewide Coverage</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-yellow-500/5 to-yellow-600/5 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/10 to-transparent rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Customers</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="flex items-center justify-center">
                        <img src="/logo/customers/cobblestone-communities-logo.webp" alt="Cobblestone Communities" className="max-h-16 object-contain" />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src="/logo/customers/ivy-&-sage-logo.webp" alt="Ivy & Sage" className="max-h-16 object-contain" />
                      </div>
                    </div>
                    {/* <p className="text-gray-600 mb-6">Trusted by businesses across Arizona and beyond</p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/80 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-brand-primary">500+</div>
                        <div className="text-sm text-gray-600">Projects Completed</div>
                      </div>
                      <div className="bg-white/80 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-brand-secondary">50+</div>
                        <div className="text-sm text-gray-600">Active Clients</div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Manufacturing Partners Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-brand-primary">Manufacturing Partners</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with industry-leading manufacturers to deliver cutting-edge solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {/* Original logos */}
              <div className="flex gap-8 items-center flex-shrink-0">
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/verkada-logo.webp" alt="Verkada" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/ubiquiti-logo.webp" alt="Ubiquiti" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/axis-logo.webp" alt="Axis" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/bosch-logo.webp" alt="Bosch" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/carehawk-logo.webp" alt="CareHawk" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/chatsworth-logo.webp" alt="Chatsworth" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/pdk-logo.webp" alt="PDK" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/turing-logo.webp" alt="Turing" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/rti-logo.webp" alt="RTI" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/kidde-logo.webp" alt="Kidde" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Duplicate logos for seamless loop */}
              <div className="flex gap-8 items-center flex-shrink-0">
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/verkada-logo.webp" alt="Verkada" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/ubiquiti-logo.webp" alt="Ubiquiti" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/axis-logo.webp" alt="Axis" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/bosch-logo.webp" alt="Bosch" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/carehawk-logo.webp" alt="CareHawk" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/chatsworth-logo.webp" alt="Chatsworth" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/pdk-logo.webp" alt="PDK" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/turing-logo.webp" alt="Turing" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/rti-logo.webp" alt="RTI" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-40 h-24 bg-gradient-to-br from-white to-brand-primary/5 rounded-xl flex items-center justify-center p-4 hover:shadow-md hover:shadow-brand-primary/20 transition-all duration-300 group">
                  <img src="/logo/manufacturing-partners/kidde-logo.webp" alt="Kidde" className="max-h-16 max-w-32 object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        </motion.div>

        {/* Client Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                What Our <span className="text-brand-primary">Clients Say</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from businesses we've helped transform
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-brand-primary/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "BrinDay Technologies transformed our entire security infrastructure. Their expertise and attention to detail exceeded our expectations. The 24/7 support has been invaluable for our operations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">John Davis</div>
                  <div className="text-sm text-gray-600">Facilities Manager, TechCorp</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-brand-secondary/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Working with BrinDay was seamless from start to finish. They understood our complex requirements and delivered a solution that's both robust and user-friendly. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  SM
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Sarah Martinez</div>
                  <div className="text-sm text-gray-600">IT Director, Healthcare Plus</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-blue-500/5 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The team's knowledge of low voltage systems is exceptional. They completed our project ahead of schedule and within budget. Their ongoing support has been fantastic."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  RT
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Robert Thompson</div>
                  <div className="text-sm text-gray-600">Operations Manager, Retail Chain</div>
                </div>
              </div>
            </motion.div>
          </div>
          </div>
        </motion.div>
        {/* Case Studies/Projects Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Featured <span className="text-brand-primary">Projects</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real-world solutions that demonstrate our expertise and deliver measurable results
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="space-y-16">
            {/* Project 1: Corporate Office Security Upgrade */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-semibold">
                  Corporate Security
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Multi-Site Corporate Security Infrastructure
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Challenge</h5>
                    <p className="text-gray-700">
                      A Fortune 500 company needed to upgrade security across 15 locations with outdated analog systems, inconsistent coverage, and no centralized monitoring capability.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Solution</h5>
                    <p className="text-gray-700">
                      Implemented a comprehensive IP-based surveillance system with 4K cameras, AI-powered analytics, and centralized management platform across all locations.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Results</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 85% reduction in security incidents</li>
                      <li>• $2.3M annual savings in security costs</li>
                      <li>• 24/7 remote monitoring capability</li>
                      <li>• 99.9% system uptime</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm">Before: Outdated analog system</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8 h-64 flex items-center justify-center mt-4">
                  <div className="text-center text-brand-primary">
                    <div className="w-16 h-16 bg-brand-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold">After: Modern IP surveillance system</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Project 2: Healthcare Facility Network Infrastructure */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative lg:order-first"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm">Before: Network congestion & downtime</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-2xl p-8 h-64 flex items-center justify-center mt-4">
                  <div className="text-center text-green-600">
                    <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold">After: High-performance network</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                  Healthcare Technology
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  Hospital Network Infrastructure Upgrade
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Challenge</h5>
                    <p className="text-gray-700">
                      A 500-bed hospital experienced frequent network outages affecting critical medical systems, EMR access, and patient care delivery across multiple departments.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Solution</h5>
                    <p className="text-gray-700">
                      Designed and implemented a redundant fiber optic backbone with enterprise-grade switches, wireless access points, and network segmentation for medical devices.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Results</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 99.99% network uptime achieved</li>
                      <li>• 75% faster EMR system response</li>
                      <li>• Zero network-related care disruptions</li>
                      <li>• HIPAA-compliant security implementation</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Project 3: Educational Campus Access Control */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                  Education Security
                </div>
                <h4 className="text-2xl font-bold text-gray-900">
                  University Campus Access Control System
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Challenge</h5>
                    <p className="text-gray-700">
                      A major university needed to secure 20+ buildings with 15,000+ students while maintaining open campus feel and easy access for authorized personnel.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Solution</h5>
                    <p className="text-gray-700">
                      Deployed a cloud-based access control system with mobile credentials, biometric readers, and integration with existing student ID system.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Results</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• 60% reduction in unauthorized access</li>
                      <li>• 50% faster emergency lockdown capability</li>
                      <li>• 95% student satisfaction with new system</li>
                      <li>• $500K annual savings in key management</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p className="text-sm">Before: Traditional lock & key system</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 h-64 flex items-center justify-center mt-4">
                  <div className="text-center text-blue-600">
                    <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold">After: Smart mobile access</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Infrastructure?
            </h4>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can deliver similar results for your organization. Our team is ready to design a custom solution that meets your unique needs.
            </p>
            <Button
              variant="primary"
              size="lg"
              loading={isNavigating}
              onClick={handleGetInTouch}
              className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full hover:shadow-lg hover:scale-105"
            >
              Get Your Free Consultation
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Loading States Demo */}
      {/* <LoadingDemo /> */}
      </div>
    </>
  );
};

export default HomePage;