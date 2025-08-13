# Nextor Web
![Nextor Website](https://img.shields.io/badge/Next.js-14.0.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.16-0055FF?style=for-the-badge&logo=framer)

## 🚀 Features

### Design & Theme
- **Modern Esports Style**: Dark base with neon blue/purple accents
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile
- **Google Fonts**: Poppins and Montserrat for clean, bold typography
- **Custom Animations**: Smooth transitions, hover effects, and scroll animations

### Sections
1. **Hero Banner**: Full-width background with animated tagline and CTA buttons
2. **About Us**: Company story, mission, and achievements with side-by-side layout
3. **Upcoming Events**: Event cards with countdown timer and registration
4. **Gallery**: Carousel of past events with lightbox functionality
5. **Partners & Sponsors**: Clickable logos with hover effects
6. **Our Verticals**: Seven business areas with flip-card animations
7. **Contact Form**: Validated form with Google Sheets integration
8. **Footer**: Social media links and comprehensive information

### Technical Features
- **Performance Optimized**: <2s load time with lazy loading and asset optimization
- **SEO Ready**: Meta tags, OG tags, and structured data
- **Analytics**: Google Analytics v4 integration
- **Form Handling**: API route with validation and error handling
- **Animations**: Framer Motion + AOS (Animate On Scroll)
- **Carousel**: Swiper.js for gallery and content sliders

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + AOS
- **Carousel**: Swiper.js
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Date Handling**: Day.js
- **Linting**: ESLint + Prettier

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextor-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   - Google Analytics ID
   - Google Sheets API credentials (for contact form)
   - Company information
   - Social media links

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id

# Google Sheets API (for contact form)
GOOGLE_SHEETS_ID=your_sheets_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email
GOOGLE_PRIVATE_KEY=your_private_key

# Company Information
NEXT_PUBLIC_COMPANY_NAME=Nextor
NEXT_PUBLIC_COMPANY_EMAIL=hello@nextor.com
NEXT_PUBLIC_COMPANY_PHONE=+1 (555) 123-4567
NEXT_PUBLIC_COMPANY_LOCATION=Los Angeles, CA
```

### Google Sheets Integration

To enable the contact form backend:

1. Create a Google Cloud Project
2. Enable Google Sheets API
3. Create a service account and download credentials
4. Share your Google Sheet with the service account email
5. Add the credentials to your environment variables

## 📱 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize:
- Color palette
- Font families
- Animation durations
- Custom utilities

### Content
Update content in component files:
- Company information
- Event details
- Partner logos
- Contact information

### Images
Replace placeholder images with your own:
- Hero background
- Event images
- Gallery content
- Partner logos

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload `out` folder to Netlify
3. Configure environment variables

### Other Platforms
The project is compatible with any static hosting platform that supports Next.js.

## 📊 Performance

### Optimization Features
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components load on demand
- **Minification**: Production builds are automatically minified
- **Compression**: Gzip compression enabled

### Performance Targets
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Total Blocking Time**: <300ms

## 🔍 SEO & Analytics

### SEO Features
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Sitemap generation
- Robots.txt configuration

### Analytics
- Google Analytics 4 integration
- Event tracking for user interactions
- Performance monitoring
- Conversion tracking

## 🧪 Testing

### Available Scripts
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

### Testing Recommendations
- Test on multiple devices and browsers
- Validate form submissions
- Check performance with Lighthouse
- Test accessibility with screen readers
- Verify responsive design breakpoints

## 📁 Project Structure

```
nextor-website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── HeroBanner.tsx     # Hero section
│   ├── AboutUs.tsx        # About section
│   ├── UpcomingEvents.tsx # Events section
│   ├── Gallery.tsx        # Gallery section
│   ├── Partners.tsx       # Partners section
│   ├── OurVerticals.tsx   # Verticals section
│   ├── ContactForm.tsx    # Contact form
│   ├── Footer.tsx         # Footer
│   └── Navigation.tsx     # Navigation
├── public/                 # Static assets
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: hello@nextor.com
- Discord: [Join our community](https://discord.gg/nextor)
- Issues: [GitHub Issues](https://github.com/nextor/website/issues)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All contributors and supporters

---

**Nextor** - Ideate. Integrate. Innovate. Inspire. 🎮✨ 