'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, 
  Gamepad2, 
  MapPin, 
  Video, 
  ShoppingCart, 
  Calendar, 
  Building2,
  ArrowRight,
  Users,
  TrendingUp,
  Globe,
  Zap
} from 'lucide-react';

const OurVerticals = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const verticals = [
    {
      id: 1,
      title: 'Marketing',
      subtitle: 'Digital & Traditional',
      icon: Megaphone,
      description: 'Comprehensive marketing solutions for gaming brands, including social media, influencer partnerships, and brand activations.',
      features: ['Social Media Marketing', 'Influencer Partnerships', 'Brand Activations', 'Content Creation'],
      color: 'from-neon-blue to-cyan-500',
      bgColor: 'bg-neon-blue/10',
      borderColor: 'border-neon-blue/30',
    },
    {
      id: 2,
      title: 'Esports & Gaming',
      subtitle: 'Competitive & Casual',
      icon: Gamepad2,
      description: 'Professional tournament organization, team management, and gaming infrastructure development.',
      features: ['Tournament Organization', 'Team Management', 'Gaming Infrastructure', 'Player Development'],
      color: 'from-neon-purple to-pink-500',
      bgColor: 'bg-neon-purple/10',
      borderColor: 'border-neon-purple/30',
    },
    {
      id: 3,
      title: 'Location-based Entertainment',
      subtitle: 'Physical Gaming Spaces',
      icon: MapPin,
      description: 'Immersive gaming venues, VR experiences, and interactive entertainment centers.',
      features: ['Gaming Venues', 'VR Experiences', 'Interactive Centers', 'Event Spaces'],
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
    },
    {
      id: 4,
      title: 'Streaming Platform',
      subtitle: 'Content & Technology',
      icon: Video,
      description: 'Advanced streaming solutions, content management, and viewer engagement tools.',
      features: ['Streaming Solutions', 'Content Management', 'Viewer Engagement', 'Analytics Tools'],
      color: 'from-pink-500 to-purple-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
    },
    {
      id: 5,
      title: 'E-commerce',
      subtitle: 'Gaming Merchandise',
      icon: ShoppingCart,
      description: 'Specialized gaming merchandise, collectibles, and digital asset marketplaces.',
      features: ['Gaming Merchandise', 'Collectibles', 'Digital Assets', 'Marketplace Solutions'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
    },
    {
      id: 6,
      title: 'Events',
      subtitle: 'Live & Virtual',
      icon: Calendar,
      description: 'Large-scale gaming events, conventions, and hybrid experiences.',
      features: ['Gaming Conventions', 'Hybrid Events', 'Virtual Experiences', 'Live Productions'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
    },
    {
      id: 7,
      title: 'Offsites & MICE',
      subtitle: 'Corporate & Business',
      icon: Building2,
      description: 'Corporate gaming events, team building, and business entertainment solutions.',
      features: ['Corporate Events', 'Team Building', 'Business Entertainment', 'Networking'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
    },
  ];

  return (
    <section id="verticals" className="section-padding bg-dark-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Verticals</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Nextor operates across seven key business verticals, each designed to revolutionize 
            different aspects of the gaming and entertainment industry.
          </p>
        </motion.div>

        {/* Verticals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-80 perspective-1000"
              onMouseEnter={() => setFlippedCard(vertical.id)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              {/* Front of Card */}
              <motion.div
                className={`absolute inset-0 rounded-2xl p-6 border ${vertical.borderColor} ${vertical.bgColor} backdrop-blur-sm transition-all duration-500`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === vertical.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                <div className="h-full flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${vertical.color} flex items-center justify-center mb-4`}>
                    <vertical.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{vertical.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{vertical.subtitle}</p>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">
                    {vertical.description}
                  </p>
                  
                  {/* Hover Indicator */}
                  <div className="mt-4 flex items-center text-neon-blue text-sm font-medium">
                    <span>Hover for details</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>

              {/* Back of Card */}
              <motion.div
                className={`absolute inset-0 rounded-2xl p-6 border ${vertical.borderColor} bg-dark-800/90 backdrop-blur-sm transition-all duration-500`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === vertical.id ? 'rotateY(0deg)' : 'rotateY(-180deg)',
                }}
              >
                <div className="h-full flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{vertical.title}</h3>
                  
                  {/* Features */}
                  <div className="flex-1 space-y-3">
                    {vertical.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${vertical.color}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full mt-4 py-3 px-4 rounded-lg bg-gradient-to-r ${vertical.color} text-white font-medium text-sm transition-all duration-300`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '50+', label: 'Team Members' },
              { icon: TrendingUp, value: '200%', label: 'Growth Rate' },
              { icon: Globe, value: '25+', label: 'Countries' },
              { icon: Zap, value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVerticals; 