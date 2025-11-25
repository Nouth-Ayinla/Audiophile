# Convex Backend Setup Guide

This project uses **Convex** as the backend for order storage and email confirmations. Follow these steps to set up and run the application.

## ⚠️ Important: Convex Must Be Initialized

The application currently has **stub files** in `convex/_generated/` that allow the code to build, but **the checkout functionality will NOT work** until you complete the setup below. You must run `npx convex dev` to generate the real Convex backend files.

---

## Prerequisites

- Node.js (v16 or higher)
- npm or bun package manager
- A Resend account for email sending (free tier available)

---

## Step 1: Initialize Convex (REQUIRED)

1. **Run Convex development server:**
   ```bash
   npx convex dev
   ```

2. **What happens:**
   - This command will prompt you to log in or create a Convex account
   - It creates a new Convex project
   - Generates the `convex/_generated/` folder with TypeScript types
   - Provides you with a deployment URL (e.g., `https://your-project.convex.cloud`)

3. **Keep this terminal running** - it watches for changes to your Convex functions

---

## Step 2: Configure Environment Variables

1. **Create `.env.local` file** in the project root:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Add your Convex URL** (from Step 1):
   ```env
   VITE_CONVEX_URL=https://your-deployment.convex.cloud
   ```

---

## Step 3: Set Up Email Sending (Resend)

### Create Resend Account

1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email domain at [resend.com/domains](https://resend.com/domains)
   - **Important:** Without domain verification, emails will only work with test addresses
3. Generate an API key at [resend.com/api-keys](https://resend.com/api-keys)

### Add Resend API Key to Convex

Run this command to store your Resend API key in Convex:

```bash
npx convex env set RESEND_API_KEY your_resend_api_key_here
```

This stores the API key securely in Convex's environment (similar to .env files).

---

## Step 4: Run the Application

### Option A: Two Terminal Windows

**Terminal 1 - Convex Backend:**
```bash
npx convex dev
```

**Terminal 2 - Vite Frontend:**
```bash
npm run dev
```

### Option B: Single Command (Optional)

You can add a script to run both concurrently by installing `concurrently`:

```bash
npm install -D concurrently
```

Then add to `package.json` scripts:
```json
"dev:all": "concurrently \"npx convex dev\" \"npm run dev\""
```

Run with:
```bash
npm run dev:all
```

---

## Database Schema

The Convex database includes an `orders` table with the following structure:

### Orders Table

| Field | Type | Description |
|-------|------|-------------|
| `customerName` | string | Customer's full name |
| `customerEmail` | string | Customer's email address |
| `customerPhone` | string | Customer's phone number |
| `shippingAddress` | string | Street address |
| `shippingZip` | string | ZIP/Postal code |
| `shippingCity` | string | City |
| `shippingCountry` | string | Country |
| `paymentMethod` | enum | "emoney" or "cod" |
| `paymentDetails` | object | Optional e-money details |
| `items` | array | Array of cart items |
| `subtotal` | number | Order subtotal |
| `shipping` | number | Shipping cost |
| `vat` | number | VAT amount |
| `grandTotal` | number | Total order amount |
| `status` | string | Order status (default: "pending") |
| `createdAt` | number | Timestamp |

**Indexes:**
- `by_email`: Query orders by customer email
- `by_creation_time`: Query orders by date

---

## Testing the Integration

### 1. Test Order Creation

1. Add items to cart
2. Navigate to checkout
3. Fill in all required fields
4. Submit the form
5. Check Convex dashboard to verify order was saved

### 2. Test Email Sending

1. Complete an order with a valid email address
2. Check your inbox for the confirmation email
3. Verify email contains:
   - Order ID
   - Order items
   - Shipping details
   - Price breakdown

### 3. View Convex Dashboard

Visit the Convex dashboard to:
- View all orders in the database
- Monitor function calls
- Check logs for errors
- Test queries manually

---

## Troubleshooting

### Build Errors: Cannot find module 'convex/_generated/api'

**Solution:** Run `npx convex dev` first to generate TypeScript types.

### Email not sending

**Possible causes:**
1. **Domain not verified** - Verify your domain at resend.com/domains
2. **Invalid API key** - Check your Resend API key is correct
3. **API key not set** - Run `npx convex env set RESEND_API_KEY your_key`

### Order not saving to database

**Check:**
1. Convex dev server is running
2. `VITE_CONVEX_URL` is set correctly in `.env.local`
3. Browser console for errors
4. Convex dashboard logs

### CORS errors

**Solution:** Convex automatically handles CORS for HTTP routes. If you see CORS errors, check that your `VITE_CONVEX_URL` is correct.

---

## Deployment

### Deploy Convex Backend

```bash
npx convex deploy
```

This deploys your Convex functions to production and provides a production URL.

### Deploy Frontend

1. Update `.env.local` with production Convex URL
2. Deploy via your hosting provider (Vercel, Netlify, etc.)
3. Add environment variable `VITE_CONVEX_URL` to your hosting provider

### Production Checklist

- [ ] Convex backend deployed (`npx convex deploy`)
- [ ] Production Convex URL added to hosting environment variables
- [ ] Resend domain verified and API key set in Convex production environment
- [ ] Test order creation in production
- [ ] Test email sending in production
- [ ] Monitor Convex dashboard for errors

---

## Convex Dashboard

Access your Convex dashboard at: [https://dashboard.convex.dev](https://dashboard.convex.dev)

**Features:**
- View and query database tables
- Monitor function execution
- View logs and errors
- Manage environment variables
- Test functions manually

---

## Additional Resources

- [Convex Documentation](https://docs.convex.dev/)
- [Convex React Integration](https://docs.convex.dev/client/react)
- [Resend Documentation](https://resend.com/docs)
- [Convex HTTP Actions](https://docs.convex.dev/functions/http-actions)

---

## Support

If you encounter issues:

1. Check the Convex dashboard logs
2. Review browser console errors
3. Verify all environment variables are set correctly
4. Ensure Convex dev server is running
5. Check Resend dashboard for email delivery status
