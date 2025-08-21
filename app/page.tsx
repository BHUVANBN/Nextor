'use client';

import { useEffect } from 'react';
import HeroBanner from '@/components/HeroBanner';
import AboutUs from '@/components/AboutUs';
import UpcomingEvents from '@/components/UpcomingEvents';
import Gallery from '@/components/Gallery';
import Partners from '@/components/Partners';
import OurVerticals from '@/components/OurVerticals';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Hyperspeed from '@/components/Hyperspeed';

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    const initAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 100,
        });
      } catch (error) {
        console.log('AOS not available');
      }
    };

    initAOS();
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
     
      <HeroBanner />
      
      <AboutUs />
      <UpcomingEvents />
      <Gallery />
      <Partners />
      <OurVerticals />
      <ContactForm />
      <Footer />
    </main>
  );
} 