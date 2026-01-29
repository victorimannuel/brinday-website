import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import LoadingSpinner from './LoadingSpinner';
import LoadingOverlay from './LoadingOverlay';
import SkeletonLoader from './SkeletonLoader';

const LoadingDemo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isSkeletonLoading, setIsSkeletonLoading] = useState(true);

  const simulateFormSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
  };

  const simulatePageTransition = async () => {
    setIsPageLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsPageLoading(false);
  };

  const simulateContentLoad = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loading States Demo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive examples of loading states for better user experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Button Loading States */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Button Loading States</h3>
            <div className="space-y-4">
              <Button variant="primary" onClick={simulateFormSubmit} loading={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Submit Form'}
              </Button>
              
              <Button variant="secondary" onClick={simulatePageTransition} loading={isPageLoading}>
                {isPageLoading ? 'Loading...' : 'Navigate Page'}
              </Button>
              
              <Button variant="outline" onClick={simulateContentLoad} loading={isLoading}>
                {isLoading ? 'Loading...' : 'Load Content'}
              </Button>
            </div>
          </motion.div>

          {/* Form Loading Example */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg relative"
          >
            <LoadingOverlay isLoading={isSubmitting} message="Submitting form..." />
            <h3 className="text-xl font-bold text-gray-900 mb-6">Form Loading State</h3>
            <form onSubmit={(e) => { e.preventDefault(); simulateFormSubmit(); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  placeholder="Enter your email"
                />
              </div>
              <Button type="submit" variant="primary" loading={isSubmitting}>
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Content Skeleton Loading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Content Skeleton Loading</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-4">
                <Button
                  variant={isSkeletonLoading ? "secondary" : "primary"}
                  onClick={() => setIsSkeletonLoading(!isSkeletonLoading)}
                >
                  {isSkeletonLoading ? 'Show Content' : 'Show Skeleton'}
                </Button>
              </div>
              
              {isSkeletonLoading ? (
                <div className="space-y-3">
                  <SkeletonLoader height="h-4" width="w-3/4" />
                  <SkeletonLoader height="h-4" width="w-full" />
                  <SkeletonLoader height="h-4" width="w-5/6" />
                  <div className="pt-4">
                    <SkeletonLoader height="h-32" width="w-full" rounded />
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Sample Content Loaded</h4>
                  <p className="text-gray-600">
                    This is actual content that replaces the skeleton loading state. 
                    Users see this smooth transition from loading to content.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      Skeleton loaders provide visual feedback while content is being fetched, 
                      creating a better user experience than blank screens or simple spinners.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Spinner Variations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Loading Spinner Variations</h3>
            <div className="grid grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <LoadingSpinner size="sm" color="brand" />
                <p className="text-sm text-gray-600 mt-2">Small</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="md" color="brand" />
                <p className="text-sm text-gray-600 mt-2">Medium</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="lg" color="brand" />
                <p className="text-sm text-gray-600 mt-2">Large</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="md" color="white" />
                <div className="bg-gray-800 rounded p-2 inline-block mt-2">
                  <p className="text-xs text-white">White</p>
                </div>
              </div>
              <div className="text-center">
                <LoadingSpinner size="md" color="gray" />
                <p className="text-sm text-gray-600 mt-2">Gray</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2">
                  <LoadingSpinner size="sm" color="brand" />
                  <span className="text-sm text-gray-600">Loading...</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">With Text</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 p-8 rounded-2xl"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Loading State Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">When to Use</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Form submissions (0.5-3 seconds)</li>
                <li>• Page transitions (0.3-1 second)</li>
                <li>• API calls and data fetching</li>
                <li>• File uploads and downloads</li>
                <li>• Complex calculations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Best Practices</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Always disable interactive elements</li>
                <li>• Provide clear feedback messages</li>
                <li>• Use skeleton loaders for content</li>
                <li>• Keep loading times under 3 seconds</li>
                <li>• Handle errors gracefully</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoadingDemo;