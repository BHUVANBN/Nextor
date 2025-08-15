import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function GET() {
  try {
    console.log('Testing database connection...');
    
    // Connect to MongoDB
    await connectDB();
    console.log('Connected to MongoDB successfully');
    
    // Test creating a sample contact
    const testContact = new Contact({
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      eventServiceInterest: 'Test Event',
      message: 'This is a test message',
      newsletterSubscribed: true,
    });
    
    console.log('Test contact data:', testContact);
    
    // Save to database
    await testContact.save();
    console.log('Test contact saved with ID:', testContact._id);
    
    // Fetch all contacts to verify
    const allContacts = await Contact.find({});
    console.log('All contacts in database:', allContacts);
    
    // Clean up test data
    await Contact.findByIdAndDelete(testContact._id);
    console.log('Test contact cleaned up');
    
    return NextResponse.json({
      success: true,
      message: 'Database connection and Contact model working correctly',
      testContactId: testContact._id,
      totalContacts: allContacts.length
    });
    
  } catch (error) {
    console.error('Database test error:', error);
    return NextResponse.json(
      { error: 'Database test failed', details: error.message },
      { status: 500 }
    );
  }
} 