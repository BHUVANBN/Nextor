# MongoDB Setup for Nextor Website

## Overview
This project now includes a complete MongoDB backend for storing contact form submissions and newsletter subscriptions. The previous Google Sheets integration has been replaced with a proper database solution.

## Features Added

### 1. Contact Form Database
- **Model**: `Contact` - stores all contact form submissions
- **Fields**: name, email, phone, eventSelection, message, status, timestamps
- **API Endpoint**: `/api/contact` (POST)
- **Admin View**: `/api/admin/contacts` (GET)

### 2. Newsletter Subscription Database
- **Model**: `Newsletter` - stores newsletter subscribers
- **Fields**: email, isActive, subscribedAt, preferences, lastEmailSent
- **API Endpoint**: `/api/newsletter` (POST)
- **Admin View**: `/api/admin/newsletter` (GET)

### 3. Admin Dashboard
- **Route**: `/admin` - view all submissions and subscribers
- **Features**: Statistics, contact submissions, newsletter subscribers
- **Real-time data**: Fetches data from MongoDB

## Setup Instructions

### 1. Install Dependencies
```bash
npm install mongodb mongoose nodemailer @types/nodemailer
```

### 2. MongoDB Server
Ensure MongoDB is running on your local machine:
```bash
# Start MongoDB service
sudo systemctl start mongod

# Check status
sudo systemctl status mongod

# Or start manually
mongod --dbpath /var/lib/mongodb
```

### 3. Environment Variables
Create a `.env.local` file with:
```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/nextor

# Email Configuration (for future newsletter emails)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password_here
NEXTOR_EMAIL=hello@nextor.com
```

### 4. Database Structure
The application will automatically create these collections:
- `contacts` - Contact form submissions
- `newsletters` - Newsletter subscribers

## API Endpoints

### Contact Form
- **POST** `/api/contact`
  - Body: `{ name, email, phone?, eventSelection, message }`
  - Response: Success message with submission ID

### Newsletter
- **POST** `/api/newsletter`
  - Body: `{ email }`
  - Response: Success message or error if already subscribed

### Admin (for viewing data)
- **GET** `/api/admin/contacts` - List all contact submissions
- **GET** `/api/admin/newsletter` - List all newsletter subscribers

## Database Models

### Contact Schema
```typescript
{
  name: String (required),
  email: String (required, unique),
  phone: String (optional),
  eventSelection: String (required),
  message: String (required),
  status: String (enum: 'new', 'in-progress', 'completed', 'archived'),
  createdAt: Date,
  updatedAt: Date
}
```

### Newsletter Schema
```typescript
{
  email: String (required, unique),
  isActive: Boolean (default: true),
  subscribedAt: Date,
  lastEmailSent: Date (optional),
  preferences: {
    events: Boolean,
    tournaments: Boolean,
    innovations: Boolean,
    general: Boolean
  }
}
```

## Usage

### 1. Contact Form
The contact form now automatically saves submissions to MongoDB when users submit the form.

### 2. Newsletter Subscription
Users can subscribe to the newsletter using the form in the footer. Duplicate emails are handled gracefully.

### 3. Admin Dashboard
Visit `/admin` to view:
- Total contact submissions
- Newsletter subscriber count
- Active subscribers
- Monthly submission statistics
- Detailed view of all data

## Future Enhancements

### 1. Email Integration
- Send automated responses to contact form submissions
- Send newsletter emails to subscribers
- Email templates for different event types

### 2. Authentication
- Secure admin dashboard with login
- Role-based access control
- API key authentication for external integrations

### 3. Data Management
- Export data to CSV/Excel
- Bulk email operations
- Contact status management
- Unsubscribe functionality

## Troubleshooting

### MongoDB Connection Issues
1. Ensure MongoDB service is running
2. Check connection string in `.env.local`
3. Verify MongoDB port (default: 27017)
4. Check MongoDB logs: `sudo journalctl -u mongod`

### API Errors
1. Check browser console for errors
2. Verify API routes are accessible
3. Check MongoDB connection in server logs
4. Ensure all required fields are provided

### Admin Dashboard Issues
1. Check if MongoDB has data
2. Verify API endpoints are working
3. Check browser console for fetch errors
4. Ensure proper CORS configuration

## Security Notes

⚠️ **Important**: The current admin endpoints (`/api/admin/*`) are not secured. In production:
- Add authentication middleware
- Implement rate limiting
- Use environment-based access control
- Consider using NextAuth.js or similar

## Performance Considerations

- MongoDB indexes on frequently queried fields
- Pagination for large datasets
- Connection pooling
- Query optimization for admin dashboard 