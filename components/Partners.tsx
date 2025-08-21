'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: 'Phoenix',
      logo: '/Gemini_Generated_Image_mwktbwmwktbwmwkt.png',
      url: 'https://gamingtechpro.com',
      category: 'Technology Partner',
    },
    {
      id: 2,
      name: 'Gamers Hub',
      logo: '/Gemini_Generated_Image_ndnn4hndnn4hndnn.png',
      url: 'https://esportselite.com',
      category: 'Strategic Partner',
    },
    {
      id: 3,
      name: 'RespawnX',
      logo: '/Gemini_Generated_Image_mwktbwmwktbwmwkt.png',
      url: 'https://streamflow.com',
      category: 'Streaming Partner',
    },
    {
      id: 4,
      name: 'FragZone Gear',
      logo: '/Gemini_Generated_Image_ndnn4hndnn4hndnn.png',
      url: 'https://gamergear.com',
      category: 'Equipment Partner',
    },
    {
      id: 5,
      name: 'E-Sportia League',
      logo: '/Gemini_Generated_Image_mwktbwmwktbwmwkt.png',
      url: 'https://tournamenthub.com',
      category: 'Tournament Partner',
    },
    {
      id: 6,
      name: 'CriticalXP',
      logo: '/Gemini_Generated_Image_ndnn4hndnn4hndnn.png',
      url: 'https://gamedevstudios.com',
      category: 'Development Partner',
    },
    {
      id: 7,
      name: 'NextPlay Studios',
      logo: '/Gemini_Generated_Image_mwktbwmwktbwmwkt.png',
      url: 'https://esportsarena.com',
      category: 'Venue Partner',
    },
    {
      id: 8,
      name: 'Arcadia Arena',
      logo: '/Gemini_Generated_Image_ndnn4hndnn4hndnn.png',
      url: 'https://gamingnetwork.com',
      category: 'Network Partner',
    },
  ];

  const categories = ['All', 'Technology', 'Strategic', 'Streaming', 'Equipment', 'Tournament', 'Development', 'Venue', 'Network'];

  // Split partners into two rows
  const firstRow = partners.slice(0, 4);
  const secondRow = partners.slice(4, 8);

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

        {/* Scrolling Partner Rows */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8 mb-16"
        >
          {/* First Row - Moves Left */}
          <div 
            className="flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s] group/row"
            onMouseEnter={(e) => e.currentTarget.style.setProperty('--paused', 'paused')}
            onMouseLeave={(e) => e.currentTarget.style.setProperty('--paused', 'running')}
          >
            <div className="flex animate-scroll-left group-hover/row:[animation-play-state:var(--paused,running)]">
              {/* First set of cards */}
              {firstRow.map((partner) => (
                <div key={partner.id} className="flex-shrink-0 w-64 px-2">
                  <PartnerCard partner={partner} />
                </div>
              ))}
              {/* Second set for seamless loop */}
              {firstRow.map((partner) => (
                <div key={`${partner.id}-duplicate-1`} className="flex-shrink-0 w-64 px-2">
                  <PartnerCard partner={partner} />
                </div>
              ))}
              {/* Third set for better infinite effect */}
              {firstRow.map((partner) => (
                <div key={`${partner.id}-duplicate-2`} className="flex-shrink-0 w-64 px-2">
                  <PartnerCard partner={partner} />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Moves Right */}
          <div 
            className="flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s] group/row"
            onMouseEnter={(e) => e.currentTarget.style.setProperty('--paused', 'paused')}
            onMouseLeave={(e) => e.currentTarget.style.setProperty('--paused', 'running')}
          >
            <div className="flex animate-scroll-right group-hover/row:[animation-play-state:var(--paused,running)]">
              {/* First set of cards */}
              {secondRow.map((partner) => (
                <div key={partner.id} className="flex-shrink-0 w-64 px-2">
                  <PartnerCard partner={partner} />
                </div>
              ))}
              {/* Second set for seamless loop */}
              {secondRow.map((partner) => (
                <div key={`${partner.id}-duplicate-1`} className="flex-shrink-0 w-64 px-2">
                  <PartnerCard partner={partner} />
                </div>
              ))}
              {/* Third set for better infinite effect */}
              {secondRow.map((partner) => (
                <div key={`${partner.id}-duplicate-2`} className="flex-shrink-0 w-64 px-2">
                  <PartnerCard partner={partner} />
                </div>
              ))}
            </div>
          </div>
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
            <div className="flex justify-center gap-4">
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open('https://example.com/watch', '_blank');
                }}
                className="btn-primary"
              >
                Watch
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Partner Card Component with individual hover effects (unchanged)
const PartnerCard = ({ partner }: { partner: any }) => (
  <div className="group relative">
    <a
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-dark-800/50 rounded-xl p-6 border border-dark-700 group-hover:border-neon-blue/50 group-hover:bg-dark-700/70 group-hover:transform group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-neon-blue/20 transition-all duration-300 text-center">
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
        
        <p className="text-sm text-gray-400 mb-3 group-hover:text-gray-300 transition-colors duration-300">
          {partner.category}
        </p>
        
        {/* External Link Icon */}
        <div className="flex justify-center">
          <div className="w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center group-hover:bg-neon-blue/40 group-hover:scale-110 transition-all duration-300">
            <ExternalLink className="w-4 h-4 text-neon-blue group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default Partners;