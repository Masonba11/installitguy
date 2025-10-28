# Web3Forms Setup Instructions

## Overview

All forms on the Install It Guy website are now configured to submit to **both** Web3Forms accounts simultaneously, ensuring both users receive emails:

- **Mason's Account**: `mason@silverbackmarketing.com` (API: 0bac6866-4755-49c8-969e-6963e0a552a0)
- **Scott's Account**: `installitguyco@gmail.com` (API: 0eca37dd-258a-4e4d-ae02-a1d6cb4953fe)

## Setup Steps

### 1. Get Web3Forms Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Create a new form
4. Copy your access key

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory with:

```env
WEB3FORMS_ACCESS_KEY=0bac6866-4755-49c8-969e-6963e0a552a0
```

**Note:** The API key is already configured in the code as a fallback, so forms will work even without the environment variable.

### 3. Update Configuration (if needed)

The email addresses are configured in `config/web3forms.js`:

- **Mason's Account**: `mason@silverbackmarketing.com` (API: 0bac6866-4755-49c8-969e-6963e0a552a0)
- **Scott's Account**: `installitguyco@gmail.com` (API: 0eca37dd-258a-4e4d-ae02-a1d6cb4953fe)

**How it works**: Each form submission is sent to both Web3Forms accounts simultaneously using `Promise.allSettled()`, ensuring both users receive the email even if one account fails.

## How It Works

### Quote Forms

- **Location**: All pages with quote forms
- **Subject**: "New Quote Request from Install It Guy Website"
- **Data sent**: Name, email, phone, service, message

### Contact Forms

- **Location**: Contact Us page
- **Subject**: "New Contact Form Submission from Install It Guy Website"
- **Data sent**: Name, email, phone, service, message

### Form Submission Flow

1. User fills out form
2. Form submits to Web3Forms API
3. Web3Forms sends email to configured addresses
4. User is redirected to thank you page
5. Lead tracking is activated

## Testing

1. Fill out any form on the website
2. Check that you receive emails at both addresses
3. Verify the thank you page loads correctly

## Troubleshooting

- If forms don't submit, check the browser console for errors
- Verify the access key is correct
- Ensure the `.env.local` file is in the root directory
- Check that Web3Forms account is active
