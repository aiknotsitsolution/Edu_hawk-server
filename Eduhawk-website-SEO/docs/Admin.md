# EduHawk Admin Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Server Configuration](#server-configuration)
3. [Nginx Setup](#nginx-setup)
4. [301 Redirects](#301-redirects)
5. [Sitemap & SEO](#sitemap--seo)
6. [Troubleshooting](#troubleshooting)
7. [Deployment Checklist](#deployment-checklist)

---

## Introduction

This guide provides instructions for configuring and managing the EduHawk website server, including Nginx setup, 301 redirects, and SEO optimizations.

---

## Server Configuration

### Prerequisites
- Access to the server via SSH (if self-hosted).
- Root or sudo privileges.
- Nginx installed on the server.
- Valid SSL certificates for `www.eduhawk.in`.

---

## Nginx Setup

### Install Nginx
If Nginx is not already installed, run the following commands:

```bash
sudo apt update
sudo apt install nginx
```

### Verify Nginx Installation
```bash
sudo nginx -v
```

---

## 301 Redirects

To ensure all traffic is redirected from `eduhawk.in` to `www.eduhawk.in`, follow these steps:

### Step 1: Edit Nginx Configuration
Open the Nginx configuration file for your website:

```bash
sudo nano /etc/nginx/sites-available/your-site.conf
```

Replace `your-site.conf` with the actual configuration file name for your website.

### Step 2: Add Redirect Rules
Add the following rules at the top of the configuration file:

```nginx
# Redirect HTTP to HTTPS for apex domain
server {
    listen 80;
    server_name eduhawk.in;
    return 301 https://www.eduhawk.in$request_uri;
}

# Redirect HTTPS from apex to www
server {
    listen 443 ssl;
    server_name eduhawk.in;
    return 301 https://www.eduhawk.in$request_uri;
}

# Main server block for www.eduhawk.in
server {
    listen 443 ssl;
    server_name www.eduhawk.in;

    # SSL Configuration
    ssl_certificate /path/to/your/cert.pem;
    ssl_certificate_key /path/to/your/key.pem;

    # Other configurations
    root /var/www/your-site;
    index index.html;
    # Add other necessary directives
}
```

### Step 3: Test and Reload Nginx
Test the Nginx configuration for errors:

```bash
sudo nginx -t
```

Reload Nginx to apply the changes:

```bash
sudo systemctl reload nginx
```

---

## Sitemap & SEO

### Generate Sitemap
The sitemap is automatically generated using the `generate-sitemap.cjs` script. To regenerate the sitemap, run:

```bash
node generate-sitemap.cjs
```

### Verify Sitemap
Check the generated sitemap at:

```bash
cat public/sitemap.xml | head -n 20
```

### Dynamic Lastmod
The `generate-sitemap.cjs` script dynamically sets the `lastmod` field based on the last modified date of the corresponding route file. This ensures the sitemap reflects the most recent updates.

---

## Troubleshooting

### Issue: Redirects Not Working
- **Check Nginx logs**:
  ```bash
  sudo tail -f /var/log/nginx/error.log
  ```

- **Verify configuration syntax**:
  ```bash
  sudo nginx -t
  ```

- **Ensure DNS is correctly configured**: Both `eduhawk.in` and `www.eduhawk.in` should point to the same server IP.

### Issue: SSL Errors
- Ensure SSL certificates are valid and correctly configured in the Nginx configuration.
- Renew certificates if they are about to expire.

### Issue: Sitemap Not Updating
- Ensure the `generate-sitemap.cjs` script is executable:
  ```bash
  chmod +x generate-sitemap.cjs
  ```

- Verify file paths in the script are correct.

---

## Deployment Checklist

### Before Deployment
1. **Backup your current configuration**:
   ```bash
   sudo cp /etc/nginx/sites-available/your-site.conf /etc/nginx/sites-available/your-site.conf.bak
   ```

2. **Test the Nginx configuration**:
   ```bash
   sudo nginx -t
   ```

3. **Verify SSL certificates**:
   - Ensure certificates are valid for `www.eduhawk.in`.
   - Renew if necessary.

### After Deployment
1. **Check redirects**:
   - Visit `http://eduhawk.in` and `https://eduhawk.in` to ensure they redirect to `https://www.eduhawk.in`.

2. **Verify sitemap**:
   - Ensure `public/sitemap.xml` is accessible and correctly formatted.

3. **Test SEO tools**:
   - Use Google Search Console to verify sitemap submission.

4. **Monitor logs**:
   - Check Nginx logs for errors:
     ```bash
     sudo tail -f /var/log/nginx/error.log
     ```

---

## Contact

For further assistance, contact the EduHawk technical team or your hosting provider.

---