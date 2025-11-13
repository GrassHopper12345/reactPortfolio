# EmailJS Setup Instructions

To enable direct email sending (without redirecting to email client), you need to set up EmailJS.

## Quick Setup Steps:

1. **Sign up for EmailJS** (Free tier available)
   - Go to https://www.emailjs.com
   - Create a free account

2. **Create an Email Service**
   - Go to "Email Services" in the dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions to connect your email

3. **Create an Email Template**
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use this template structure:
     ```
     Subject: Portfolio Contact from {{from_name}}
     
     From: {{from_name}} ({{from_email}})
     
     Message:
     {{message}}
     ```
   - Set "To Email" to: brian.hopper@live.com
   - Save the template

4. **Get Your IDs and Keys**

   **Public Key:**
   - Go to "Account" > "General" tab
   - Find "API keys" section
   - Copy your "Public Key" (e.g., `NMI0utYSyhI5AOLDR`)

   **Service ID:**
   - Go to "Email Services" in the left sidebar
   - Click on your email service (the one you created)
   - The Service ID will be shown in the service details page
   - It's usually a short string like `service_xxxxx` or just `xxxxx`
   - You can also find it in the URL when viewing the service

   **Template ID:**
   - Go to "Email Templates" in the left sidebar
   - Click on your "Contact Us" template
   - The Template ID will be shown in the template details
   - It's usually a short string like `template_xxxxx` or just `xxxxx`
   - You can also find it in the URL when viewing the template

5. **Create .env file**
   - Create a file named `.env` in the root of your project (same level as `package.json`)
   - Add these variables with your actual values:
     ```
     VITE_EMAILJS_PUBLIC_KEY=NMI0utYSyhI5AOLDR
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     ```
   - Replace `your_service_id_here` and `your_template_id_here` with your actual IDs

6. **Restart your dev server**
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again

## Troubleshooting "Account not found" (404) Error:

If you're getting a "Account not found" error, check these:

1. **Verify your Public Key is correct:**
   - Go to "Account" > "General" > "API keys"
   - Make sure you copied the **Public Key** (not Private Key)
   - If unsure, click "Refresh Keys" and copy the new Public Key
   - Update your `.env` file with the new key
   - **Restart your dev server** after updating `.env`

2. **Check Domain Restrictions (if any):**
   - Go to "Account" > "Security" tab
   - Check if there are any domain restrictions set
   - For local development, you may need to add `localhost` or `127.0.0.1` to allowed domains
   - Or temporarily disable domain restrictions for testing

3. **Verify Service and Template IDs:**
   - Make sure your Service ID matches exactly (including the `service_` prefix)
   - Make sure your Template ID matches exactly (including the `template_` prefix)
   - Check the browser console for debug logs showing what values are being used

4. **Restart Dev Server:**
   - Environment variables only load when the server starts
   - After updating `.env`, you MUST restart: `Ctrl+C` then `npm run dev`

5. **Check EmailJS Account Status:**
   - Make sure your EmailJS account is active
   - Verify you haven't exceeded the free tier limit (200 emails/month)

## Note:
- The form will work with mailto: (redirects to email client) if EmailJS is not configured
- Once EmailJS is set up, emails will send directly without any redirects
- Free tier allows 200 emails per month
- Check the browser console for debug logs to see what values are being used

