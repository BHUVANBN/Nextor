import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, eventSelection, message } = body;

    // Validate required fields
    if (!name || !email || !eventSelection || !message) {
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

    // In production, this would integrate with Google Sheets API
    // For now, we'll simulate the integration
    
    // Example Google Sheets integration:
    // const sheets = google.sheets({ version: 'v4', auth: googleAuth });
    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    //   range: 'Sheet1!A:E',
    //   valueInputOption: 'USER_ENTERED',
    //   requestBody: {
    //     values: [[
    //       new Date().toISOString(),
    //       name,
    //       email,
    //       phone || '',
    //       eventSelection,
    //       message
    //     ]]
    //   }
    // });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Log the submission (in production, this would go to a proper logging service)
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      eventSelection,
      message,
    });

    // Return success response
    return NextResponse.json(
      { 
        message: 'Message sent successfully!',
        submissionId: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
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