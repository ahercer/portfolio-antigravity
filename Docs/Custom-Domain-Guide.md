# Custom Domain Configuration Guide

This guide explains how to replace the auto-generated Azure URL (e.g., `ambitious-wave-...`) with a professional custom domain (e.g., `annahercer.com` or `ahercer.pl`).

## 1. Purchase a Domain
You can purchase a domain from any registrar (e.g., GoDaddy, Namecheap, OVH, or Azure Domains). For a BI professional, `.com`, `.io`, or a local TLD like `.pl` are recommended.

## 2. Configuration in Azure Portal
1.  Log in to the [Azure Portal](https://portal.azure.com).
2.  Navigate to your **Static Web App** resource (`ambitious-wave-...`).
3.  In the left-hand menu, under the *Settings* section, select **Custom domains**.
4.  Click **+ Add**, then choose:
    *   **Custom domain on other DNS**: Use this if you bought your domain outside of Azure.
5.  Enter your domain name (e.g., `www.yourdomain.com`) and click **Next**.

## 3. DNS Validation
To prove ownership, you need to add records to your DNS provider's dashboard:

### Option A: CNAME (Recommended for `www` subdomains)
*   **Type**: `CNAME`
*   **Host/Name**: `www`
*   **Value/Alias**: Paste the auto-generated hostname (`ambitious-wave-07a243303.6.azurestaticapps.net`).

### Option B: TXT (For root domains like `yourdomain.com`)
*   If you want to use the root domain without `www`, Azure will provide a unique **TXT code**.
*   Add a `TXT` record at your registrar with that code.

## 4. Set as Default (The "Magic" Step)
Once Azure validates the domain (status becomes "Ready"):
1.  Go back to the **Custom domains** tab in Azure.
2.  Select your new domain.
3.  Click **Set default**.

**Result:** Any user visiting the old `ambitious-wave-...` URL will be automatically redirected to your professional domain.

## 5. SSL/TLS Certificates
Azure Static Web Apps **automatically provides and renews** free SSL certificates for your custom domains. No manual configuration or payment is required for HTTPS.

---
*Generated for the "Portfolio with Antigravity" project.*
