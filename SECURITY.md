# Security

## Environment variables

Never commit `.env` files. This repository only tracks `.env.example` with placeholder values.

If `.env` was ever committed with real credentials:

1. Remove `.env` from git tracking: `git rm --cached .env`
2. **Rotate exposed credentials immediately** in the [EmailJS dashboard](https://dashboard.emailjs.com/) (Account → General → Refresh Keys, then update service/template IDs if needed)
3. Set new values locally in `.env` (copy from `.env.example`)
4. For Netlify, update environment variables in Site settings → Environment variables
5. If keys were pushed to a public remote, assume they are compromised even after removal from the latest commit. Rotating credentials is required.

## Reporting issues

If you discover a security issue, please email brian.hopper@live.com instead of opening a public issue.
