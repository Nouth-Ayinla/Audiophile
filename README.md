# Audiophile E-Commerce

A premium audio equipment e-commerce platform built with modern web technologies. Browse and purchase high-quality headphones, speakers, and earphones with a seamless shopping experience.

![Au

# Features

- Product Catalog: Browse products by category (Headphones, Speakers, Earphones)
- Product Details: Detailed product pages with image galleries and specifications
- Shopping Cart: Add, remove, and update product quantities with real-time calculations
- Checkout Process: Secure checkout with form validation
- Order Confirmation: Email notifications with order details and summary
- Responsive Design: Optimized for desktop, tablet, and mobile devices
- Category Navigation: Easy browsing between product categories

  # Tech Stack

 -Frontend
- React - Modern React with hooks and functional components
- TypeScript - Type-safe development
- Vite - Fast build tool and development server
- Tailwind CSS - Utility-first CSS framework
- shadcn/ui - High-quality, accessible UI components
- React Router v6 - Client-side routing
- React Hook Form + Zod - Form validation and management
- TanStack Query - Server state management

# Backend & Services
- Convex - Serverless backend for order storage
- Resend - Email delivery service for order confirmations

# State Management
- React Context API - Cart state management

# 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **bun** package manager
- Convex account (free tier available at [convex.dev](https://convex.dev))
- Resend account (free tier available at [resend.com](https://resend.com))

# Installation & Setup

# 1. Clone the Repository

```bash
git clone <repository-url>
cd audiophile-ecommerce
```

# 2. Install Dependencies

```bash
npm install
# or
bun install
```

# 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_CONVEX_URL=your_convex_deployment_url
```

You'll get the `VITE_CONVEX_URL` after initializing Convex in the next step.

#4. Initialize Convex Backend

```bash
npx convex dev
```

This will:
- Create a new Convex project (or connect to existing one)
- Generate TypeScript types
- Provide your deployment URL
- Start the Convex development server

Important: Keep this terminal window running during development.

#5. Configure Resend API Key

Store your Resend API key in Convex:

```bash
npx convex env set RESEND_API_KEY your_resend_api_key_here
```

Get your API key from [Resend Dashboard](https://resend.com/api-keys).

#6. Start Development Server

Open a new terminal window and run:

```bash
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

# Alternative: Run Both Servers Simultaneously

You can use `concurrently` to run both servers in one command:

```bash
npm install -g concurrently
concurrently "npx convex dev" "npm run dev"
```

#Project Structure

```
├── convex/                 # Convex backend
│   ├── orders.js          # Order management functions
│   ├── http.js            # HTTP endpoints (email sending)
│   └── schema.ts          # Database schema
├── src/
│   ├── assets/            # Images and static assets
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Cart.tsx      # Shopping cart
│   │   ├── Hero.tsx      # Hero section
│   │   └── ...
│   ├── contexts/          # React contexts
│   │   └── CartContext.tsx
│   ├── pages/             # Page components
│   │   ├── Index.tsx     # Home page
│   │   ├── Headphones.tsx
│   │   ├── Speakers.tsx
│   │   ├── Earphones.tsx
│   │   ├── ProductPage.tsx
│   │   ├── Checkout.tsx
│   │   └── OrderConfirmation.tsx
│   ├── lib/               # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Application entry point
├── public/                # Public assets
└── ...config files
```

#Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npx convex dev` - Start Convex backend development server
- `npx convex deploy` - Deploy Convex backend to production

# Backend Setup (Convex)

For detailed backend setup instructions, including database schema and email configuration, see [CONVEX_SETUP.md](./CONVEX_SETUP.md).

# Quick Overview

Database Schema:
- `orders` table stores customer orders
- Includes customer information, items, pricing, and order status
- Indexed by email and creation time for efficient queries

Email Confirmations:
- Automatic order confirmation emails via Resend
- Styled HTML templates with order summary
- Includes customer details and itemized list

# Deployment

#Frontend Deployment

The frontend can be deployed to any static hosting service:

**Vercel** (Recommended):
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
- vercel
- Netlify

# Backend Deployment (Convex)

Deploy your Convex backend to production:

```bash
npx convex deploy
```

Update your production environment variables with the production Convex URL.

#Production Checklist

- [ ] Deploy Convex backend: `npx convex deploy`
- [ ] Update `VITE_CONVEX_URL` in production environment
- [ ] Verify Resend API key is set in production Convex environment
- [ ] Verify Resend domain is properly configured
- [ ] Test order submission and email delivery
- [ ] Build and deploy frontend
- [ ] Test complete checkout flow in production

#  Testing

# Test Order Creation

1. Add products to cart
2. Navigate to checkout
3. Fill in customer information
4. Submit order
5. Verify order confirmation page appears
6. Check email for order confirmation

#  Verify Email Delivery

- Check Resend dashboard for email logs
- Verify emails arrive in inbox (check spam folder)
- Ensure all order details are correct in email

# Troubleshooting

# Common Issues

Convex connection errors:
- Ensure `npx convex dev` is running
- Verify `VITE_CONVEX_URL` is set correctly in `.env.local`
- Check Convex dashboard for deployment status

Email not sending:
- Verify Resend API key is set: `npx convex env get RESEND_API_KEY`
- Check domain verification in Resend dashboard
- Review Resend logs for delivery status

Build errors:
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`
- Ensure all environment variables are set

CORS errors:
- Verify Convex URL matches deployment environment
- Check browser console for specific error messages

For more detailed troubleshooting, see [CONVEX_SETUP.md](./CONVEX_SETUP.md#troubleshooting).

# Additional Resources

- [Convex Documentation](https://docs.convex.dev)
- [Resend Documentation](https://resend.com/docs)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)


Example Confirmation Email Template (HTML)
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body { 
        font-family: Arial, sans-serif; 
        line-height: 1.6; 
        color: #333; 
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }
      .container { 
        max-width: 600px; 
        margin: 0 auto; 
        background-color: white;
      }
      .header { 
        background: #D87D4A; 
        color: white; 
        padding: 30px 20px; 
        text-align: center; 
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
        letter-spacing: 2px;
      }
      .content { 
        padding: 40px 30px; 
      }
      .content h2 {
        color: #D87D4A;
        margin-top: 0;
      }
      .order-item { 
        border-bottom: 1px solid #ddd; 
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .order-summary {
        background: #f9f9f9;
        padding: 20px;
        margin: 20px 0;
        border-radius: 4px;
      }
      .total { 
        font-size: 20px; 
        font-weight: bold; 
        color: #D87D4A;
        border-top: 2px solid #D87D4A;
        padding-top: 10px;
      }
      .button { 
        display: inline-block; 
        background: #D87D4A; 
        color: white; 
        padding: 14px 40px; 
        text-decoration: none; 
        border-radius: 4px;
        font-weight: bold;
      }
      .footer {
        background: #f9f9f9;
        padding: 20px;
        text-align: center;
        color: #666;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>AUDIOPHILE</h1>
      </div>
      <div class="content">
        <h2>Thank you for your order, {customerName}!</h2>
        <p>Your order has been confirmed and will be shipped soon.</p>
        
        <div style="background: #f0f0f0; padding: 15px; border-radius: 4px;">
          <strong>Order ID:</strong> {orderId}
        </div>
        
        <h3>Order Items:</h3>
        <!-- Order items loop here -->
        
        <h3>Shipping Address:</h3>
        <div style="background: #f9f9f9; padding: 15px;">
          <p>{customerName}</p>
          <p>{shippingAddress}</p>
          <p>{city}, {zip}</p>
        </div>
        
        <h3>Order Summary:</h3>
        <div class="order-summary">
          <p>Subtotal: ${subtotal}</p>
          <p>Shipping: ${shipping}</p>
          <p>VAT: ${vat}</p>
          <p class="total">Grand Total: ${grandTotal}</p>
        </div>
        
        <a href="mailto:support@audiophile.com" class="button">CONTACT SUPPORT</a>
      </div>
      <div class="footer">
        <p>© {year} Audiophile. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>


