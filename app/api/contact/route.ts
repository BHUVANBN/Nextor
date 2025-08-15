import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventServiceInterest, message, newsletterSubscribed } = body;

    // Debug: Log received data
    console.log('Received contact form data:', {
      name,
      email,
      phone,
      eventServiceInterest,
      message,
      newsletterSubscribed
    });

    // Validate required fields
    if (!name || !email || !eventServiceInterest || !message) {
      console.log('Missing required fields:', { name, email, eventServiceInterest, message });
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectDB();
    console.log('Connected to MongoDB successfully');

    // Check if contact already exists with this email
    const existingContact = await Contact.findOne({ email: email.toLowerCase() });
    
    if (existingContact) {
      console.log('Updating existing contact:', existingContact._id);
      // Update existing contact with new information
      existingContact.name = name;
      existingContact.phone = phone || '';
      existingContact.eventServiceInterest = eventServiceInterest;
      existingContact.message = message;
      existingContact.newsletterSubscribed = newsletterSubscribed || false;
      existingContact.updatedAt = new Date();
      
      await existingContact.save();
      console.log('Updated existing contact successfully');
      
      return NextResponse.json(
        { 
          message: 'Contact information updated successfully!',
          submissionId: existingContact._id,
          timestamp: existingContact.updatedAt,
          updated: true
        },
        { status: 200 }
      );
    }

    // Create new contact submission
    const contactData = {
      name,
      email: email.toLowerCase(),
      phone: phone || '',
      eventServiceInterest,
      message,
      newsletterSubscribed: newsletterSubscribed || false,
    };

    console.log('Creating new contact with data:', contactData);

    const contact = new Contact(contactData);

    // Save to database
    await contact.save();
    console.log('New contact saved successfully with ID:', contact._id);

    // Log the submission
    console.log('Contact form submission saved to MongoDB:', {
      id: contact._id,
      timestamp: contact.createdAt,
      name,
      email,
      phone,
      eventServiceInterest,
      message,
      newsletterSubscribed: contact.newsletterSubscribed,
    });

    // Return success response
    return NextResponse.json(
      { 
        message: 'Message sent successfully!',
        submissionId: contact._id,
        timestamp: contact.createdAt,
        updated: false
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
} 