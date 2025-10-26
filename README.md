# Install It Guy - Google Reviews Integration

A Next.js application with live Google Reviews integration for Install It Guy handyman services.

## Features

- ✅ Live Google Reviews from Google Places API
- ✅ Responsive design with Tailwind CSS
- ✅ Real-time review display
- ✅ Profile photos and star ratings
- ✅ Direct links to Google reviews
- ✅ Professional card-based layout

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Google Maps API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Places API**
4. Create credentials (API Key)
5. Copy the API key

### 3. Configure Environment Variables

Copy the example environment file:

```bash
cp env.example .env.local
```

Edit `.env.local` and add your Google Maps API key:

```env
GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### 4. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000/reviews](http://localhost:3000/reviews) to see the reviews page.

## Project Structure

```
├── components/
│   └── Reviews.jsx          # Main reviews component
├── pages/
│   ├── api/
│   │   └── reviews.js       # Google Places API endpoint
│   └── reviews.jsx          # Reviews page
├── styles/
│   └── globals.css          # Tailwind CSS styles
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── env.example              # Environment variables example
```

## API Configuration

The `/api/reviews.js` endpoint fetches reviews using:

- **Place ID**: `ChIJ0x0xz-_/V4gRQ3R7S7aH7ZI` (Install It Guy)
- **Google Places API**: Fetches up to 5 most recent reviews
- **Fields**: Reviews only (optimized for performance)

## Styling

Built with Tailwind CSS featuring:

- **Responsive Grid**: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`
- **Card Design**: `p-6 bg-white rounded-2xl shadow hover:shadow-lg`
- **Color Scheme**: Blue primary colors with gray backgrounds
- **Animations**: Smooth hover transitions and loading states

## Components

### Reviews Component (`/components/Reviews.jsx`)

- Fetches reviews from `/api/reviews`
- Displays loading and error states
- Shows reviewer profile photos
- Renders star ratings
- Truncates long review text
- Links to original Google reviews

### API Route (`/pages/api/reviews.js`)

- Connects to Google Places API
- Handles API errors gracefully
- Returns structured review data
- Includes proper error handling

## Environment Variables

| Variable              | Description                                 | Required |
| --------------------- | ------------------------------------------- | -------- |
| `GOOGLE_MAPS_API_KEY` | Google Maps API key with Places API enabled | Yes      |

## Google Places API Setup

1. **Create Google Cloud Project**

   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create new project or select existing

2. **Enable Places API**

   - Go to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"

3. **Create API Key**

   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated key

4. **Restrict API Key (Recommended)**
   - Click on your API key
   - Under "Application restrictions", choose "HTTP referrers"
   - Add your domain: `localhost:3000/*`
   - Under "API restrictions", select "Places API"

## Troubleshooting

### Common Issues

**"Google Maps API key not configured"**

- Ensure `.env.local` exists with `GOOGLE_MAPS_API_KEY`
- Restart the development server after adding the key

**"Failed to fetch reviews from Google"**

- Check if Places API is enabled in Google Cloud Console
- Verify API key has proper permissions
- Check browser console for detailed error messages

**"No reviews found"**

- Verify the Place ID is correct
- Check if the business has reviews on Google Maps
- Ensure API key has Places API access

### API Quotas

- **Free Tier**: 1,000 requests per day
- **Billing**: Set up billing for higher limits
- **Caching**: Consider implementing review caching for production

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
open http://localhost:3000/reviews
```

### Production Considerations

- Set up proper API key restrictions
- Implement review caching
- Add error monitoring
- Consider rate limiting
- Set up proper CORS policies

## Support

For issues with:

- **Google Maps API**: Check [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service)
- **Next.js**: Check [Next.js Documentation](https://nextjs.org/docs)
- **Tailwind CSS**: Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is for Install It Guy business use only.
