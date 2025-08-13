'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Trophy } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const UpcomingEvents = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  const events = [
    {
      id: 1,
      name: 'Nextor Championship 2024',
      date: '2024-03-15',
      time: '18:00 UTC',
      location: 'Los Angeles Convention Center',
      description: 'The biggest esports tournament of the year featuring top teams from around the world competing for a $500,000 prize pool.',
      game: 'Multiple Games',
      participants: '256 Teams',
      prize: '$500,000',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      streamUrl: 'https://twitch.tv/nextor',
    },
    {
      id: 2,
      name: 'Gaming Expo 2024',
      date: '2024-04-20',
      time: '10:00 UTC',
      location: 'Las Vegas Convention Center',
      description: 'Experience the latest in gaming technology, meet industry professionals, and participate in exclusive tournaments.',
      game: 'Expo & Tournaments',
      participants: '10,000+ Attendees',
      prize: 'Various Prizes',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      streamUrl: 'https://youtube.com/nextor',
    },
    {
      id: 3,
      name: 'Pro League Finals',
      date: '2024-05-10',
      time: '20:00 UTC',
      location: 'Madison Square Garden',
      description: 'The culmination of the Pro League season with the top 8 teams battling for supremacy and glory.',
      game: 'FPS & MOBA',
      participants: '8 Teams',
      prize: '$250,000',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      streamUrl: 'https://twitch.tv/nextor',
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8" />
                  <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Join us for the most exciting esports events and gaming experiences. 
          Don&apos;t miss out on the action!
        </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Countdown to Next Event
            </h3>
            <CountdownTimer targetDate={events[0].date} />
          </div>
        </motion.div>

        {/* Event Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="card group cursor-pointer"
              onClick={() => setActiveEvent(index)}
            >
              {/* Event Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="aspect-video bg-cover bg-center bg-no-repeat relative"
                     style={{ backgroundImage: `url(${event.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                  
                  {/* Event Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-neon-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                      {event.game}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                  {event.name}
                </h3>
                
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-neon-blue" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-neon-blue" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-neon-blue" />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-neon-blue" />
                    <span>{event.participants}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-neon-blue" />
                    <span>{event.prize}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {event.description}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToContact();
                    }}
                    className="btn-primary flex-1 text-sm py-3"
                  >
                    Register Now
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(event.streamUrl, '_blank');
                    }}
                    className="btn-secondary text-sm py-3 px-4"
                  >
                    Watch
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stream Embed Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700">
            <h3 className="text-2xl font-bold mb-6 text-center text-white">
              Live Stream
            </h3>
            <div className="aspect-video bg-dark-900 rounded-lg flex items-center justify-center border border-dark-600">
              <div className="text-center">
                <div className="w-20 h-20 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-[12px] border-l-white ml-1" />
                </div>
                <p className="text-gray-400 mb-2">Stream will be available during the event</p>
                <p className="text-sm text-gray-500">Check back for live coverage</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents; 