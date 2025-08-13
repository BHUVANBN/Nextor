'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventSelection: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const eventOptions = [
    'Nextor Championship 2024',
    'Gaming Expo 2024',
    'Pro League Finals',
    'Community Tournament',
    'Corporate Event',
    'Partnership Inquiry',
    'General Inquiry',
    'Other',
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call to Google Sheets
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful submission
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      reset();
      
      // In production, this would be:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // if (response.ok) { ... }
      
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@nextor.com',
      link: 'mailto:hello@nextor.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Los Angeles, CA',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to join the Nextor revolution? Contact us for partnerships, event registration, 
            or any questions about our services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-dark-800/50 border border-dark-700 hover:border-neon-blue/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center group-hover:bg-neon-blue/40 transition-all duration-300">
                      <info.icon className="w-6 h-6 text-neon-blue" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{info.title}</h4>
                      <p className="text-gray-400 group-hover:text-neon-blue transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-r from-dark-800/50 to-dark-700/50 border border-dark-600">
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose Nextor?</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Industry-leading esports expertise</li>
                <li>• Cutting-edge technology solutions</li>
                <li>• Global network of partners</li>
                <li>• 24/7 customer support</li>
                <li>• Proven track record of success</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-dark-800/50 rounded-2xl p-8 border border-dark-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400">{submitMessage}</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-400">{submitMessage}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-dark-600 focus:border-neon-blue focus:ring-neon-blue/50'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-dark-600 focus:border-neon-blue focus:ring-neon-blue/50'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:border-neon-blue focus:ring-neon-blue/50 transition-all duration-300"
                  placeholder="Enter your phone number (optional)"
                />
              </div>

              {/* Event Selection */}
              <div>
                <label htmlFor="eventSelection" className="block text-sm font-medium text-gray-300 mb-2">
                  Event/Service Interest
                </label>
                <select
                  {...register('eventSelection', { required: 'Please select an option' })}
                  id="eventSelection"
                  className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.eventSelection
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-dark-600 focus:border-neon-blue focus:ring-neon-blue/50'
                  }`}
                >
                  <option value="">Select an event or service</option>
                  {eventOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.eventSelection && (
                  <p className="mt-1 text-sm text-red-400">{errors.eventSelection.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-3 bg-dark-700 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500/50'
                      : 'border-dark-600 focus:border-neon-blue focus:ring-neon-blue/50'
                  }`}
                  placeholder="Tell us about your inquiry or event requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 