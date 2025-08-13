'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'GamingTech Pro',
      logo: 'https://via.placeholder.com/200x100/1e293b/00d4ff?text=GamingTech+Pro',
      url: 'https://gamingtechpro.com',
      category: 'Technology Partner',
    },
    {
      id: 2,
      name: 'Esports Elite',
      logo: 'https://via.placeholder.com/200x100/1e293b/8b5cf6?text=Esports+Elite',
      url: 'https://esportselite.com',
      category: 'Strategic Partner',
    },
    {
      id: 3,
      name: 'StreamFlow',
      logo: 'https://via.placeholder.com/200x100/1e293b/06b6d4?text=StreamFlow',
      url: 'https://streamflow.com',
      category: 'Streaming Partner',
    },
    {
      id: 4,
      name: 'GamerGear',
      logo: 'https://via.placeholder.com/200x100/1e293b/ec4899?text=GamerGear',
      url: 'https://gamergear.com',
      category: 'Equipment Partner',
    },
    {
      id: 5,
      name: 'TournamentHub',
      logo: 'https://via.placeholder.com/200x100/1e293b/00d4ff?text=TournamentHub',
      url: 'https://tournamenthub.com',
      category: 'Tournament Partner',
    },
    {
      id: 6,
      name: 'GameDev Studios',
      logo: 'https://via.placeholder.com/200x100/1e293b/8b5cf6?text=GameDev+Studios',
      url: 'https://gamedevstudios.com',
      category: 'Development Partner',
    },
    {
      id: 7,
      name: 'Esports Arena',
      logo: 'https://via.placeholder.com/200x100/1e293b/06b6d4?text=Esports+Arena',
      url: 'https://esportsarena.com',
      category: 'Venue Partner',
    },
    {
      id: 8,
      name: 'Gaming Network',
      logo: 'https://via.placeholder.com/200x100/1e293b/ec4899?text=Gaming+Network',
      url: 'https://gamingnetwork.com',
      category: 'Network Partner',
    },
  ];

  const categories = ['All', 'Technology', 'Strategic', 'Streaming', 'Equipment', 'Tournament', 'Development', 'Venue', 'Network'];

  return (
    <section id="partners" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partners & <span className="text-gradient">Sponsors</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We&apos;re proud to work with industry leaders who share our vision for the future of gaming and esports.
          </p>
        </motion.div>

        {/* Partner Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 group-hover:border-neon-blue/50 transition-all duration-300 text-center">
                  {/* Logo */}
                  <div className="mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-20 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                    />
                  </div>
                  
                  {/* Partner Info */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                    {partner.name}
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-3">
                    {partner.category}
                  </p>
                  
                  {/* External Link Icon */}
                  <div className="flex justify-center">
                    <div className="w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center group-hover:bg-neon-blue/40 transition-all duration-300">
                      <ExternalLink className="w-4 h-4 text-neon-blue" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Become a Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-dark-800/50 to-dark-700/50 border border-dark-600 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Want to Become a Partner?
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Join our network of industry leaders and help shape the future of esports and gaming entertainment. 
              Let&apos;s create something extraordinary together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners; 