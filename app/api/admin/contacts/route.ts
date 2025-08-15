import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function GET(request: NextRequest) {
  try {
    // In production, you should add proper authentication here
    // For now, this is a simple endpoint to view submissions
    
    await connectDB();
    
    const contacts = await Contact.find({})
      .sort({ createdAt: -1 })
      .limit(100); // Limit to last 100 submissions
    
    return NextResponse.json({
      success: true,
      count: contacts.length,
              contacts: contacts.map(contact => ({
          id: contact._id,
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          eventServiceInterest: contact.eventServiceInterest,
          message: contact.message,
          newsletterSubscribed: contact.newsletterSubscribed,
          status: contact.status,
          createdAt: contact.createdAt,
          updatedAt: contact.updatedAt,
        }))
    });
    
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
} 