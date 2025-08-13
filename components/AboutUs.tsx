'use client';

import { motion } from 'framer-motion';
import { Trophy, Target, Users, Zap } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Trophy, value: '50+', label: 'Tournaments Won' },
    { icon: Target, value: '100+', label: 'Events Hosted' },
    { icon: Users, value: '10K+', label: 'Players' },
    { icon: Zap, value: '24/7', label: 'Support' },
  ];

  return (
    <section id="about" className="section-padding bg-dark-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Nextor</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded in 2020, Nextor has emerged as a revolutionary force in the esports and gaming industry. 
              Our mission is to bridge the gap between traditional entertainment and cutting-edge gaming technology, 
              creating immersive experiences that captivate audiences worldwide.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              We specialize in organizing high-stakes tournaments, developing innovative streaming platforms, 
              and creating location-based entertainment experiences that bring gamers together both virtually 
              and physically. Our commitment to excellence has earned us recognition as one of the leading 
              esports companies in the industry.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              From grassroots competitions to international championships, Nextor has consistently delivered 
              unforgettable gaming moments. Our team of passionate professionals works tirelessly to push 
              the boundaries of what&apos;s possible in competitive gaming and entertainment.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-neon-blue/50 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-neon-blue mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-700 relative">
                {/* Placeholder for video/image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center bg-no-repeat opacity-80" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-neon-blue/80 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/20"
                  >
                    <div className="w-0 h-0 border-l-[12px] border-l-white ml-1" />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-neon-purple/20 rounded-full border border-neon-purple/30"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-neon-blue/20 rounded-full border border-neon-blue/30"
            />
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-dark-800/50 to-dark-700/50 border border-dark-600 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Our Mission
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              To revolutionize the gaming industry by creating innovative, inclusive, and immersive experiences 
              that bring people together through the power of competitive gaming and cutting-edge technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs; 