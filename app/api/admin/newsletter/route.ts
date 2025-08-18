import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Newsletter from '@/models/Newsletter';

export async function GET(request: NextRequest) {
  try {
    // In production, you should add proper authentication here
    // For now, this is a simple endpoint to view subscribers
    
    await connectDB();
    
    const subscribers = await Newsletter.find({})
      .sort({ subscribedAt: -1 })
      .limit(100); // Limit to last 100 subscribers
    
    return NextResponse.json({
      success: true,
      count: subscribers.length,
      subscribers: subscribers.map(subscriber => ({
        id: subscriber._id,
        email: subscriber.email,
        isActive: subscriber.isActive,
        subscribedAt: subscriber.subscribedAt,
        lastEmailSent: subscriber.lastEmailSent,
        preferences: subscriber.preferences,
      }))
    });
    
  } catch (error) {
    console.error('Error fetching newsletter subscribers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch newsletter subscribers' },
      { status: 500 }
    );
  }
} 