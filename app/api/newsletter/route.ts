import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
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

    // Check if email already exists
    const existingSubscriber = await Newsletter.findOne({ email: email.toLowerCase() });
    
    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        return NextResponse.json(
          { error: 'You are already subscribed to our newsletter!' },
          { status: 409 }
        );
      } else {
        // Reactivate subscription
        existingSubscriber.isActive = true;
        existingSubscriber.subscribedAt = new Date();
        await existingSubscriber.save();
        
        return NextResponse.json(
          { 
            message: 'Welcome back! Your subscription has been reactivated.',
            email: existingSubscriber.email,
            subscribedAt: existingSubscriber.subscribedAt
          },
          { status: 200 }
        );
      }
    }

    // Create new newsletter subscription
    const newsletter = new Newsletter({
      email: email.toLowerCase(),
    });

    // Save to database
    await newsletter.save();

    // Log the subscription
    console.log('Newsletter subscription saved to MongoDB:', {
      id: newsletter._id,
      email: newsletter.email,
      subscribedAt: newsletter.subscribedAt,
    });

    // Return success response
    return NextResponse.json(
      { 
        message: 'Successfully subscribed to Nextor newsletter!',
        email: newsletter.email,
        subscribedAt: newsletter.subscribedAt
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
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