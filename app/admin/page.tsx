'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Users, Calendar, MessageSquare } from 'lucide-react';

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventServiceInterest: string;
  message: string;
  newsletterSubscribed: boolean;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const contactsRes = await fetch('/api/admin/contacts');

      if (contactsRes.ok) {
        const contactsData = await contactsRes.json();
        setContacts(contactsData.contacts);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Nextor Admin Dashboard</h1>
          <p className="text-gray-400">Manage contact submissions and newsletter subscribers</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-dark-800 p-6 rounded-lg border border-dark-700"
          >
            <div className="flex items-center space-x-3">
              <MessageSquare className="w-8 h-8 text-neon-blue" />
              <div>
                <p className="text-gray-400 text-sm">Total Contacts</p>
                <p className="text-2xl font-bold">{contacts.length}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-800 p-6 rounded-lg border border-dark-700"
          >
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-neon-purple" />
              <div>
                <p className="text-gray-400 text-sm">Newsletter Subscribers</p>
                <p className="text-2xl font-bold">{contacts.filter(c => c.newsletterSubscribed).length}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-800 p-6 rounded-lg border border-dark-700"
          >
            <div className="flex items-center space-x-3">
              <Mail className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-gray-400 text-sm">Active Subscribers</p>
                <p className="text-2xl font-bold">{contacts.filter(c => c.newsletterSubscribed).length}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-800 p-6 rounded-lg border border-dark-700"
          >
            <div className="flex items-center space-x-3">
              <Calendar className="w-8 h-8 text-orange-400" />
              <div>
                <p className="text-gray-400 text-sm">This Month</p>
                <p className="text-2xl font-bold">
                  {contacts.filter(c => {
                    const date = new Date(c.createdAt);
                    const now = new Date();
                    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
                  }).length}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Submissions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-dark-800 rounded-lg border border-dark-700 overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Contact Form Submissions</h2>
              {contacts.length === 0 ? (
                <p className="text-gray-400">No contact submissions yet.</p>
              ) : (
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="p-4 bg-dark-700 rounded-lg border border-dark-600"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-neon-blue">{contact.name}</h3>
                        <span className="text-xs text-gray-400">{formatDate(contact.createdAt)}</span>
                      </div>
                      <p className="text-gray-300 mb-2">{contact.email}</p>
                      {contact.phone && <p className="text-gray-400 text-sm mb-2">Phone: {contact.phone}</p>}
                      <p className="text-gray-300 mb-2"><strong>Event/Service:</strong> {contact.eventServiceInterest}</p>
                      <p className="text-gray-300 text-sm">{contact.message}</p>
                      <div className="mt-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          contact.newsletterSubscribed
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {contact.newsletterSubscribed ? 'Newsletter Subscribed' : 'Not Subscribed'}
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          contact.status === 'new' ? 'bg-blue-500/20 text-blue-400' :
                          contact.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                          contact.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {contact.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
      </div>
    </div>
  );
} 