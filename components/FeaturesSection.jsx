import { motion } from 'framer-motion';

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast Setup",
    description: "Deploy AI voice assistants in minutes with simple integration into your existing systems. No complex coding required."
  },
  {
    icon: "💰",
    title: "Cost Effective",
    description: "Reduce operational costs by automating routine calls, letting your team focus on high-value interactions."
  },
  {
    icon: "📈",
    title: "Scale Seamlessly",
    description: "Easily expand your voice operations to handle increasing call volumes without additional infrastructure."
  },
  {
    icon: "🔄",
    title: "Always Available",
    description: "Provide round-the-clock voice support with AI agents that never sleep, ensuring you never miss an opportunity."
  }
];

// Optimized animation variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const featureVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200
    }
  }
};

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 200
          }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why You'll Love Our AI Voice Assistants
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business communication with intelligent voice automation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              className="group relative bg-white p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
              style={{
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-2xl mb-4 
                              group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}