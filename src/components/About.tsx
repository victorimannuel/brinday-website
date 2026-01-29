import { motion } from 'framer-motion';
import { Award, Users, MapPin, Zap, CheckCircle } from 'lucide-react';

const stats = [
  { icon: <Award className="w-6 h-6" />, value: "30+", label: "Years Experience" },
  { icon: <Users className="w-6 h-6" />, value: "100%", label: "Client Satisfaction" },
  { icon: <MapPin className="w-6 h-6" />, value: "AZ", label: "Statewide Coverage" },
  { icon: <Zap className="w-6 h-6" />, value: "24/7", label: "Support Available" },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-brand-pink/50 hover:shadow-lg hover:shadow-brand-pink/10 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3 text-brand-primary">
                    {stat.icon}
                  </div>
                  <div className="heading-font text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-64 bg-gradient-to-br from-brand-pink/20 via-brand-primary/15 to-brand-secondary/10 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Award className="w-16 h-16 text-brand-primary mx-auto mb-4" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Who Is BrinDay?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary via-brand-pink to-brand-secondary rounded-full mb-6" />
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                BrinDay Technologies is a <span className="font-semibold text-gray-900">full-service Low Voltage Integrator</span> with over <span className="font-semibold text-brand-pink">30 years of industry experience</span>. We serve the entire State of Arizona and support coast-to-coast projects through strong national partnerships.
              </p>
              <p>
                From tenant improvements to large commercial projects, we deliver high-quality service at competitive costs while exceeding expectations.
              </p>
              <p>
                We specialize in full system design, installation, and consultation. Contact us today to receive the best possible solution for your needs.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <h3 className="heading-font text-2xl font-bold text-gray-900 mb-4">
                Why Partner With BrinDay Tech?
              </h3>
              <ul className="space-y-3">
                {[
                  "Over 30 years of proven expertise",
                  "Comprehensive statewide Arizona coverage",
                  "Coast-to-coast project support",
                  "Full system design and consultation",
                  "Competitive pricing without compromising quality",
                  "Licensed and certified professionals"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;